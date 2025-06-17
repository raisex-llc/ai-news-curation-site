---
title: A Comparative Analysis of Influence Signals for Data Debugging
description: "arXiv:2506.11584v1 Announce Type: cross \nAbstract: Improving the quality\
  \ of training samples is crucial for improving the reliability and performance of\
  \ ML models. In this paper, we conduct a comparative evaluation of influence-based\
  \ signals for debugging training data. These signals can potentially identify both\
  \ mislabeled and anomalous samples from a potentially noisy training set as we build\
  \ the models and hence alleviate the need for dedicated glitch detectors. Although\
  \ several influence-based signals (e.g., Self-Influence, Average Absolute Influence,\
  \ Marginal Influence, GD-class) have been recently proposed in the literature, there\
  \ are no experimental studies for assessing their power in detecting different glitch\
  \ types (e.g., mislabeled and anomalous samples) under a common influence estimator\
  \ (e.g., TraceIn) for different data modalities (image and tabular), and deep learning\
  \ models (trained from scratch or foundation). Through extensive experiments, we\
  \ show that signals like Self-Influence effectively detect mislabeled samples, but\
  \ none of the existing signals can detect anomalies. Existing signals do not take\
  \ into account the training dynamics, i.e., how the samples' influence on the model\
  \ changes during training, while some signals fall into influence cancellation effects,\
  \ i.e., influence score is zero due to unsigned scores accumulation, resulting in\
  \ misleading influence attribution."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11584
---

Computer Science > Machine Learning
[Submitted on 13 Jun 2025]
Title:A Comparative Analysis of Influence Signals for Data Debugging
View PDF HTML (experimental)Abstract:Improving the quality of training samples is crucial for improving the reliability and performance of ML models. In this paper, we conduct a comparative evaluation of influence-based signals for debugging training data. These signals can potentially identify both mislabeled and anomalous samples from a potentially noisy training set as we build the models and hence alleviate the need for dedicated glitch detectors. Although several influence-based signals (e.g., Self-Influence, Average Absolute Influence, Marginal Influence, GD-class) have been recently proposed in the literature, there are no experimental studies for assessing their power in detecting different glitch types (e.g., mislabeled and anomalous samples) under a common influence estimator (e.g., TraceIn) for different data modalities (image and tabular), and deep learning models (trained from scratch or foundation). Through extensive experiments, we show that signals like Self-Influence effectively detect mislabeled samples, but none of the existing signals can detect anomalies. Existing signals do not take into account the training dynamics, i.e., how the samples' influence on the model changes during training, while some signals fall into influence cancellation effects, i.e., influence score is zero due to unsigned scores accumulation, resulting in misleading influence attribution.
Submission history
From: Nikolaos Myrtakis [view email][v1] Fri, 13 Jun 2025 08:47:04 UTC (2,660 KB)
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