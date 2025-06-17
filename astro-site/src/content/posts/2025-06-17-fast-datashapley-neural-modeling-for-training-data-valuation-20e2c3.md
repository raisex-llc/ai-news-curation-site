---
title: 'Fast-DataShapley: Neural Modeling for Training Data Valuation'
description: "arXiv:2506.05281v2 Announce Type: replace-cross \nAbstract: The value\
  \ and copyright of training data are crucial in the artificial intelligence industry.\
  \ Service platforms should protect data providers' legitimate rights and fairly\
  \ reward them for their contributions. Shapley value, a potent tool for evaluating\
  \ contributions, outperforms other methods in theory, but its computational overhead\
  \ escalates exponentially with the number of data providers. Recent works based\
  \ on Shapley values attempt to mitigate computation complexity by approximation\
  \ algorithms. However, they need to retrain for each test sample, leading to intolerable\
  \ costs. We propose Fast-DataShapley, a one-pass training method that leverages\
  \ the weighted least squares characterization of the Shapley value to train a reusable\
  \ explainer model with real-time reasoning speed. Given new test samples, no retraining\
  \ is required to calculate the Shapley values of the training data. Additionally,\
  \ we propose three methods with theoretical guarantees to reduce training overhead\
  \ from two aspects: the approximate calculation of the utility function and the\
  \ group calculation of the training data. We analyze time complexity to show the\
  \ efficiency of our methods. The experimental evaluations on various image datasets\
  \ demonstrate superior performance and efficiency compared to baselines. Specifically,\
  \ the performance is improved to more than 2.5 times, and the explainer's training\
  \ speed can be increased by two orders of magnitude."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.05281
---

Computer Science > Machine Learning
[Submitted on 5 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Fast-DataShapley: Neural Modeling for Training Data Valuation
View PDF HTML (experimental)Abstract:The value and copyright of training data are crucial in the artificial intelligence industry. Service platforms should protect data providers' legitimate rights and fairly reward them for their contributions. Shapley value, a potent tool for evaluating contributions, outperforms other methods in theory, but its computational overhead escalates exponentially with the number of data providers. Recent works based on Shapley values attempt to mitigate computation complexity by approximation algorithms. However, they need to retrain for each test sample, leading to intolerable costs. We propose Fast-DataShapley, a one-pass training method that leverages the weighted least squares characterization of the Shapley value to train a reusable explainer model with real-time reasoning speed. Given new test samples, no retraining is required to calculate the Shapley values of the training data. Additionally, we propose three methods with theoretical guarantees to reduce training overhead from two aspects: the approximate calculation of the utility function and the group calculation of the training data. We analyze time complexity to show the efficiency of our methods. The experimental evaluations on various image datasets demonstrate superior performance and efficiency compared to baselines. Specifically, the performance is improved to more than 2.5 times, and the explainer's training speed can be increased by two orders of magnitude.
Submission history
From: Haifeng Sun [view email][v1] Thu, 5 Jun 2025 17:35:46 UTC (545 KB)
[v2] Fri, 13 Jun 2025 02:29:20 UTC (545 KB)
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