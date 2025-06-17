---
title: 'π0 and π0-FAST: Vision-Language-Action Models for General Robot Control'
description: ''
pubDate: Tue, 04 Feb 2025 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/pi0
---

π0 and π0-FAST: Vision-Language-Action Models for General Robot Control
We have ported the first robotics foundation models to Hugging Face LeRobot! Both π0 and π0-FAST, developed by Physical Intelligence, are now available in the LeRobot repository, bringing generalist robotic intelligence to the Hugging Face ecosystem. If you are curious about how Vision-Language-Action (VLA) models differ from Vision-Language Models (VLMs) and how actions are represented, dive into this blog post to find out!
Explore the model collection and the PyTorch Version of the model in our repository: Huggingface collection of Pi0 models | Huggingface collection of Pi0+FAST models | LeRobot repo
Introduction
Robert Heinlein suggests that a well-rounded person should be capable of handling a wide range of tasks—both intellectual and physical—rather than being narrowly specialized in one field. Drawing a parallel between a well-rounded person and machine intelligence: AI systems vary widely, but human intelligence excels in versatility—adapting to tasks, environments, and surprises. While large language and vision-language models (LLMs, VLMs) show promise, they lack interaction with the physical world. To bridge this gap, we need models trained on robotic data. Generalist robot models can enhance adaptability, using diverse data to improve generalization and robustness. Instead of training on isolated tasks, pre-training on varied robotic data—similar to LLMs—boosts efficiency and performance.
Developing generalist robot policies, or robot foundation models, presents three key challenges:
The need for large-scale research to fully leverage pre-training benefits.
Designing model architectures that can integrate diverse data sources while capturing complex physical interactions. A key challenge in this regard is cross-embodiment training, where a model must learn from diverse robot types with varying configurations, control spaces, and action representations. Existing approaches tackle this by:
- Combining multimodal datasets from different robotic platforms to enhance generalization.
- Using shared representations to bridge the gap between distinct robot morphologies, such as single-arm, dual-arm, and mobile manipulators.
Crafting an effective training recipe, as recent advances in NLP and vision have heavily relied on careful pre-training and post-training strategies.
In this post, we introduce π0 and π0-FAST, prototype models and learning frameworks developed by Physical Intelligence, designed to overcome these challenges.
🔍 What is π0?
π0 (Pi-Zero) is a Vision-Language-Action (VLA) model, developed by the Physical Intelligence team designed for generalist robot control. It builds upon large-scale pretraining and flow matching-based action generation, enabling robots to perform dexterous manipulation tasks across different embodiments.
π0 is trained on data from 7 robotic platforms and 68 unique tasks, demonstrating strong zero-shot and fine-tuned performance on complex, real-world tasks such as laundry folding, table bussing, grocery bagging, box assembly, and object retrieval.
Unlike standard robotic policies, π0 employs flow matching to produce smooth, real-time action trajectories at 50Hz, making it highly efficient, precise, and adaptable for real-world deployment. Flow matching was used in continuous normalizing flows and improved generation quality in diffusion models. The denoising process π0 used works in the same way, starting with a random noise that progressively converges towards a sequence of motor actions that make sense.
How to Use π0 in LeRobot?
First of all, you need to upgrade your lerobot install, which leverages transformers
as a dependency now! Simply do after a git clone
pip install -e ".[pi0]"
π0 models are foundational models that, much like PaliGemma, are made to be adapted to a variety of frameworks, environments, and scene inputs. The base models here are usable as-is, in particular π0.
Inference on π0 pretrained model
python lerobot/scripts/eval.py \
--pretrained_policy.path=/path/to/pretrained/pi0
However, the performances are reduced as it's a conversion from jax to torch and from a specific environment. We recommend fine-tuning your own π0 to your own environment, like below.
Fine-tuning the π0 Pretrained Model
To fine-tune the π0 model using the pi0_base
checkpoint from openpi
, run the following command:
python lerobot/scripts/train.py \
--policy.path=lerobot/pi0 \
--dataset.repo_id=danaaubakirova/koch_test
To fine-tune the π0 neural network with PaliGemma and Expert Gemma, which were pretrained using VLM default parameters before π0 fine-tuning, execute:
python lerobot/scripts/train.py \
--policy.type=pi0 \
--dataset.repo_id=danaaubakirova/koch_test
You can also use the pretrained π0 model independently from the LeRobot training framework with the following code:
policy = Pi0Policy.from_pretrained("lerobot/pi0")
What is the difference between VLMs and VLAs?
Vision-Language Models (VLMs) and Vision-Language-Action Models (VLAs) share a common foundation: transformers. However, the key distinction lies in action representation. While VLMs process and generate multimodal representations (images and text), VLAs extend this by incorporating action and observation state tokens. With these additional tokens in place, the next challenge is understanding how attention is computed.
Attention Mechanisms in Robotics Policies
Let’s expand our vocabulary and introduce key terms:
State Token
- It is a single token that represents the robot’s current environment state (e.g., joint angles, sensor values, or other relevant observations).
- The masking rules allow this token to attend to the prefix’s image and text, meaning the state token can “see” any visual or textual cues necessary for decision-making.
- It also attends to previous states in a triangular manner. If multiple state tokens are used, each new state token can see older ones but not vice versa.
Action Tokens
- Represent the motor command sequence.
- Have full visibility over everything except padding regions. This means each action token can attend to:
- All non-padding image tokens (the entire scene),
- All non-padding text tokens (instructions or descriptions),
- State tokens (both current and previous),
- Other action tokens.
Prefix Tokens
- Represent the full scene and fully attend to each other, similar to PaliGemma.
Key Idea
These tokens encapsulate:
- The robot’s internal representation of the environment (state),
- The commands or controls the robot issues (action),
- An encoding of time or step index (time embedding).
They are appended after the prefix portion (images + text), so the prefix serves as context (e.g., a scene image, language instructions like "be a good robot" or "transfer the cube"), while the suffix captures policy‐specific features.
⚡ Towards the Faster Attention in π0
However, efficiently handling attention in π0 comes with its own set of challenges. The unique shape of its attention mask influences how attention is computed—let’s dive into the details!
Handling 2D Attention Masks
The resulting 2D causal mask exhibits strong block sparsity, but defining the boundaries of each block—especially in a batch of samples—is a bit tricky. We are used to causal masks with triangular structures for autoregressive modeling, but this is not one of those cases.
As you can see in this example below: the image (first element) has some padding tokens, representing empty cameras. Then, text tokens and state tokens are added. This "prefix" part forms a fully noncausal attention, as in PaliGemma. Then, the "suffix" (state + action/time tokens) has a causal-block structure. The eager naive implementation performs matrix multiplications and applies softmax across the entire input, making it highly inefficient.
Figure 1: The visualization of the VLA attention mask
Can we use FlashAttention2?
- FlashAttention2 provides a varlen interface, but the
cu_seqlens
(cumulative prefix lengths) must be computed manually. It is designed for contiguous (or strictly causal) attention patterns with uniform query and key lengths. - It does not naturally handle irregular block masks or arbitrary per-token “allowed” positions, which is exactly what we need.
- So, while it's possible to use it at some cost of implementation, we decided to turn to...
Using FlexAttention in PyTorch
This looks like a FlexAttention job! It has a pure PyTorch interface, in which explored two options:
- Adding a
score_mod
to our causal mask in positions where attention is tuned out. However, even a scalar addition significantly decreases FlexAttention’s performance. This is because thescore_mod
in our case is added outside of the optimized cuda kernel. - The correct option is indexing our causal mask and passing the resulting signature to create a block mask. This block mask efficiently indicates where the attention has to be computed and where it can be skipped entirely.
# Example of indexing the causal mask and using mask_mod
causal_mask = generate_causal_mask(your_samples) # should be[batch, head, q_len, kv_len]
# Now we need to wrap this mask
def precomputed_mask_factory(precomputed_mask: torch.Tensor) -> _mask_mod_signature:
def mask_mod(b, h, q_idx, kv_idx):
return precomputed_mask[b][h][q_idx][kv_idx]
return mask_mod
flex_attention_output = flex_attention(query, key, value, mask_mod=mask_mod)
mask_mod = precomputed_mask_factory(causal_mask)
# create a block mask with that signature
block_mask = create_block_mask(
mask_mod=mask_mod,
# ...
)
# Call flex attention now!
attn_output, attention_weights = flex_attention(
query,
key,
value,
block_mask=block_mask,
)
The current implementation runs, and a WIP is to have it support torch.compile
and leverage it to the fullest!
How to effectively represent Actions?
Now that we know actions are simply n-dimensional vectors that can be tokenized, we can explore the challenges of action representation in Vision-Language-Action (VLA) models. The way actions are represented directly impacts efficiency, generalization, and execution fidelity.
One approach is semantic action representation, where actions are described as high-level concepts like sub-tasks or keypoints. While this allows for few-shot and zero-shot learning, it often relies on hand-designed low-level controllers, limiting flexibility across different robots. In contrast, low-level control representations map actions directly to motor commands, enabling precise movements but making training less stable and harder to scale.
Most existing VLAs use discrete action tokenization, converting continuous actions into discrete tokens generated autoregressively. The most common method—per-dimension, per-timestep binning—struggles with high-frequency control tasks, leading to lossy representations and inefficient training. Alternatives like vector quantization (VQ) and time-series compression help, but VQ is sensitive to hyperparameters, making it less reliable for diverse robot designs.
To address these issues, Frequency-space Action Sequence Tokenization (FAST) introduces a novel time-series compression approach using the Discrete Cosine Transform (DCT). FAST reduces redundancy, improves efficiency, and enhances action fidelity.
With this, we present π0-FAST, faster and autoregressive version of π0 also available in Lerobot repo, an extension of π0, which leverages this new tokenizer for better action representation.
🚀 What is π0-FAST?
Paper | Jax Code | Our implementation in Lerobot
π0-FAST is an autoregressive version of π0, introducing **FAST (Frequency-space Action Sequence Tokenization)**—a new tokenization scheme that enhances efficiency and performance.
Key Advantages of π0-FAST:
- 5x faster training compared to diffusion-based VLAs.
- Improved action representation, reducing redundancy in action sequences.
- Stronger generalization across unseen environments and robot morphologies.
🔗 The π0-FAST tokenizer can be accessed here: FAST Tokenizer
🔗 Pretrained weights can be accessed here: Pi0+FAST
How does FAST work?
FAST uses the Discrete Cosine Transform (DCT) to compress continuous action sequences into discrete tokens. The process, illustrated in Figure 2, begins with normalizing raw robot actions, mapping the 1st and 99th quantiles of each action dimension to the range [-1,1]. This normalization is used to ensure consistency across different robotic systems and improve robustness against outliers.
Each action dimension is then transformed independently using DCT, converting the time-domain signal into the frequency domain. To reduce redundancy, insignificant coefficients are removed through a scale-and-round operation, where a hyperparameter balances compression rate and reconstruction accuracy. The resulting DCT coefficient matrix, often sparse, is flattened into a one-dimensional sequence of integers, interleaving low-frequency components first across dimensions to preserve critical information.
To further compress the sequence, Byte Pair Encoding (BPE) is applied. As usual, BPE merges frequently occurring patterns across dimensions while maintaining a fixed-size vocabulary.
Figure 2: The FAST action tokenization pipeline
Since all operations are invertible, actions can be reconstructed efficiently and losslessly from tokens. The tokenization pipeline has only two hyperparameters: the scaling coefficient applied before rounding and the BPE vocabulary size. Both parameters remain robust across different datasets.
Additionally, a universal version of FAST, called FAST+, has been trained on one million action sequences from single-arm, bimanual, and mobile manipulation robots, making it applicable across diverse robotic setups. FAST+ is available as a Hugging Face AutoProcessor, allowing users to tokenize action sequences with just a few lines of code.
For optimal compression, input actions should be quantile-normalized to [-1,1] before tokenization. With the AutoProcessor
module, the users can train a custom FAST tokenizer on their own datasets.
How to use FAST tokenizer?
🔗 Code for the usage and training custom action tokenizers in the official FAST Repo
FAST is integrated into Hugging Face Transformers and can be easily used for encoding and decoding robot action sequences.
What’s Next for Generalist Robot Intelligence?
With π0 and π0-FAST, we take a significant step towards generalist robot intelligence, bringing scalable, efficient, and versatile Vision-Language-Action (VLA) models to LeRobot. By leveraging FAST tokenization, we enhance action representation, enabling robots to perform a diverse range of tasks with higher efficiency and adaptability. These steps open the door for future multi-embodiment, real-time robotic policies, pushing the boundaries of what robots can achieve in the real world. 🚀
Additional Resources
References
@book{heinlein2021time,
title={Time enough for love},
author={Heinlein, Robert A},
year={2021},
publisher={Penguin}
}
@article{black2024pi_0,
title={$$\backslash$pi\_0 $: A Vision-Language-Action Flow Model for General Robot Control},
author={Black, Kevin and Brown, Noah and Driess, Danny and Esmail, Adnan and Equi, Michael and Finn, Chelsea and Fusai, Niccolo and Groom, Lachy and Hausman, Karol and Ichter, Brian and others},
journal={arXiv preprint arXiv:2410.24164},
year={2024}
}
@article{pertsch2025fast,
title={FAST: Efficient Action Tokenization for Vision-Language-Action Models},
author={Pertsch, Karl and Stachowicz, Kyle and Ichter, Brian and Driess, Danny and Nair, Suraj and Vuong, Quan and Mees, Oier and Finn, Chelse|a and Levine, Sergey},
journal={arXiv preprint arXiv:2501.09747},
year={2025}
}