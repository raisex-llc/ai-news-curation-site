---
title: 'Merging Smarter, Generalizing Better: Enhancing Model Merging on OOD Data'
description: "arXiv:2506.09093v2 Announce Type: replace-cross \nAbstract: Multi-task\
  \ learning (MTL) concurrently trains a model on diverse task datasets to exploit\
  \ common features, thereby improving overall performance across the tasks. Recent\
  \ studies have dedicated efforts to merging multiple independent model parameters\
  \ into a unified model for MTL, thus circumventing the need for training data and\
  \ expanding the scope of applicable scenarios of MTL. However, current approaches\
  \ to model merging predominantly concentrate on enhancing performance within in-domain\
  \ (ID) datasets, often overlooking their efficacy on out-of-domain (OOD) datasets.\
  \ In this work, we proposed LwPTV (Layer-wise Pruning Task Vector) by building a\
  \ saliency score, measuring the redundancy of parameters in task vectors. Designed\
  \ in this way ours can achieve mask vector for each task and thus perform layer-wise\
  \ pruning on the task vectors, only keeping the pre-trained model parameters at\
  \ the corresponding layer in merged model. Owing to its flexibility, our method\
  \ can be seamlessly integrated with most of existing model merging methods to improve\
  \ their performance on OOD tasks. Extensive experiments demonstrate that the application\
  \ of our method results in substantial enhancements in OOD performance while preserving\
  \ the ability on ID tasks."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.09093
---

Computer Science > Machine Learning
[Submitted on 10 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Merging Smarter, Generalizing Better: Enhancing Model Merging on OOD Data
View PDF HTML (experimental)Abstract:Multi-task learning (MTL) concurrently trains a model on diverse task datasets to exploit common features, thereby improving overall performance across the tasks. Recent studies have dedicated efforts to merging multiple independent model parameters into a unified model for MTL, thus circumventing the need for training data and expanding the scope of applicable scenarios of MTL. However, current approaches to model merging predominantly concentrate on enhancing performance within in-domain (ID) datasets, often overlooking their efficacy on out-of-domain (OOD) datasets. In this work, we proposed LwPTV (Layer-wise Pruning Task Vector) by building a saliency score, measuring the redundancy of parameters in task vectors. Designed in this way ours can achieve mask vector for each task and thus perform layer-wise pruning on the task vectors, only keeping the pre-trained model parameters at the corresponding layer in merged model. Owing to its flexibility, our method can be seamlessly integrated with most of existing model merging methods to improve their performance on OOD tasks. Extensive experiments demonstrate that the application of our method results in substantial enhancements in OOD performance while preserving the ability on ID tasks.
Submission history
From: Bingjie Zhang [view email][v1] Tue, 10 Jun 2025 11:34:23 UTC (2,360 KB)
[v2] Fri, 13 Jun 2025 09:02:50 UTC (2,360 KB)
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