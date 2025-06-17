---
title: 'Forward Target Propagation: A Forward-Only Approach to Global Error Credit
  Assignment via Local Losses'
description: "arXiv:2506.11030v1 Announce Type: cross \nAbstract: Training neural\
  \ networks has traditionally relied on backpropagation (BP), a gradient-based algorithm\
  \ that, despite its widespread success, suffers from key limitations in both biological\
  \ and hardware perspectives. These include backward error propagation by symmetric\
  \ weights, non-local credit assignment, and frozen activity during backward passes.\
  \ We propose Forward Target Propagation (FTP), a biologically plausible and computationally\
  \ efficient alternative that replaces the backward pass with a second forward pass.\
  \ FTP estimates layerwise targets using only feedforward computations, eliminating\
  \ the need for symmetric feedback weights or learnable inverse functions, hence\
  \ enabling modular and local learning. We evaluate FTP on fully connected networks,\
  \ CNNs, and RNNs, demonstrating accuracies competitive with BP on MNIST, CIFAR10,\
  \ and CIFAR100, as well as effective modeling of long-term dependencies in sequential\
  \ tasks. Moreover, FTP outperforms BP under quantized low-precision and emerging\
  \ hardware constraints while also demonstrating substantial efficiency gains over\
  \ other biologically inspired methods such as target propagation variants and forward-only\
  \ learning algorithms. With its minimal computational overhead, forward-only nature,\
  \ and hardware compatibility, FTP provides a promising direction for energy-efficient\
  \ on-device learning and neuromorphic computing."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11030
---

Computer Science > Machine Learning
[Submitted on 20 May 2025]
Title:Forward Target Propagation: A Forward-Only Approach to Global Error Credit Assignment via Local Losses
View PDF HTML (experimental)Abstract:Training neural networks has traditionally relied on backpropagation (BP), a gradient-based algorithm that, despite its widespread success, suffers from key limitations in both biological and hardware perspectives. These include backward error propagation by symmetric weights, non-local credit assignment, and frozen activity during backward passes. We propose Forward Target Propagation (FTP), a biologically plausible and computationally efficient alternative that replaces the backward pass with a second forward pass. FTP estimates layerwise targets using only feedforward computations, eliminating the need for symmetric feedback weights or learnable inverse functions, hence enabling modular and local learning. We evaluate FTP on fully connected networks, CNNs, and RNNs, demonstrating accuracies competitive with BP on MNIST, CIFAR10, and CIFAR100, as well as effective modeling of long-term dependencies in sequential tasks. Moreover, FTP outperforms BP under quantized low-precision and emerging hardware constraints while also demonstrating substantial efficiency gains over other biologically inspired methods such as target propagation variants and forward-only learning algorithms. With its minimal computational overhead, forward-only nature, and hardware compatibility, FTP provides a promising direction for energy-efficient on-device learning and neuromorphic computing.
Submission history
From: Nazmus Saadat As -Saquib [view email][v1] Tue, 20 May 2025 16:09:23 UTC (6,962 KB)
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