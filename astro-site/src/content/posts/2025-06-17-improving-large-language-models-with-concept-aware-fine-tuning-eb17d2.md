---
title: Improving Large Language Models with Concept-Aware Fine-Tuning
description: "arXiv:2506.07833v2 Announce Type: replace-cross \nAbstract: Large language\
  \ models (LLMs) have become the cornerstone of modern AI. However, the existing\
  \ paradigm of next-token prediction fundamentally limits their ability to form coherent,\
  \ high-level concepts, making it a critical barrier to human-like understanding\
  \ and reasoning. Take the phrase \"ribonucleic acid\" as an example: an LLM will\
  \ first decompose it into tokens, i.e., artificial text fragments (\"rib\", \"on\"\
  , ...), then learn each token sequentially, rather than grasping the phrase as a\
  \ unified, coherent semantic entity. This fragmented representation hinders deeper\
  \ conceptual understanding and, ultimately, the development of truly intelligent\
  \ systems. In response, we introduce Concept-Aware Fine-Tuning (CAFT), a novel multi-token\
  \ training method that redefines how LLMs are fine-tuned. By enabling the learning\
  \ of sequences that span multiple tokens, this method fosters stronger concept-aware\
  \ learning. Our experiments demonstrate significant improvements compared to conventional\
  \ next-token finetuning methods across diverse tasks, including traditional applications\
  \ like text summarization and domain-specific ones like de novo protein design.\
  \ Multi-token prediction was previously only possible in the prohibitively expensive\
  \ pretraining phase; CAFT, to our knowledge, is the first to bring the multi-token\
  \ setting to the post-training phase, thus effectively democratizing its benefits\
  \ for the broader community of practitioners and researchers. Finally, the unexpected\
  \ effectiveness of our proposed method suggests wider implications for the machine\
  \ learning research community. All code and data are available at https://github.com/michaelchen-lab/caft-llm"
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.07833
---

Computer Science > Machine Learning
[Submitted on 9 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Improving Large Language Models with Concept-Aware Fine-Tuning
View PDF HTML (experimental)Abstract:Large language models (LLMs) have become the cornerstone of modern AI. However, the existing paradigm of next-token prediction fundamentally limits their ability to form coherent, high-level concepts, making it a critical barrier to human-like understanding and reasoning. Take the phrase "ribonucleic acid" as an example: an LLM will first decompose it into tokens, i.e., artificial text fragments ("rib", "on", ...), then learn each token sequentially, rather than grasping the phrase as a unified, coherent semantic entity. This fragmented representation hinders deeper conceptual understanding and, ultimately, the development of truly intelligent systems. In response, we introduce Concept-Aware Fine-Tuning (CAFT), a novel multi-token training method that redefines how LLMs are fine-tuned. By enabling the learning of sequences that span multiple tokens, this method fosters stronger concept-aware learning. Our experiments demonstrate significant improvements compared to conventional next-token finetuning methods across diverse tasks, including traditional applications like text summarization and domain-specific ones like de novo protein design. Multi-token prediction was previously only possible in the prohibitively expensive pretraining phase; CAFT, to our knowledge, is the first to bring the multi-token setting to the post-training phase, thus effectively democratizing its benefits for the broader community of practitioners and researchers. Finally, the unexpected effectiveness of our proposed method suggests wider implications for the machine learning research community. All code and data are available at this https URL
Submission history
From: Michael Chen [view email][v1] Mon, 9 Jun 2025 14:55:00 UTC (2,344 KB)
[v2] Fri, 13 Jun 2025 17:24:38 UTC (2,292 KB)
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