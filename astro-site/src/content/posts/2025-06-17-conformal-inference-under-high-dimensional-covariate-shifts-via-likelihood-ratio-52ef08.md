---
title: Conformal Inference under High-Dimensional Covariate Shifts via Likelihood-Ratio
  Regularization
description: "arXiv:2502.13030v3 Announce Type: replace-cross \nAbstract: We consider\
  \ the problem of conformal prediction under covariate shift. Given labeled data\
  \ from a source domain and unlabeled data from a covariate shifted target domain,\
  \ we seek to construct prediction sets with valid marginal coverage in the target\
  \ domain. Most existing methods require estimating the unknown likelihood ratio\
  \ function, which can be prohibitive for high-dimensional data such as images. To\
  \ address this challenge, we introduce the likelihood ratio regularized quantile\
  \ regression (LR-QR) algorithm, which combines the pinball loss with a novel choice\
  \ of regularization in order to construct a threshold function without directly\
  \ estimating the unknown likelihood ratio. We show that the LR-QR method has coverage\
  \ at the desired level in the target domain, up to a small error term that we can\
  \ control. Our proofs draw on a novel analysis of coverage via stability bounds\
  \ from learning theory. Our experiments demonstrate that the LR-QR algorithm outperforms\
  \ existing methods on high-dimensional prediction tasks, including a regression\
  \ task for the Communities and Crime dataset, an image classification task from\
  \ the WILDS repository, and an LLM question-answering task on the MMLU benchmark."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2502.13030
---

Statistics > Machine Learning
[Submitted on 18 Feb 2025 (v1), last revised 12 Jun 2025 (this version, v3)]
Title:Conformal Inference under High-Dimensional Covariate Shifts via Likelihood-Ratio Regularization
View PDF HTML (experimental)Abstract:We consider the problem of conformal prediction under covariate shift. Given labeled data from a source domain and unlabeled data from a covariate shifted target domain, we seek to construct prediction sets with valid marginal coverage in the target domain. Most existing methods require estimating the unknown likelihood ratio function, which can be prohibitive for high-dimensional data such as images. To address this challenge, we introduce the likelihood ratio regularized quantile regression (LR-QR) algorithm, which combines the pinball loss with a novel choice of regularization in order to construct a threshold function without directly estimating the unknown likelihood ratio. We show that the LR-QR method has coverage at the desired level in the target domain, up to a small error term that we can control. Our proofs draw on a novel analysis of coverage via stability bounds from learning theory. Our experiments demonstrate that the LR-QR algorithm outperforms existing methods on high-dimensional prediction tasks, including a regression task for the Communities and Crime dataset, an image classification task from the WILDS repository, and an LLM question-answering task on the MMLU benchmark.
Submission history
From: Sunay Joshi [view email][v1] Tue, 18 Feb 2025 16:46:44 UTC (322 KB)
[v2] Mon, 26 May 2025 15:21:00 UTC (311 KB)
[v3] Thu, 12 Jun 2025 22:57:43 UTC (161 KB)
Current browse context:
stat.ML
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