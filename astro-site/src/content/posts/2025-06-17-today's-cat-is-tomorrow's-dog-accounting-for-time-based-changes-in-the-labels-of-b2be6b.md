---
title: 'Today''s Cat Is Tomorrow''s Dog: Accounting for Time-Based Changes in the
  Labels of ML Vulnerability Detection Approaches'
description: "arXiv:2506.11939v1 Announce Type: cross \nAbstract: Vulnerability datasets\
  \ used for ML testing implicitly contain retrospective information. When tested\
  \ on the field, one can only use the labels available at the time of training and\
  \ testing (e.g. seen and assumed negatives). As vulnerabilities are discovered across\
  \ calendar time, labels change and past performance is not necessarily aligned with\
  \ future performance. Past works only considered the slices of the whole history\
  \ (e.g. DiverseVUl) or individual differences between releases (e.g. Jimenez et\
  \ al. ESEC/FSE 2019). Such approaches are either too optimistic in training (e.g.\
  \ the whole history) or too conservative (e.g. consecutive releases). We propose\
  \ a method to restructure a dataset into a series of datasets in which both training\
  \ and testing labels change to account for the knowledge available at the time.\
  \ If the model is actually learning, it should improve its performance over time\
  \ as more data becomes available and data becomes more stable, an effect that can\
  \ be checked with the Mann-Kendall test. We validate our methodology for vulnerability\
  \ detection with 4 time-based datasets (3 projects from BigVul dataset + Vuldeepecker's\
  \ NVD) and 5 ML models (Code2Vec, CodeBERT, LineVul, ReGVD, and Vuldeepecker). In\
  \ contrast to the intuitive expectation (more retrospective information, better\
  \ performance), the trend results show that performance changes inconsistently across\
  \ the years, showing that most models are not learning."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11939
---

Computer Science > Cryptography and Security
[Submitted on 13 Jun 2025]
Title:Today's Cat Is Tomorrow's Dog: Accounting for Time-Based Changes in the Labels of ML Vulnerability Detection Approaches
View PDF HTML (experimental)Abstract:Vulnerability datasets used for ML testing implicitly contain retrospective information. When tested on the field, one can only use the labels available at the time of training and testing (e.g. seen and assumed negatives). As vulnerabilities are discovered across calendar time, labels change and past performance is not necessarily aligned with future performance. Past works only considered the slices of the whole history (e.g. DiverseVUl) or individual differences between releases (e.g. Jimenez et al. ESEC/FSE 2019). Such approaches are either too optimistic in training (e.g. the whole history) or too conservative (e.g. consecutive releases). We propose a method to restructure a dataset into a series of datasets in which both training and testing labels change to account for the knowledge available at the time. If the model is actually learning, it should improve its performance over time as more data becomes available and data becomes more stable, an effect that can be checked with the Mann-Kendall test. We validate our methodology for vulnerability detection with 4 time-based datasets (3 projects from BigVul dataset + Vuldeepecker's NVD) and 5 ML models (Code2Vec, CodeBERT, LineVul, ReGVD, and Vuldeepecker). In contrast to the intuitive expectation (more retrospective information, better performance), the trend results show that performance changes inconsistently across the years, showing that most models are not learning.
Submission history
From: Ranindya Paramitha [view email][v1] Fri, 13 Jun 2025 16:42:21 UTC (6,947 KB)
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