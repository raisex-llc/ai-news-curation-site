---
title: 'Table-R1: Region-based Reinforcement Learning for Table Understanding'
description: "arXiv:2505.12415v2 Announce Type: replace-cross \nAbstract: Tables present\
  \ unique challenges for language models due to their structured row-column interactions,\
  \ necessitating specialized approaches for effective comprehension. While large\
  \ language models (LLMs) have demonstrated potential in table reasoning through\
  \ prompting and techniques like chain-of-thought (CoT) and program-of-thought (PoT),\
  \ optimizing their performance for table question answering remains underexplored.\
  \ In this paper, we introduce region-based Table-R1, a novel reinforcement learning\
  \ approach that enhances LLM table understanding by integrating region evidence\
  \ into reasoning steps. Our method employs Region-Enhanced Supervised Fine-Tuning\
  \ (RE-SFT) to guide models in identifying relevant table regions before generating\
  \ answers, incorporating textual, symbolic, and program-based reasoning. Additionally,\
  \ Table-Aware Group Relative Policy Optimization (TARPO) introduces a mixed reward\
  \ system to dynamically balance region accuracy and answer correctness, with decaying\
  \ region rewards and consistency penalties to align reasoning steps. Experiments\
  \ show that Table-R1 achieves an average performance improvement of 14.36 points\
  \ across multiple base models on three benchmark datasets, even outperforming baseline\
  \ models with ten times the parameters, while TARPO reduces response token consumption\
  \ by 67.5% compared to GRPO, significantly advancing LLM capabilities in efficient\
  \ tabular reasoning."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2505.12415
---

Computer Science > Computation and Language
[Submitted on 18 May 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Table-R1: Region-based Reinforcement Learning for Table Understanding
View PDF HTML (experimental)Abstract:Tables present unique challenges for language models due to their structured row-column interactions, necessitating specialized approaches for effective comprehension. While large language models (LLMs) have demonstrated potential in table reasoning through prompting and techniques like chain-of-thought (CoT) and program-of-thought (PoT), optimizing their performance for table question answering remains underexplored. In this paper, we introduce region-based Table-R1, a novel reinforcement learning approach that enhances LLM table understanding by integrating region evidence into reasoning steps. Our method employs Region-Enhanced Supervised Fine-Tuning (RE-SFT) to guide models in identifying relevant table regions before generating answers, incorporating textual, symbolic, and program-based reasoning. Additionally, Table-Aware Group Relative Policy Optimization (TARPO) introduces a mixed reward system to dynamically balance region accuracy and answer correctness, with decaying region rewards and consistency penalties to align reasoning steps. Experiments show that Table-R1 achieves an average performance improvement of 14.36 points across multiple base models on three benchmark datasets, even outperforming baseline models with ten times the parameters, while TARPO reduces response token consumption by 67.5% compared to GRPO, significantly advancing LLM capabilities in efficient tabular reasoning.
Submission history
From: Zhenhe Wu [view email][v1] Sun, 18 May 2025 13:40:18 UTC (1,146 KB)
[v2] Fri, 13 Jun 2025 13:02:56 UTC (1,159 KB)
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