---
title: Curriculum Reinforcement Learning from Easy to Hard Tasks Improves LLM Reasoning
description: "arXiv:2506.06632v1 Announce Type: cross \nAbstract: We aim to improve\
  \ the reasoning capabilities of language models via reinforcement learning (RL).\
  \ Recent RL post-trained models like DeepSeek-R1 have demonstrated reasoning abilities\
  \ on mathematical and coding tasks. However, prior studies suggest that using RL\
  \ alone to improve reasoning on inherently difficult tasks is less effective. Here,\
  \ we draw inspiration from curriculum learning and propose to schedule tasks from\
  \ easy to hard (E2H), allowing LLMs to build reasoning skills gradually. Our method\
  \ is termed E2H Reasoner. Empirically, we observe that, although easy tasks are\
  \ important initially, fading them out through appropriate scheduling is essential\
  \ in preventing overfitting. Theoretically, we establish convergence guarantees\
  \ for E2H Reasoner within an approximate policy iteration framework. We derive finite-sample\
  \ complexity bounds and show that when tasks are appropriately decomposed and conditioned,\
  \ learning through curriculum stages requires fewer total samples than direct learning.\
  \ Experiments across multiple domains show that E2H Reasoner significantly improves\
  \ the reasoning ability of small LLMs (1.5B to 3B), which otherwise struggle when\
  \ trained with vanilla RL alone, highlighting the effectiveness of our method."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06632
---

Computer Science > Machine Learning
[Submitted on 7 Jun 2025]
Title:Curriculum Reinforcement Learning from Easy to Hard Tasks Improves LLM Reasoning
View PDF HTML (experimental)Abstract:We aim to improve the reasoning capabilities of language models via reinforcement learning (RL). Recent RL post-trained models like DeepSeek-R1 have demonstrated reasoning abilities on mathematical and coding tasks. However, prior studies suggest that using RL alone to improve reasoning on inherently difficult tasks is less effective. Here, we draw inspiration from curriculum learning and propose to schedule tasks from easy to hard (E2H), allowing LLMs to build reasoning skills gradually. Our method is termed E2H Reasoner. Empirically, we observe that, although easy tasks are important initially, fading them out through appropriate scheduling is essential in preventing overfitting. Theoretically, we establish convergence guarantees for E2H Reasoner within an approximate policy iteration framework. We derive finite-sample complexity bounds and show that when tasks are appropriately decomposed and conditioned, learning through curriculum stages requires fewer total samples than direct learning. Experiments across multiple domains show that E2H Reasoner significantly improves the reasoning ability of small LLMs (1.5B to 3B), which otherwise struggle when trained with vanilla RL alone, highlighting the effectiveness of our method.
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