---
title: Evaluating Sample Utility for Efficient Data Selection by Mimicking Model Weights
description: "arXiv:2501.06708v3 Announce Type: replace-cross \nAbstract: Multimodal\
  \ models are trained on large-scale web-crawled datasets, which often contain noise,\
  \ bias, and irrelevant information. This motivates the use of data selection techniques,\
  \ which can be divided into model-free variants, relying on heuristic rules and\
  \ downstream datasets, and model-based approaches, such as those using influence\
  \ functions. The former can be expensive to design and risks introducing unwanted\
  \ dataset dependencies, while the latter are often computationally prohibitive.\
  \ In this work, we propose an efficient, model-based approach using the Mimic Score,\
  \ a new data-quality metric that leverages the weights of a reference model to assess\
  \ the usefulness of individual samples for training a new model. Our method relies\
  \ on measuring alignments between training gradients and a target direction induced\
  \ by this reference model. Building on the derived mimic scores, we develop Grad-Mimic:\
  \ a framework that prioritizes samples to learn, estimates overall sample utility,\
  \ and creates effective filters. Empirically, using mimic scores to guide training\
  \ improves data efficiency, accelerates convergence, yields consistent performance\
  \ gains across six image datasets, and enhances CLIP models with 20.7% fewer training\
  \ steps. Moreover, mimic score-based filters complement existing filtering methods,\
  \ e.g., training improved CLIP models with 4.7 million fewer samples while offering\
  \ accurate estimation of dataset quality."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2501.06708
---

Computer Science > Machine Learning
[Submitted on 12 Jan 2025 (v1), last revised 12 Jun 2025 (this version, v3)]
Title:Evaluating Sample Utility for Efficient Data Selection by Mimicking Model Weights
View PDF HTML (experimental)Abstract:Multimodal models are trained on large-scale web-crawled datasets, which often contain noise, bias, and irrelevant information. This motivates the use of data selection techniques, which can be divided into model-free variants, relying on heuristic rules and downstream datasets, and model-based approaches, such as those using influence functions. The former can be expensive to design and risks introducing unwanted dataset dependencies, while the latter are often computationally prohibitive. In this work, we propose an efficient, model-based approach using the Mimic Score, a new data-quality metric that leverages the weights of a reference model to assess the usefulness of individual samples for training a new model. Our method relies on measuring alignments between training gradients and a target direction induced by this reference model. Building on the derived mimic scores, we develop Grad-Mimic: a framework that prioritizes samples to learn, estimates overall sample utility, and creates effective filters. Empirically, using mimic scores to guide training improves data efficiency, accelerates convergence, yields consistent performance gains across six image datasets, and enhances CLIP models with 20.7% fewer training steps. Moreover, mimic score-based filters complement existing filtering methods, e.g., training improved CLIP models with 4.7 million fewer samples while offering accurate estimation of dataset quality.
Submission history
From: Tzu-Heng Huang [view email][v1] Sun, 12 Jan 2025 04:28:14 UTC (4,479 KB)
[v2] Sun, 2 Feb 2025 18:34:01 UTC (4,125 KB)
[v3] Thu, 12 Jun 2025 23:46:24 UTC (4,982 KB)
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