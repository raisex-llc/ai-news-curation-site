---
title: Self-supervised Learning of Echocardiographic Video Representations via Online
  Cluster Distillation
description: "arXiv:2506.11777v1 Announce Type: cross \nAbstract: Self-supervised\
  \ learning (SSL) has achieved major advances in natural images and video understanding,\
  \ but challenges remain in domains like echocardiography (heart ultrasound) due\
  \ to subtle anatomical structures, complex temporal dynamics, and the current lack\
  \ of domain-specific pre-trained models. Existing SSL approaches such as contrastive,\
  \ masked modeling, and clustering-based methods struggle with high intersample similarity,\
  \ sensitivity to low PSNR inputs common in ultrasound, or aggressive augmentations\
  \ that distort clinically relevant features. We present DISCOVR (Distilled Image\
  \ Supervision for Cross Modal Video Representation), a self-supervised dual branch\
  \ framework for cardiac ultrasound video representation learning. DISCOVR combines\
  \ a clustering-based video encoder that models temporal dynamics with an online\
  \ image encoder that extracts fine-grained spatial semantics. These branches are\
  \ connected through a semantic cluster distillation loss that transfers anatomical\
  \ knowledge from the evolving image encoder to the video encoder, enabling temporally\
  \ coherent representations enriched with fine-grained semantic understanding. Evaluated\
  \ on six echocardiography datasets spanning fetal, pediatric, and adult populations,\
  \ DISCOVR outperforms both specialized video anomaly detection methods and state-of-the-art\
  \ video-SSL baselines in zero-shot and linear probing setups, and achieves superior\
  \ segmentation transfer."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11777
---

Computer Science > Computer Vision and Pattern Recognition
[Submitted on 13 Jun 2025]
Title:Self-supervised Learning of Echocardiographic Video Representations via Online Cluster Distillation
View PDF HTML (experimental)Abstract:Self-supervised learning (SSL) has achieved major advances in natural images and video understanding, but challenges remain in domains like echocardiography (heart ultrasound) due to subtle anatomical structures, complex temporal dynamics, and the current lack of domain-specific pre-trained models. Existing SSL approaches such as contrastive, masked modeling, and clustering-based methods struggle with high intersample similarity, sensitivity to low PSNR inputs common in ultrasound, or aggressive augmentations that distort clinically relevant features. We present DISCOVR (Distilled Image Supervision for Cross Modal Video Representation), a self-supervised dual branch framework for cardiac ultrasound video representation learning. DISCOVR combines a clustering-based video encoder that models temporal dynamics with an online image encoder that extracts fine-grained spatial semantics. These branches are connected through a semantic cluster distillation loss that transfers anatomical knowledge from the evolving image encoder to the video encoder, enabling temporally coherent representations enriched with fine-grained semantic understanding. Evaluated on six echocardiography datasets spanning fetal, pediatric, and adult populations, DISCOVR outperforms both specialized video anomaly detection methods and state-of-the-art video-SSL baselines in zero-shot and linear probing setups, and achieves superior segmentation transfer.
Submission history
From: Divyanshu Mishra [view email][v1] Fri, 13 Jun 2025 13:36:33 UTC (8,055 KB)
Current browse context:
cs.CV
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