---
title: 'FIMA-Q: Post-Training Quantization for Vision Transformers by Fisher Information
  Matrix Approximation'
description: "arXiv:2506.11543v1 Announce Type: cross \nAbstract: Post-training quantization\
  \ (PTQ) has stood out as a cost-effective and promising model compression paradigm\
  \ in recent years, as it avoids computationally intensive model retraining. Nevertheless,\
  \ current PTQ methods for Vision Transformers (ViTs) still suffer from significant\
  \ accuracy degradation, especially under low-bit quantization. To address these\
  \ shortcomings, we analyze the prevailing Hessian-guided quantization loss, and\
  \ uncover certain limitations of conventional Hessian approximations. By following\
  \ the block-wise reconstruction framework, we propose a novel PTQ method for ViTs,\
  \ dubbed FIMA-Q. Specifically, we firstly establish the connection between KL divergence\
  \ and FIM, which enables fast computation of the quantization loss during reconstruction.\
  \ We further propose an efficient FIM approximation method, namely DPLR-FIM, by\
  \ employing the diagonal plus low-rank principle, and formulate the ultimate quantization\
  \ loss. Our extensive experiments, conducted across various vision tasks with representative\
  \ ViT-based architectures on public datasets, demonstrate that our method substantially\
  \ promotes the accuracy compared to the state-of-the-art approaches, especially\
  \ in the case of low-bit quantization. The source code is available at https://github.com/ShiheWang/FIMA-Q."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11543
---

Computer Science > Computer Vision and Pattern Recognition
[Submitted on 13 Jun 2025]
Title:FIMA-Q: Post-Training Quantization for Vision Transformers by Fisher Information Matrix Approximation
View PDF HTML (experimental)Abstract:Post-training quantization (PTQ) has stood out as a cost-effective and promising model compression paradigm in recent years, as it avoids computationally intensive model retraining. Nevertheless, current PTQ methods for Vision Transformers (ViTs) still suffer from significant accuracy degradation, especially under low-bit quantization. To address these shortcomings, we analyze the prevailing Hessian-guided quantization loss, and uncover certain limitations of conventional Hessian approximations. By following the block-wise reconstruction framework, we propose a novel PTQ method for ViTs, dubbed FIMA-Q. Specifically, we firstly establish the connection between KL divergence and FIM, which enables fast computation of the quantization loss during reconstruction. We further propose an efficient FIM approximation method, namely DPLR-FIM, by employing the diagonal plus low-rank principle, and formulate the ultimate quantization loss. Our extensive experiments, conducted across various vision tasks with representative ViT-based architectures on public datasets, demonstrate that our method substantially promotes the accuracy compared to the state-of-the-art approaches, especially in the case of low-bit quantization. The source code is available at this https URL.
Current browse context:
cs.CV
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