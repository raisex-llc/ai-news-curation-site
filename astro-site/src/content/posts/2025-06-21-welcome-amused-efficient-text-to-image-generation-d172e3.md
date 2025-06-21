---
title: 'Welcome aMUSEd: Efficient Text-to-Image Generation'
description: ''
summary: ''
pubDate: Thu, 04 Jan 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/amused
---

Welcome aMUSEd: Efficient Text-to-Image Generation
We’re excited to present an efficient non-diffusion text-to-image model named aMUSEd. It’s called so because it’s a open reproduction of Google's MUSE. aMUSEd’s generation quality is not the best and we’re releasing a research preview with a permissive license.
In contrast to the commonly used latent diffusion approach (Rombach et al. (2022)), aMUSEd employs a Masked Image Model (MIM) methodology. This not only requires fewer inference steps, as noted by Chang et al. (2023), but also enhances the model's interpretability.
Just as MUSE, aMUSEd demonstrates an exceptional ability for style transfer using a single image, a feature explored in depth by Sohn et al. (2023). This aspect could potentially open new avenues in personalized and style-specific image generation.
In this blog post, we will give you some internals of aMUSEd, show how you can use it for different tasks, including text-to-image, and show how to fine-tune it. Along the way, we will provide all the important resources related to aMUSEd, including its training code. Let’s get started 🚀
Table of contents
We have built a demo for readers to play with aMUSEd. You can try it out in this Space or in the playground embedded below:
How does it work?
aMUSEd is based on Masked Image Modeling. It makes for a compelling use case for the community to explore components that are known to work in language modeling in the context of image generation.
The figure below presents a pictorial overview of how aMUSEd works.
During training:
- input images are tokenized using a VQGAN to obtain image tokens
- the image tokens are then masked according to a cosine masking schedule.
- the masked tokens (conditioned on the prompt embeddings computed using a CLIP-L/14 text encoder are passed to a U-ViT model that predicts the masked patches
During inference:
- input prompt is embedded using the CLIP-L/14 text encoder.
- iterate till
N
steps are reached:- start with randomly masked tokens and pass them to the U-ViT model along with the prompt embeddings
- predict the masked tokens and only keep a certain percentage of the most confident predictions based on the
N
and mask schedule. Mask the remaining ones and pass them off to the U-ViT model
- pass the final output to the VQGAN decoder to obtain the final image
As mentioned at the beginning, aMUSEd borrows a lot of similarities from MUSE. However, there are some notable differences:
- aMUSEd doesn’t follow a two-stage approach for predicting the final masked patches.
- Instead of using T5 for text conditioning, CLIP L/14 is used for computing the text embeddings.
- Following Stable Diffusion XL (SDXL), additional conditioning, such as image size and cropping, is passed to the U-ViT. This is referred to as “micro-conditioning”.
To learn more about aMUSEd, we recommend reading the technical report here.
Using aMUSEd in 🧨 diffusers
aMUSEd comes fully integrated into 🧨 diffusers. To use it, we first need to install the libraries:
pip install -U diffusers accelerate transformers -q
Let’s start with text-to-image generation:
import torch
from diffusers import AmusedPipeline
pipe = AmusedPipeline.from_pretrained(
"amused/amused-512", variant="fp16", torch_dtype=torch.float16
)
pipe = pipe.to("cuda")
prompt = "A mecha robot in a favela in expressionist style"
negative_prompt = "low quality, ugly"
image = pipe(prompt, negative_prompt=negative_prompt, generator=torch.manual_seed(0)).images[0]
image
We can study how num_inference_steps
affects the quality of the images under a fixed seed:
from diffusers.utils import make_image_grid
images = []
for step in [5, 10, 15]:
image = pipe(prompt, negative_prompt=negative_prompt, num_inference_steps=step, generator=torch.manual_seed(0)).images[0]
images.append(image)
grid = make_image_grid(images, rows=1, cols=3)
grid
Crucially, because of its small size (only ~800M parameters, including the text encoder and VQ-GAN), aMUSEd is very fast. The figure below provides a comparative study of the inference latencies of different models, including aMUSEd:
As a direct byproduct of its pre-training objective, aMUSEd can do image inpainting zero-shot, unlike other models such as SDXL.
import torch
from diffusers import AmusedInpaintPipeline
from diffusers.utils import load_image
from PIL import Image
pipe = AmusedInpaintPipeline.from_pretrained(
"amused/amused-512", variant="fp16", torch_dtype=torch.float16
)
pipe = pipe.to("cuda")
prompt = "a man with glasses"
input_image = (
load_image(
"https://huggingface.co/amused/amused-512/resolve/main/assets/inpainting_256_orig.png"
)
.resize((512, 512))
.convert("RGB")
)
mask = (
load_image(
"https://huggingface.co/amused/amused-512/resolve/main/assets/inpainting_256_mask.png"
)
.resize((512, 512))
.convert("L")
)
image = pipe(prompt, input_image, mask, generator=torch.manual_seed(3)).images[0]
aMUSEd is the first non-diffusion system within diffusers
. Its iterative scheduling approach for predicting the masked patches made it a good candidate for diffusers
. We are excited to see how the community leverages it.
We encourage you to check out the technical report to learn about all the tasks we explored with aMUSEd.
Fine-tuning aMUSEd
We provide a simple training script for fine-tuning aMUSEd on custom datasets. With the 8-bit Adam optimizer and float16 precision, it's possible to fine-tune aMUSEd with just under 11GBs of GPU VRAM. With LoRA, the memory requirements get further reduced to just 7GBs.
aMUSEd comes with an OpenRAIL license, and hence, it’s commercially friendly to adapt. Refer to this directory for more details on fine-tuning.
Limitations
aMUSEd is not a state-of-the-art image generation regarding image quality. We released aMUSEd to encourage the community to explore non-diffusion frameworks such as MIM for image generation. We believe MIM’s potential is underexplored, given its benefits:
- Inference efficiency
- Smaller size, enabling on-device applications
- Task transfer without requiring expensive fine-tuning
- Advantages of well-established components from the language modeling world
(Note that the original work on MUSE is close-sourced)
For a detailed description of the quantitative evaluation of aMUSEd, refer to the technical report.
We hope that the community will find the resources useful and feel motivated to improve the state of MIM for image generation.
Resources
Papers:
- Muse: Text-To-Image Generation via Masked Generative Transformers
- aMUSEd: An Open MUSE Reproduction
- Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (T5)
- Learning Transferable Visual Models From Natural Language Supervision (CLIP)
- SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis
- Simple diffusion: End-to-end diffusion for high resolution images (U-ViT)
- LoRA: Low-Rank Adaptation of Large Language Models
Code + misc:
Acknowledgements
Suraj led training. William led data and supported training. Patrick von Platen supported both training and data and provided general guidance. Robin Rombach did the VQGAN training and provided general guidance. Isamu Isozaki helped with insightful discussions and made code contributions.
Thanks to Patrick von Platen and Pedro Cuenca for their reviews on the blog post draft.