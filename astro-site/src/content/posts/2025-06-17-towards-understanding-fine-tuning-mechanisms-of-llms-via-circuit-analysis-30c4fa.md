---
title: Towards Understanding Fine-Tuning Mechanisms of LLMs via Circuit Analysis
description: "arXiv:2502.11812v2 Announce Type: replace-cross \nAbstract: Fine-tuning\
  \ significantly improves the performance of Large Language Models (LLMs), yet its\
  \ underlying mechanisms remain poorly understood. This paper aims to provide an\
  \ in-depth interpretation of the fine-tuning process through circuit analysis, a\
  \ popular tool in Mechanistic Interpretability (MI). Unlike previous studies (Prakash\
  \ et al. 2024; Chhabra et al. 2024) that focus on tasks where pre-trained models\
  \ already perform well, we develop a set of mathematical tasks where fine-tuning\
  \ yields substantial performance gains, which are closer to the practical setting.\
  \ In our experiments, we identify circuits at various checkpoints during fine-tuning\
  \ and examine the interplay between circuit analysis, fine-tuning methods, and task\
  \ complexities. First, we find that while circuits maintain high node similarity\
  \ before and after fine-tuning, their edges undergo significant changes, in contrast\
  \ to prior work that shows circuits only add some additional components after fine-tuning.\
  \ Based on these observations, we develop a circuit-aware Low-Rank Adaptation (LoRA)\
  \ method, which assigns ranks to layers based on edge changes in the circuits. Experimental\
  \ results demonstrate that our circuit-based LoRA algorithm achieves an average\
  \ performance improvement of 2.46% over standard LoRA with similar parameter sizes.\
  \ Furthermore, we explore how combining circuits from subtasks can enhance fine-tuning\
  \ in compositional tasks, providing new insights into the design of such tasks and\
  \ deepening the understanding of circuit dynamics and fine-tuning mechanisms."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2502.11812
---

Computer Science > Computation and Language
[Submitted on 17 Feb 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Towards Understanding Fine-Tuning Mechanisms of LLMs via Circuit Analysis
View PDF HTML (experimental)Abstract:Fine-tuning significantly improves the performance of Large Language Models (LLMs), yet its underlying mechanisms remain poorly understood. This paper aims to provide an in-depth interpretation of the fine-tuning process through circuit analysis, a popular tool in Mechanistic Interpretability (MI). Unlike previous studies (Prakash et al. 2024; Chhabra et al. 2024) that focus on tasks where pre-trained models already perform well, we develop a set of mathematical tasks where fine-tuning yields substantial performance gains, which are closer to the practical setting. In our experiments, we identify circuits at various checkpoints during fine-tuning and examine the interplay between circuit analysis, fine-tuning methods, and task complexities. First, we find that while circuits maintain high node similarity before and after fine-tuning, their edges undergo significant changes, in contrast to prior work that shows circuits only add some additional components after fine-tuning. Based on these observations, we develop a circuit-aware Low-Rank Adaptation (LoRA) method, which assigns ranks to layers based on edge changes in the circuits. Experimental results demonstrate that our circuit-based LoRA algorithm achieves an average performance improvement of 2.46% over standard LoRA with similar parameter sizes. Furthermore, we explore how combining circuits from subtasks can enhance fine-tuning in compositional tasks, providing new insights into the design of such tasks and deepening the understanding of circuit dynamics and fine-tuning mechanisms.
Submission history
From: Xu Wang [view email][v1] Mon, 17 Feb 2025 13:59:41 UTC (3,990 KB)
[v2] Fri, 13 Jun 2025 09:32:19 UTC (3,995 KB)
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