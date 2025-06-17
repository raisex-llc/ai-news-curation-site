---
title: Mutual-Taught for Co-adapting Policy and Reward Models
description: "arXiv:2506.06292v1 Announce Type: cross \nAbstract: During the preference\
  \ optimization of large language models (LLMs), distribution shifts may arise between\
  \ newly generated model samples and the data used to train the reward model (RM).\
  \ This shift reduces the efficacy of the RM, which in turn negatively impacts the\
  \ performance of the policy model (PM). To address this challenge, we propose Mutual-Taught,\
  \ a self-training method that iteratively improves both the PM and RM without requiring\
  \ additional human annotation. Our approach mirrors the expectation-maximization\
  \ (EM) algorithm. In the E-step, the PM is updated using feedback from the current\
  \ RM, guiding the PM toward a better approximation of the latent optimal preference\
  \ distribution. In the M-step, we update the RM by constructing training data from\
  \ the outputs of the PM before and after the E-step update. This process ensures\
  \ that the RM adapts to the evolving policy distribution. Experimental results demonstrate\
  \ that this iterative approach leads to consistent improvements in both models.\
  \ Specifically, our 8B policy model, LLaMA-3-8B-Instruct-MT, achieves a length-controlled\
  \ win rate of 54.1\\% on AlpacaEval-2, while our 8B reward model, FsfairX-LLaMA3-RM-MT,\
  \ performs on par with GPT-4o-2024-08-06 on RewardBench."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06292
---

Computer Science > Machine Learning
[Submitted on 17 May 2025]
Title:Mutual-Taught for Co-adapting Policy and Reward Models
View PDF HTML (experimental)Abstract:During the preference optimization of large language models (LLMs), distribution shifts may arise between newly generated model samples and the data used to train the reward model (RM). This shift reduces the efficacy of the RM, which in turn negatively impacts the performance of the policy model (PM). To address this challenge, we propose Mutual-Taught, a self-training method that iteratively improves both the PM and RM without requiring additional human annotation. Our approach mirrors the expectation-maximization (EM) algorithm. In the E-step, the PM is updated using feedback from the current RM, guiding the PM toward a better approximation of the latent optimal preference distribution. In the M-step, we update the RM by constructing training data from the outputs of the PM before and after the E-step update. This process ensures that the RM adapts to the evolving policy distribution. Experimental results demonstrate that this iterative approach leads to consistent improvements in both models. Specifically, our 8B policy model, LLaMA-3-8B-Instruct-MT, achieves a length-controlled win rate of 54.1\% on AlpacaEval-2, while our 8B reward model, FsfairX-LLaMA3-RM-MT, performs on par with GPT-4o-2024-08-06 on RewardBench.
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