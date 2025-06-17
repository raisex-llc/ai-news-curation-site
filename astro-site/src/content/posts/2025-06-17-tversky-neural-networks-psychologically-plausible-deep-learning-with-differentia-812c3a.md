---
title: 'Tversky Neural Networks: Psychologically Plausible Deep Learning with Differentiable
  Tversky Similarity'
description: "arXiv:2506.11035v1 Announce Type: cross \nAbstract: Work in psychology\
  \ has highlighted that the geometric model of similarity standard in deep learning\
  \ is not psychologically plausible because its metric properties such as symmetry\
  \ do not align with human perception. In contrast, Tversky (1977) proposed an axiomatic\
  \ theory of similarity based on a representation of objects as sets of features,\
  \ and their similarity as a function of common and distinctive features. However,\
  \ this model has not been used in deep learning before, partly due to the challenge\
  \ of incorporating discrete set operations. We develop a differentiable parameterization\
  \ of Tversky's similarity that is learnable through gradient descent, and derive\
  \ neural network building blocks such as the Tversky projection layer, which unlike\
  \ the linear projection layer can model non-linear functions such as XOR. Through\
  \ experiments with image recognition and language modeling, we show that the Tversky\
  \ projection layer is a beneficial replacement for the linear projection layer,\
  \ which employs geometric similarity. On the NABirds image classification task,\
  \ a frozen ResNet-50 adapted with a Tversky projection layer achieves a 24.7% relative\
  \ accuracy improvement over the linear layer adapter baseline. With Tversky projection\
  \ layers, GPT-2's perplexity on PTB decreases by 7.5%, and its parameter count by\
  \ 34.8%. Finally, we propose a unified interpretation of both projection layers\
  \ as computing similarities of input stimuli to learned prototypes, for which we\
  \ also propose a novel visualization technique highlighting the interpretability\
  \ of Tversky projection layers. Our work offers a new paradigm for thinking about\
  \ the similarity model implicit in deep learning, and designing networks that are\
  \ interpretable under an established theory of psychological similarity."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11035
---

Computer Science > Machine Learning
[Submitted on 21 May 2025]
Title:Tversky Neural Networks: Psychologically Plausible Deep Learning with Differentiable Tversky Similarity
View PDF HTML (experimental)Abstract:Work in psychology has highlighted that the geometric model of similarity standard in deep learning is not psychologically plausible because its metric properties such as symmetry do not align with human perception. In contrast, Tversky (1977) proposed an axiomatic theory of similarity based on a representation of objects as sets of features, and their similarity as a function of common and distinctive features. However, this model has not been used in deep learning before, partly due to the challenge of incorporating discrete set operations. We develop a differentiable parameterization of Tversky's similarity that is learnable through gradient descent, and derive neural network building blocks such as the Tversky projection layer, which unlike the linear projection layer can model non-linear functions such as XOR. Through experiments with image recognition and language modeling, we show that the Tversky projection layer is a beneficial replacement for the linear projection layer, which employs geometric similarity. On the NABirds image classification task, a frozen ResNet-50 adapted with a Tversky projection layer achieves a 24.7% relative accuracy improvement over the linear layer adapter baseline. With Tversky projection layers, GPT-2's perplexity on PTB decreases by 7.5%, and its parameter count by 34.8%. Finally, we propose a unified interpretation of both projection layers as computing similarities of input stimuli to learned prototypes, for which we also propose a novel visualization technique highlighting the interpretability of Tversky projection layers. Our work offers a new paradigm for thinking about the similarity model implicit in deep learning, and designing networks that are interpretable under an established theory of psychological similarity.
Submission history
From: Moussa Koulako Bala Doumbouya [view email][v1] Wed, 21 May 2025 01:01:48 UTC (16,380 KB)
Current browse context:
cs.LG
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