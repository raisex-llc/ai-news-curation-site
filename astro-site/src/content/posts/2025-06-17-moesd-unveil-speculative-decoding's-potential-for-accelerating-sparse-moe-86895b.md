---
title: 'MoESD: Unveil Speculative Decoding''s Potential for Accelerating Sparse MoE'
description: "arXiv:2505.19645v2 Announce Type: replace-cross \nAbstract: Large Language\
  \ Models (LLMs) have achieved remarkable success across many applications, with\
  \ Mixture of Experts (MoE) models demonstrating great potential. Compared to traditional\
  \ dense models, MoEs achieve better performance with less computation. Speculative\
  \ decoding (SD) is a widely used technique to accelerate LLM inference without accuracy\
  \ loss, but it has been considered efficient only for dense models. In this work,\
  \ we first demonstrate that, under medium batch sizes, MoE surprisingly benefits\
  \ more from SD than dense models. Furthermore, as MoE becomes sparser -- the prevailing\
  \ trend in MoE designs -- the batch size range where SD acceleration is expected\
  \ to be effective becomes broader. To quantitatively understand tradeoffs involved\
  \ in SD, we develop a reliable modeling based on theoretical analyses. While current\
  \ SD research primarily focuses on improving acceptance rates of algorithms, changes\
  \ in workload and model architecture can still lead to degraded SD acceleration\
  \ even with high acceptance rates. To address this limitation, we introduce a new\
  \ metric 'target efficiency' that characterizes these effects, thus helping researchers\
  \ identify system bottlenecks and understand SD acceleration more comprehensively.\
  \ For scenarios like private serving, this work unveils a new perspective to speed\
  \ up MoE inference, where existing solutions struggle. Experiments on different\
  \ GPUs show up to 2.29x speedup for Qwen2-57B-A14B at medium batch sizes and validate\
  \ our theoretical predictions."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2505.19645
---

Computer Science > Machine Learning
[Submitted on 26 May 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:MoESD: Unveil Speculative Decoding's Potential for Accelerating Sparse MoE
View PDF HTML (experimental)Abstract:Large Language Models (LLMs) have achieved remarkable success across many applications, with Mixture of Experts (MoE) models demonstrating great potential. Compared to traditional dense models, MoEs achieve better performance with less computation. Speculative decoding (SD) is a widely used technique to accelerate LLM inference without accuracy loss, but it has been considered efficient only for dense models. In this work, we first demonstrate that, under medium batch sizes, MoE surprisingly benefits more from SD than dense models. Furthermore, as MoE becomes sparser -- the prevailing trend in MoE designs -- the batch size range where SD acceleration is expected to be effective becomes broader. To quantitatively understand tradeoffs involved in SD, we develop a reliable modeling based on theoretical analyses. While current SD research primarily focuses on improving acceptance rates of algorithms, changes in workload and model architecture can still lead to degraded SD acceleration even with high acceptance rates. To address this limitation, we introduce a new metric 'target efficiency' that characterizes these effects, thus helping researchers identify system bottlenecks and understand SD acceleration more comprehensively. For scenarios like private serving, this work unveils a new perspective to speed up MoE inference, where existing solutions struggle. Experiments on different GPUs show up to 2.29x speedup for Qwen2-57B-A14B at medium batch sizes and validate our theoretical predictions.
Submission history
From: Zongle Huang [view email][v1] Mon, 26 May 2025 08:01:45 UTC (1,910 KB)
[v2] Fri, 13 Jun 2025 14:54:40 UTC (1,916 KB)
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