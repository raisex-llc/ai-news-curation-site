---
title: 'Bootstrapping your behavior: a new pretraining strategy for user behavior
  sequence data'
description: "arXiv:2506.11053v1 Announce Type: cross \nAbstract: User Behavior Sequence\
  \ (UBS) modeling is crucial in industrial applications. As data scale and task diversity\
  \ grow, UBS pretraining methods have become increasingly pivotal. State-of-the-art\
  \ UBS pretraining methods rely on predicting behavior distributions. The key step\
  \ in these methods is constructing a selected behavior vocabulary. However, this\
  \ manual step is labor-intensive and prone to bias. The limitation of vocabulary\
  \ capacity also directly affects models' generalization ability. In this paper,\
  \ we introduce Bootstrapping Your Behavior (\\model{}), a novel UBS pretraining\
  \ strategy that predicts an automatically constructed supervision embedding summarizing\
  \ all behaviors' information within a future time window, eliminating the manual\
  \ behavior vocabulary selection. In implementation, we incorporate a student-teacher\
  \ encoder scheme to construct the pretraining supervision effectively. Experiments\
  \ on two real-world industrial datasets and eight downstream tasks demonstrate that\
  \ \\model{} achieves an average improvement of 3.9\\% in AUC and 98.9\\% in training\
  \ throughput. Notably, the model exhibits meaningful attention patterns and cluster\
  \ representations during pretraining without any label supervision. In our online\
  \ deployment over two months, the pretrained model improves the KS by about 2.7\\\
  % and 7.1\\% over the baseline model for two financial overdue risk prediction tasks\
  \ in the Alipay mobile application, which reduces bad debt risk by millions of dollars\
  \ for Ant group."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11053
---

Computer Science > Machine Learning
[Submitted on 22 May 2025]
Title:Bootstrapping your behavior: a new pretraining strategy for user behavior sequence data
View PDF HTML (experimental)Abstract:User Behavior Sequence (UBS) modeling is crucial in industrial applications. As data scale and task diversity grow, UBS pretraining methods have become increasingly pivotal. State-of-the-art UBS pretraining methods rely on predicting behavior distributions. The key step in these methods is constructing a selected behavior vocabulary. However, this manual step is labor-intensive and prone to bias. The limitation of vocabulary capacity also directly affects models' generalization ability. In this paper, we introduce Bootstrapping Your Behavior (\model{}), a novel UBS pretraining strategy that predicts an automatically constructed supervision embedding summarizing all behaviors' information within a future time window, eliminating the manual behavior vocabulary selection. In implementation, we incorporate a student-teacher encoder scheme to construct the pretraining supervision effectively. Experiments on two real-world industrial datasets and eight downstream tasks demonstrate that \model{} achieves an average improvement of 3.9\% in AUC and 98.9\% in training throughput. Notably, the model exhibits meaningful attention patterns and cluster representations during pretraining without any label supervision. In our online deployment over two months, the pretrained model improves the KS by about 2.7\% and 7.1\% over the baseline model for two financial overdue risk prediction tasks in the Alipay mobile application, which reduces bad debt risk by millions of dollars for Ant group.
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