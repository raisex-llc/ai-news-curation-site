---
title: 'VGR: Visual Grounded Reasoning'
description: "arXiv:2506.11991v1 Announce Type: cross \nAbstract: In the field of\
  \ multimodal chain-of-thought (CoT) reasoning, existing approaches predominantly\
  \ rely on reasoning on pure language space, which inherently suffers from language\
  \ bias and is largely confined to math or science domains. This narrow focus limits\
  \ their ability to handle complex visual reasoning tasks that demand comprehensive\
  \ understanding of image details. To address these limitations, this paper introduces\
  \ VGR, a novel reasoning multimodal large language model (MLLM) with enhanced fine-grained\
  \ visual perception capabilities. Unlike traditional MLLMs that answer the question\
  \ or reasoning solely on the language space, our VGR first detects relevant regions\
  \ that may help to solve problems, and then provides precise answers based on replayed\
  \ image regions. To achieve this, we conduct a large-scale SFT dataset called VGR\
  \ -SFT that contains reasoning data with mixed vision grounding and language deduction.\
  \ The inference pipeline of VGR allows the model to choose bounding boxes for visual\
  \ reference and a replay stage is introduced to integrates the corresponding regions\
  \ into the reasoning process, enhancing multimodel comprehension. Experiments on\
  \ the LLaVA-NeXT-7B baseline show that VGR achieves superior performance on multi-modal\
  \ benchmarks requiring comprehensive image detail understanding. Compared to the\
  \ baseline, VGR uses only 30\\% of the image token count while delivering scores\
  \ of +4.1 on MMStar, +7.1 on AI2D, and a +12.9 improvement on ChartQA."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11991
---

Computer Science > Computer Vision and Pattern Recognition
[Submitted on 13 Jun 2025 (v1), last revised 16 Jun 2025 (this version, v2)]
Title:VGR: Visual Grounded Reasoning
View PDF HTML (experimental)Abstract:In the field of multimodal chain-of-thought (CoT) reasoning, existing approaches predominantly rely on reasoning on pure language space, which inherently suffers from language bias and is largely confined to math or science domains. This narrow focus limits their ability to handle complex visual reasoning tasks that demand comprehensive understanding of image details. To address these limitations, this paper introduces VGR, a novel reasoning multimodal large language model (MLLM) with enhanced fine-grained visual perception capabilities. Unlike traditional MLLMs that answer the question or reasoning solely on the language space, our VGR first detects relevant regions that may help to solve problems, and then provides precise answers based on replayed image regions. To achieve this, we conduct a large-scale SFT dataset called VGR -SFT that contains reasoning data with mixed vision grounding and language deduction. The inference pipeline of VGR allows the model to choose bounding boxes for visual reference and a replay stage is introduced to integrates the corresponding regions into the reasoning process, enhancing multimodel comprehension. Experiments on the LLaVA-NeXT-7B baseline show that VGR achieves superior performance on multi-modal benchmarks requiring comprehensive image detail understanding. Compared to the baseline, VGR uses only 30\% of the image token count while delivering scores of +4.1 on MMStar, +7.1 on AI2D, and a +12.9 improvement on ChartQA.
Submission history
From: Jiacong Wang Wang [view email][v1] Fri, 13 Jun 2025 17:47:43 UTC (1,672 KB)
[v2] Mon, 16 Jun 2025 07:35:52 UTC (1,672 KB)
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