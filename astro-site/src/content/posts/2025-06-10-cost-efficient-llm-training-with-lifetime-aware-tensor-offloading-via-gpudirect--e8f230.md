---
title: Cost-Efficient LLM Training with Lifetime-Aware Tensor Offloading via GPUDirect
  Storage
description: "arXiv:2506.06472v1 Announce Type: cross \nAbstract: We present the design\
  \ and implementation of a new lifetime-aware tensor offloading framework for GPU\
  \ memory expansion using low-cost PCIe-based solid-state drives (SSDs). Our framework,\
  \ TERAIO, is developed explicitly for large language model (LLM) training with multiple\
  \ GPUs and multiple SSDs. Its design is driven by our observation that the active\
  \ tensors take only a small fraction (1.7% on average) of allocated GPU memory in\
  \ each LLM training iteration, the inactive tensors are usually large and will not\
  \ be used for a long period of time, creating ample opportunities for offloading/prefetching\
  \ tensors to/from slow SSDs without stalling the GPU training process. TERAIO accurately\
  \ estimates the lifetime (active period of time in GPU memory) of each tensor with\
  \ the profiling of the first few iterations in the training process. With the tensor\
  \ lifetime analysis, TERAIO will generate an optimized tensor offloading/prefetching\
  \ plan and integrate it into the compiled LLM program via PyTorch. TERAIO has a\
  \ runtime tensor migration engine to execute the offloading/prefetching plan via\
  \ GPUDirect storage, which allows direct tensor migration between GPUs and SSDs\
  \ for alleviating the CPU bottleneck and maximizing the SSD bandwidth utilization.\
  \ In comparison with state-of-the-art studies such as ZeRO-Offload and ZeRO-Infinity,\
  \ we show that TERAIO improves the training performance of various LLMs by 1.47x\
  \ on average, and achieves 80.7% of the ideal performance assuming unlimited GPU\
  \ memory."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06472
---

Computer Science > Distributed, Parallel, and Cluster Computing
[Submitted on 6 Jun 2025]
Title:Cost-Efficient LLM Training with Lifetime-Aware Tensor Offloading via GPUDirect Storage
View PDF HTML (experimental)Abstract:We present the design and implementation of a new lifetime-aware tensor offloading framework for GPU memory expansion using low-cost PCIe-based solid-state drives (SSDs). Our framework, TERAIO, is developed explicitly for large language model (LLM) training with multiple GPUs and multiple SSDs. Its design is driven by our observation that the active tensors take only a small fraction (1.7% on average) of allocated GPU memory in each LLM training iteration, the inactive tensors are usually large and will not be used for a long period of time, creating ample opportunities for offloading/prefetching tensors to/from slow SSDs without stalling the GPU training process. TERAIO accurately estimates the lifetime (active period of time in GPU memory) of each tensor with the profiling of the first few iterations in the training process. With the tensor lifetime analysis, TERAIO will generate an optimized tensor offloading/prefetching plan and integrate it into the compiled LLM program via PyTorch. TERAIO has a runtime tensor migration engine to execute the offloading/prefetching plan via GPUDirect storage, which allows direct tensor migration between GPUs and SSDs for alleviating the CPU bottleneck and maximizing the SSD bandwidth utilization. In comparison with state-of-the-art studies such as ZeRO-Offload and ZeRO-Infinity, we show that TERAIO improves the training performance of various LLMs by 1.47x on average, and achieves 80.7% of the ideal performance assuming unlimited GPU memory.
Current browse context:
cs.DC
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