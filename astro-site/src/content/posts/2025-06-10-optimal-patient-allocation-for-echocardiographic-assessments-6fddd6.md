---
title: Optimal patient allocation for echocardiographic assessments
description: "arXiv:2506.06297v1 Announce Type: cross \nAbstract: Scheduling echocardiographic\
  \ exams in a hospital presents significant challenges due to non-deterministic factors\
  \ (e.g., patient no-shows, patient arrival times, diverse exam durations, etc.)\
  \ and asymmetric resource constraints between fetal and non-fetal patient streams.\
  \ To address these challenges, we first conducted extensive pre-processing on one\
  \ week of operational data from the Echo Laboratory at Stanford University's Lucile\
  \ Packard Children's Hospital, to estimate patient no-show probabilities and derive\
  \ empirical distributions of arrival times and exam durations. Based on these inputs,\
  \ we developed a discrete-event stochastic simulation model using SimPy, and integrate\
  \ it with the open source Gymnasium Python library. As a baseline for policy optimization,\
  \ we developed a comparative framework to evaluate on-the-fly versus reservation-based\
  \ allocation strategies, in which different proportions of resources are reserved\
  \ in advance. Considering a hospital configuration with a 1:6 ratio of fetal to\
  \ non-fetal rooms and a 4:2 ratio of fetal to non-fetal sonographers, we show that\
  \ on-the-fly allocation generally yields better performance, more effectively adapting\
  \ to patient variability and resource constraints. Building on this foundation,\
  \ we apply reinforcement learning (RL) to derive an approximated optimal dynamic\
  \ allocation policy. This RL-based policy is benchmarked against the best-performing\
  \ rule-based strategies, allowing us to quantify their differences and provide actionable\
  \ insights for improving echo lab efficiency through intelligent, data-driven resource\
  \ management."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06297
---

Computer Science > Machine Learning
[Submitted on 17 May 2025]
Title:Optimal patient allocation for echocardiographic assessments
View PDF HTML (experimental)Abstract:Scheduling echocardiographic exams in a hospital presents significant challenges due to non-deterministic factors (e.g., patient no-shows, patient arrival times, diverse exam durations, etc.) and asymmetric resource constraints between fetal and non-fetal patient streams. To address these challenges, we first conducted extensive pre-processing on one week of operational data from the Echo Laboratory at Stanford University's Lucile Packard Children's Hospital, to estimate patient no-show probabilities and derive empirical distributions of arrival times and exam durations. Based on these inputs, we developed a discrete-event stochastic simulation model using SimPy, and integrate it with the open source Gymnasium Python library. As a baseline for policy optimization, we developed a comparative framework to evaluate on-the-fly versus reservation-based allocation strategies, in which different proportions of resources are reserved in advance. Considering a hospital configuration with a 1:6 ratio of fetal to non-fetal rooms and a 4:2 ratio of fetal to non-fetal sonographers, we show that on-the-fly allocation generally yields better performance, more effectively adapting to patient variability and resource constraints. Building on this foundation, we apply reinforcement learning (RL) to derive an approximated optimal dynamic allocation policy. This RL-based policy is benchmarked against the best-performing rule-based strategies, allowing us to quantify their differences and provide actionable insights for improving echo lab efficiency through intelligent, data-driven resource management.
Submission history
From: Daniele Schiavazzi [view email][v1] Sat, 17 May 2025 17:51:23 UTC (9,150 KB)
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