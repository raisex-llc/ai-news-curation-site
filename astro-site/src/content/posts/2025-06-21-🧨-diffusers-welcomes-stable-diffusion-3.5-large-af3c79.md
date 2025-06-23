---
title: "🧨 Diffusers welcomes Stable Diffusion 3.5 Large"
description: ""
summary: ""
pubDate: "Tue, 22 Oct 2024 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/sd3-5"
thumbnail: ""
---

🧨 Diffusers welcomes Stable Diffusion 3.5 Large
Stable Diffusion 3.5 is the improved variant of its predecessor, Stable Diffusion 3. As of today, the models are available on the Hugging Face Hub and can be used with 🧨 Diffusers.
The release comes with two checkpoints:
- A large (8B) model
- A large (8B) timestep-distilled model enabling few-step inference
In this post, we will focus on how to use Stable Diffusion 3.5 (SD3.5) with Diffusers, covering both inference and training.
Table Of Contents
- Architectural changes
- Using SD3.5 with Diffusers
- Performing inference with quantization
- Training LoRAs with quantization
- Using single-file loading
- Important links
Architectural changes
The transformer architecture of SD3.5 (large) is very similar to SD3 (medium), with the following changes:
- QK normalization: For training large transformer models, QK normalization has now become a standard, and SD3.5 Large is no exception.
- Dual attention layers: Instead of using single attention layers for each stream of modality in the MMDiT blocks, SD3.5 uses double attention layers.
The rest of the details in terms of the text encoders, VAE, and noise scheduler stay exactly the same as in SD3 Medium. For more on SD3, we recommend checking out the original paper.
Using SD3.5 with Diffusers
Make sure you install the latest version of diffusers:
pip install -U diffusers
As the model is gated, before using it with diffusers, you first need to go to the Stable Diffusion 3.5 Large Hugging Face page, fill in the form and accept the gate. Once you are in, you need to log in so that your system knows you’ve accepted the gate. Use the command below to log in:
huggingface-cli login
The following snippet will download the 8B parameter version of SD3.5 in torch.bfloat16
precision.
This is the format used in the original checkpoint published by Stability AI, and is the recommended way to run inference.
import torch
from diffusers import StableDiffusion3Pipeline
pipe = StableDiffusion3Pipeline.from_pretrained(
"stabilityai/stable-diffusion-3.5-large", torch_dtype=torch.bfloat16
).to("cuda")
image = pipe(
prompt="a photo of a cat holding a sign that says hello world",
negative_prompt="",
num_inference_steps=40,
height=1024,
width=1024,
guidance_scale=4.5,
).images[0]
image.save("sd3_hello_world.png")
The release also comes with a “timestep-distilled” model that eliminates classifier-free guidance and lets us generate images in fewer steps (typically in 4-8 steps).
import torch
from diffusers import StableDiffusion3Pipeline
pipe = StableDiffusion3Pipeline.from_pretrained(
"stabilityai/stable-diffusion-3.5-large-turbo", torch_dtype=torch.bfloat16
).to("cuda")
image = pipe(
prompt="a photo of a cat holding a sign that says hello world",
num_inference_steps=4,
height=1024,
width=1024,
guidance_scale=1.0,
).images[0]
image.save("sd3_hello_world.png")
All the examples shown in our SD3 blog post and the official Diffusers documentation should already work with SD3.5. In particular, both of those resources dive deep into optimizing the memory requirements to run inference. Since SD3.5 Large is significantly larger than SD3 Medium, memory optimization becomes crucial to allow inference on consumer interfaces.
Running inference with quantization
Diffusers natively supports working with bitsandbytes
quantization, which optimizes memory even more.
First, make sure to install all the libraries necessary:
pip install -Uq git+https://github.com/huggingface/transformers@main
pip install -Uq bitsandbytes
Then load the transformer in “NF4” precision:
from diffusers import BitsAndBytesConfig, SD3Transformer2DModel
import torch
model_id = "stabilityai/stable-diffusion-3.5-large"
nf4_config = BitsAndBytesConfig(
load_in_4bit=True,
bnb_4bit_quant_type="nf4",
bnb_4bit_compute_dtype=torch.bfloat16
)
model_nf4 = SD3Transformer2DModel.from_pretrained(
model_id,
subfolder="transformer",
quantization_config=nf4_config,
torch_dtype=torch.bfloat16
)
And now, we’re ready to run inference:
from diffusers import StableDiffusion3Pipeline
pipeline = StableDiffusion3Pipeline.from_pretrained(
model_id,
transformer=model_nf4,
torch_dtype=torch.bfloat16
)
pipeline.enable_model_cpu_offload()
prompt = "A whimsical and creative image depicting a hybrid creature that is a mix of a waffle and a hippopotamus, basking in a river of melted butter amidst a breakfast-themed landscape. It features the distinctive, bulky body shape of a hippo. However, instead of the usual grey skin, the creature's body resembles a golden-brown, crispy waffle fresh off the griddle. The skin is textured with the familiar grid pattern of a waffle, each square filled with a glistening sheen of syrup. The environment combines the natural habitat of a hippo with elements of a breakfast table setting, a river of warm, melted butter, with oversized utensils or plates peeking out from the lush, pancake-like foliage in the background, a towering pepper mill standing in for a tree. As the sun rises in this fantastical world, it casts a warm, buttery glow over the scene. The creature, content in its butter river, lets out a yawn. Nearby, a flock of birds take flight"
image = pipeline(
prompt=prompt,
negative_prompt="",
num_inference_steps=28,
guidance_scale=4.5,
max_sequence_length=512,
).images[0]
image.save("whimsical.png")
You can control other knobs in the BitsAndBytesConfig
. Refer to the documentation for details.
It is also possible to directly load a model quantized with the same nf4_config
as above.
This is particularly helpful for machines with low RAM. Refer to this Colab Notebook for an end-to-end example.
Training LoRAs with SD3.5 Large with quantization
Thanks to libraries like bitsandbytes
and peft
, it is possible to fine-tune large models like SD3.5 Large on consumer GPU cards having 24GBs of VRAM. It is already possible to leverage our existing SD3 training script for training LoRAs.
The below training command already works:
accelerate launch train_dreambooth_lora_sd3.py \
--pretrained_model_name_or_path="stabilityai/stable-diffusion-3.5-large" \
--dataset_name="Norod78/Yarn-art-style" \
--output_dir="yart_art_sd3-5_lora" \
--mixed_precision="bf16" \
--instance_prompt="Frog, yarn art style" \
--caption_column="text"\
--resolution=768 \
--train_batch_size=1 \
--gradient_accumulation_steps=1 \
--learning_rate=4e-4 \
--report_to="wandb" \
--lr_scheduler="constant" \
--lr_warmup_steps=0 \
--max_train_steps=700 \
--rank=16 \
--seed="0" \
--push_to_hub
However, to make it work with quantization, we need to tweak a couple of knobs. Below, we provide pointers on how to do that:
- We initialize
transformer
either with a quantization config or load a quantized checkpoint directly. - Then, we prepare it by using the
prepare_model_for_kbit_training()
frompeft
. - The rest of the process remains the same, thanks to
peft
's strong support forbitsandbytes
!
Refer to this example script for a fuller example.
Using single-file loading with the Stable Diffusion 3.5 Transformer
You can load the Stable Diffusion 3.5 Transformer model using the original checkpoint files published by Stability AI with the from_single_file
method:
import torch
from diffusers import SD3Transformer2DModel, StableDiffusion3Pipeline
transformer = SD3Transformer2DModel.from_single_file(
"https://huggingface.co/stabilityai/stable-diffusion-3.5-large-turbo/blob/main/sd3.5_large.safetensors",
torch_dtype=torch.bfloat16,
)
pipe = StableDiffusion3Pipeline.from_pretrained(
"stabilityai/stable-diffusion-3.5-large",
transformer=transformer,
torch_dtype=torch.bfloat16,
)
pipe.enable_model_cpu_offload()
image = pipe("a cat holding a sign that says hello world").images[0]
image.save("sd35.png")
Important links
- Stable Diffusion 3.5 Large collection on the Hub
- Official Diffusers documentation for Stable Diffusion 3.5
- Colab Notebook to run inference with quantization
- Training LoRAs
- Stable Diffusion 3 paper
- Stable Diffusion 3 blog post
Acknowledgements: Daniel Frank for the background photo used in the thumbnail of this blog post. Thanks to Pedro Cuenca and Tom Aarsen for their reviews on the post draft.