---
title: Training-Free Tokenizer Transplantation via Orthogonal Matching Pursuit
description: "arXiv:2506.06607v1 Announce Type: cross \nAbstract: We present a training-free\
  \ method to transplant tokenizers in pretrained large language models (LLMs) by\
  \ reconstructing unseen token embeddings via Orthogonal Matching Pursuit (OMP).\
  \ Specifically, we approximate each out-of-vocabulary token as a sparse linear combination\
  \ of shared tokens, in two phases: first, compute each new token's representation\
  \ in the donor embedding space with a small dictionary of shared anchor tokens,\
  \ then transfer these same sparse coefficients back into the base model's embedding\
  \ space.\n  On two challenging cross-tokenizer tasks--Llama$\\to$Mistral NeMo (12B)\
  \ and Qwen$\\to$Llama (1B)--we show that OMP achieves best zero-shot preservation\
  \ of the base model's performance across multiple benchmarks, while other zero-shot\
  \ approaches degrade significantly. Compared to baselines (zero-init, mean-init,\
  \ and existing approaches like WECHSEL, FOCUS, ZETT), OMP consistently achieves\
  \ the best overall performance, effectively bridging large tokenizer discrepancies\
  \ without gradient updates. Our analysis further identifies mismatched numerical\
  \ tokenization schemes as a critical challenge for preserving mathematical reasoning\
  \ capabilities. This technique enables direct reuse of pretrained model weights\
  \ with new tokenizers, facilitating cross-tokenizer knowledge distillation, speculative\
  \ decoding, ensembling, merging, and domain-specific vocabulary adaptations. We\
  \ integrate our method into the open-source mergekit-tokensurgeon tool for post\
  \ hoc vocabulary realignment."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06607
---

Computer Science > Computation and Language
[Submitted on 7 Jun 2025]
Title:Training-Free Tokenizer Transplantation via Orthogonal Matching Pursuit
View PDF HTML (experimental)Abstract:We present a training-free method to transplant tokenizers in pretrained large language models (LLMs) by reconstructing unseen token embeddings via Orthogonal Matching Pursuit (OMP). Specifically, we approximate each out-of-vocabulary token as a sparse linear combination of shared tokens, in two phases: first, compute each new token's representation in the donor embedding space with a small dictionary of shared anchor tokens, then transfer these same sparse coefficients back into the base model's embedding space.
On two challenging cross-tokenizer tasks--Llama$\to$Mistral NeMo (12B) and Qwen$\to$Llama (1B)--we show that OMP achieves best zero-shot preservation of the base model's performance across multiple benchmarks, while other zero-shot approaches degrade significantly. Compared to baselines (zero-init, mean-init, and existing approaches like WECHSEL, FOCUS, ZETT), OMP consistently achieves the best overall performance, effectively bridging large tokenizer discrepancies without gradient updates. Our analysis further identifies mismatched numerical tokenization schemes as a critical challenge for preserving mathematical reasoning capabilities. This technique enables direct reuse of pretrained model weights with new tokenizers, facilitating cross-tokenizer knowledge distillation, speculative decoding, ensembling, merging, and domain-specific vocabulary adaptations. We integrate our method into the open-source mergekit-tokensurgeon tool for post hoc vocabulary realignment.
Current browse context:
cs.CL
References & Citations
Bibliographic and Citation Tools
Bibliographic Explorer (What is the Explorer?)
Connected Papers (What is Connected Papers?)
Litmaps (What is Litmaps?)
scite Smart Citations (What are Smart Citations?)
Code, Data and Media Associated with this Article
alphaXiv (What is alphaXiv?)
CatalyzeX Code Finder for Papers (What is CatalyzeX?)
DagsHub (What is DagsHub?)
Gotit.pub (What is GotitPub?)
Hugging Face (What is Huggingface?)
Papers with Code (What is Papers with Code?)
ScienceCast (What is ScienceCast?)
Demos
Recommenders and Search Tools
Influence Flower (What are Influence Flowers?)
CORE Recommender (What is CORE?)
arXivLabs: experimental projects with community collaborators
arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website.
Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy. arXiv is committed to these values and only works with partners that adhere to them.
Have an idea for a project that will add value for arXiv's community? Learn more about arXivLabs.