---
title: The Sharpness Disparity Principle in Transformers for Accelerating Language
  Model Pre-Training
description: "arXiv:2502.19002v2 Announce Type: replace-cross \nAbstract: Transformers\
  \ consist of diverse building blocks, such as embedding layers, normalization layers,\
  \ self-attention mechanisms, and point-wise feedforward networks. Thus, understanding\
  \ the differences and interactions among these blocks is important. In this paper,\
  \ we uncover a clear Sharpness Disparity across these blocks, which emerges early\
  \ in training and intriguingly persists throughout the training process. Motivated\
  \ by this finding, we propose Blockwise Learning Rate (LR), a strategy that tailors\
  \ the LR to each block's sharpness, accelerating large language model (LLM) pre-training.\
  \ By integrating Blockwise LR into AdamW, we consistently achieve lower terminal\
  \ loss and nearly $2\\times$ speedup compared to vanilla AdamW. We demonstrate this\
  \ acceleration across GPT-2 and LLaMA, with model sizes ranging from 0.12B to 2B\
  \ and datasets of OpenWebText, MiniPile, and C4. Finally, we incorporate Blockwise\
  \ LR into Adam-mini (Zhang et al., 2024), a recently proposed memory-efficient variant\
  \ of Adam, achieving a combined $2\\times$ speedup and $2\\times$ memory saving.\
  \ These results underscore the potential of exploiting the sharpness disparity to\
  \ improve LLM training."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2502.19002
---

Computer Science > Machine Learning
[Submitted on 26 Feb 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:The Sharpness Disparity Principle in Transformers for Accelerating Language Model Pre-Training
View PDF HTML (experimental)Abstract:Transformers consist of diverse building blocks, such as embedding layers, normalization layers, self-attention mechanisms, and point-wise feedforward networks. Thus, understanding the differences and interactions among these blocks is important. In this paper, we uncover a clear Sharpness Disparity across these blocks, which emerges early in training and intriguingly persists throughout the training process. Motivated by this finding, we propose Blockwise Learning Rate (LR), a strategy that tailors the LR to each block's sharpness, accelerating large language model (LLM) pre-training. By integrating Blockwise LR into AdamW, we consistently achieve lower terminal loss and nearly $2\times$ speedup compared to vanilla AdamW. We demonstrate this acceleration across GPT-2 and LLaMA, with model sizes ranging from 0.12B to 2B and datasets of OpenWebText, MiniPile, and C4. Finally, we incorporate Blockwise LR into Adam-mini (Zhang et al., 2024), a recently proposed memory-efficient variant of Adam, achieving a combined $2\times$ speedup and $2\times$ memory saving. These results underscore the potential of exploiting the sharpness disparity to improve LLM training.
Submission history
From: Mingze Wang [view email][v1] Wed, 26 Feb 2025 10:06:37 UTC (3,973 KB)
[v2] Fri, 13 Jun 2025 07:42:25 UTC (3,814 KB)
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