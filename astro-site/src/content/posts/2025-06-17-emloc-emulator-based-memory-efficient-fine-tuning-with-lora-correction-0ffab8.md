---
title: 'EMLoC: Emulator-based Memory-efficient Fine-tuning with LoRA Correction'
description: "arXiv:2506.12015v1 Announce Type: cross \nAbstract: Open-source foundation\
  \ models have seen rapid adoption and development, enabling powerful general-purpose\
  \ capabilities across diverse domains. However, fine-tuning large foundation models\
  \ for domain-specific or personalized tasks remains prohibitively expensive for\
  \ most users due to the significant memory overhead beyond that of inference. We\
  \ introduce EMLoC, an Emulator-based Memory-efficient fine-tuning framework with\
  \ LoRA Correction, which enables model fine-tuning within the same memory budget\
  \ required for inference. EMLoC constructs a task-specific light-weight emulator\
  \ using activation-aware singular value decomposition (SVD) on a small downstream\
  \ calibration set. Fine-tuning then is performed on this lightweight emulator via\
  \ LoRA. To tackle the misalignment between the original model and the compressed\
  \ emulator, we propose a novel compensation algorithm to correct the fine-tuned\
  \ LoRA module, which thus can be merged into the original model for inference. EMLoC\
  \ supports flexible compression ratios and standard training pipelines, making it\
  \ adaptable to a wide range of applications. Extensive experiments demonstrate that\
  \ EMLoC outperforms other baselines across multiple datasets and modalities. Moreover,\
  \ without quantization, EMLoC enables fine-tuning of a 38B model on a single 24GB\
  \ consumer GPU-bringing efficient and practical model adaptation to individual users."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.12015
---

Computer Science > Machine Learning
[Submitted on 13 Jun 2025]
Title:EMLoC: Emulator-based Memory-efficient Fine-tuning with LoRA Correction
View PDF HTML (experimental)Abstract:Open-source foundation models have seen rapid adoption and development, enabling powerful general-purpose capabilities across diverse domains. However, fine-tuning large foundation models for domain-specific or personalized tasks remains prohibitively expensive for most users due to the significant memory overhead beyond that of inference. We introduce EMLoC, an Emulator-based Memory-efficient fine-tuning framework with LoRA Correction, which enables model fine-tuning within the same memory budget required for inference. EMLoC constructs a task-specific light-weight emulator using activation-aware singular value decomposition (SVD) on a small downstream calibration set. Fine-tuning then is performed on this lightweight emulator via LoRA. To tackle the misalignment between the original model and the compressed emulator, we propose a novel compensation algorithm to correct the fine-tuned LoRA module, which thus can be merged into the original model for inference. EMLoC supports flexible compression ratios and standard training pipelines, making it adaptable to a wide range of applications. Extensive experiments demonstrate that EMLoC outperforms other baselines across multiple datasets and modalities. Moreover, without quantization, EMLoC enables fine-tuning of a 38B model on a single 24GB consumer GPU-bringing efficient and practical model adaptation to individual users.
Current browse context:
cs.LG
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
IArxiv Recommender
(What is IArxiv?)
arXivLabs: experimental projects with community collaborators
arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website.
Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy. arXiv is committed to these values and only works with partners that adhere to them.
Have an idea for a project that will add value for arXiv's community? Learn more about arXivLabs.