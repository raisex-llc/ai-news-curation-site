---
title: Entropy Controllable Direct Preference Optimization
description: "arXiv:2411.07595v2 Announce Type: replace-cross \nAbstract: In the post-training\
  \ of large language models (LLMs), Reinforcement Learning from Human Feedback (RLHF)\
  \ is an effective approach to achieve generation aligned with human preferences.\
  \ Direct Preference Optimization (DPO) allows for policy training with a simple\
  \ binary cross-entropy loss without a reward model. The objective of DPO is regularized\
  \ by reverse KL divergence that encourages mode-seeking fitting to the reference\
  \ policy. Nonetheless, we indicate that minimizing reverse KL divergence could fail\
  \ to capture a mode of the reference distribution, which may hurt the policy's performance.\
  \ Based on this observation, we propose a simple modification to DPO, H-DPO, which\
  \ allows for control over the entropy of the resulting policy, enhancing the distribution's\
  \ sharpness and thereby enabling mode-seeking fitting more effectively. In our experiments,\
  \ we show that H-DPO outperformed DPO across various tasks, demonstrating superior\
  \ results in pass@$k$ evaluations for mathematical tasks. Moreover, H-DPO is simple\
  \ to implement, requiring only minor modifications to the loss calculation of DPO,\
  \ which makes it highly practical and promising for wide-ranging applications in\
  \ the training of LLMs."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2411.07595
---

Computer Science > Machine Learning
[Submitted on 12 Nov 2024 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Entropy Controllable Direct Preference Optimization
View PDF HTML (experimental)Abstract:In the post-training of large language models (LLMs), Reinforcement Learning from Human Feedback (RLHF) is an effective approach to achieve generation aligned with human preferences. Direct Preference Optimization (DPO) allows for policy training with a simple binary cross-entropy loss without a reward model. The objective of DPO is regularized by reverse KL divergence that encourages mode-seeking fitting to the reference policy. Nonetheless, we indicate that minimizing reverse KL divergence could fail to capture a mode of the reference distribution, which may hurt the policy's performance. Based on this observation, we propose a simple modification to DPO, H-DPO, which allows for control over the entropy of the resulting policy, enhancing the distribution's sharpness and thereby enabling mode-seeking fitting more effectively. In our experiments, we show that H-DPO outperformed DPO across various tasks, demonstrating superior results in pass@$k$ evaluations for mathematical tasks. Moreover, H-DPO is simple to implement, requiring only minor modifications to the loss calculation of DPO, which makes it highly practical and promising for wide-ranging applications in the training of LLMs.
Submission history
From: Motoki Omura [view email][v1] Tue, 12 Nov 2024 07:09:44 UTC (614 KB)
[v2] Fri, 13 Jun 2025 12:47:42 UTC (560 KB)
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