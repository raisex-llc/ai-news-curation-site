---
title: Quantitative Analysis of Performance Drop in DeepSeek Model Quantization
description: "arXiv:2505.02390v2 Announce Type: replace-cross \nAbstract: Recently,\
  \ there is a high demand for deploying DeepSeek-R1 and V3 locally, possibly because\
  \ the official service often suffers from being busy and some organizations have\
  \ data privacy concerns. While single-machine deployment offers infrastructure simplicity,\
  \ the models' 671B FP8 parameter configuration exceeds the practical memory limits\
  \ of a standard 8-GPU machine. Quantization is a widely used technique that helps\
  \ reduce model memory consumption. However, it is unclear what the performance of\
  \ DeepSeek-R1 and V3 will be after being quantized. This technical report presents\
  \ the first quantitative evaluation of multi-bitwidth quantization across the complete\
  \ DeepSeek model spectrum. Key findings reveal that 4-bit quantization maintains\
  \ little performance degradation versus FP8 while enabling single-machine deployment\
  \ on standard NVIDIA GPU devices. We further propose DQ3_K_M, a dynamic 3-bit quantization\
  \ method that significantly outperforms traditional Q3_K_M variant on various benchmarks,\
  \ which is also comparable with 4-bit quantization (Q4_K_M) approach in most tasks.\
  \ Moreover, DQ3_K_M supports single-machine deployment configurations for both NVIDIA\
  \ H100/A100 and Huawei 910B. Our implementation of DQ3\\_K\\_M is released at https://github.com/UnicomAI/DeepSeek-Eval,\
  \ containing optimized 3-bit quantized variants of both DeepSeek-R1 and DeepSeek-V3."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2505.02390
---

Computer Science > Machine Learning
[Submitted on 5 May 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Quantitative Analysis of Performance Drop in DeepSeek Model Quantization
View PDF HTML (experimental)Abstract:Recently, there is a high demand for deploying DeepSeek-R1 and V3 locally, possibly because the official service often suffers from being busy and some organizations have data privacy concerns. While single-machine deployment offers infrastructure simplicity, the models' 671B FP8 parameter configuration exceeds the practical memory limits of a standard 8-GPU machine. Quantization is a widely used technique that helps reduce model memory consumption. However, it is unclear what the performance of DeepSeek-R1 and V3 will be after being quantized. This technical report presents the first quantitative evaluation of multi-bitwidth quantization across the complete DeepSeek model spectrum. Key findings reveal that 4-bit quantization maintains little performance degradation versus FP8 while enabling single-machine deployment on standard NVIDIA GPU devices. We further propose DQ3_K_M, a dynamic 3-bit quantization method that significantly outperforms traditional Q3_K_M variant on various benchmarks, which is also comparable with 4-bit quantization (Q4_K_M) approach in most tasks. Moreover, DQ3_K_M supports single-machine deployment configurations for both NVIDIA H100/A100 and Huawei 910B. Our implementation of DQ3\_K\_M is released at this https URL, containing optimized 3-bit quantized variants of both DeepSeek-R1 and DeepSeek-V3.
Submission history
From: Owen Shen [view email][v1] Mon, 5 May 2025 06:25:20 UTC (48 KB)
[v2] Fri, 13 Jun 2025 06:25:10 UTC (46 KB)
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