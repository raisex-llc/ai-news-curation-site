---
title: 'Cartridges: Lightweight and general-purpose long context representations via
  self-study'
description: "arXiv:2506.06266v3 Announce Type: replace-cross \nAbstract: Large language\
  \ models are often used to answer queries grounded in large text corpora (e.g. codebases,\
  \ legal documents, or chat histories) by placing the entire corpus in the context\
  \ window and leveraging in-context learning (ICL). Although current models support\
  \ contexts of 100K-1M tokens, this setup is costly to serve because the memory consumption\
  \ of the KV cache scales with input length. We explore an alternative: training\
  \ a smaller KV cache offline on each corpus. At inference time, we load this trained\
  \ KV cache, which we call a Cartridge, and decode a response. Critically, the cost\
  \ of training a Cartridge can be amortized across all the queries referencing the\
  \ same corpus. However, we find that the naive approach of training the Cartridge\
  \ with next-token prediction on the corpus is not competitive with ICL. Instead,\
  \ we propose self-study, a training recipe in which we generate synthetic conversations\
  \ about the corpus and train the Cartridge with a context-distillation objective.\
  \ We find that Cartridges trained with self-study replicate the functionality of\
  \ ICL, while being significantly cheaper to serve. On challenging long-context benchmarks,\
  \ Cartridges trained with self-study match ICL performance while using 38.6x less\
  \ memory and enabling 26.4x higher throughput. Self-study also extends the model's\
  \ effective context length (e.g. from 128k to 484k tokens on MTOB) and surprisingly,\
  \ leads to Cartridges that can be composed at inference time without retraining."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06266
---

Computer Science > Computation and Language
[Submitted on 6 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v3)]
Title:Cartridges: Lightweight and general-purpose long context representations via self-study
View PDFAbstract:Large language models are often used to answer queries grounded in large text corpora (e.g. codebases, legal documents, or chat histories) by placing the entire corpus in the context window and leveraging in-context learning (ICL). Although current models support contexts of 100K-1M tokens, this setup is costly to serve because the memory consumption of the KV cache scales with input length. We explore an alternative: training a smaller KV cache offline on each corpus. At inference time, we load this trained KV cache, which we call a Cartridge, and decode a response. Critically, the cost of training a Cartridge can be amortized across all the queries referencing the same corpus. However, we find that the naive approach of training the Cartridge with next-token prediction on the corpus is not competitive with ICL. Instead, we propose self-study, a training recipe in which we generate synthetic conversations about the corpus and train the Cartridge with a context-distillation objective. We find that Cartridges trained with self-study replicate the functionality of ICL, while being significantly cheaper to serve. On challenging long-context benchmarks, Cartridges trained with self-study match ICL performance while using 38.6x less memory and enabling 26.4x higher throughput. Self-study also extends the model's effective context length (e.g. from 128k to 484k tokens on MTOB) and surprisingly, leads to Cartridges that can be composed at inference time without retraining.
Submission history
From: Sabri Eyuboglu [view email][v1] Fri, 6 Jun 2025 17:48:23 UTC (11,028 KB)
[v2] Mon, 9 Jun 2025 05:21:52 UTC (8,161 KB)
[v3] Fri, 13 Jun 2025 17:58:55 UTC (8,165 KB)
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