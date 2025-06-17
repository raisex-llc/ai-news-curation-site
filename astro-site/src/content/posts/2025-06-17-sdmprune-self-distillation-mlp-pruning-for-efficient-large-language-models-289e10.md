---
title: 'SDMPrune: Self-Distillation MLP Pruning for Efficient Large Language Models'
description: "arXiv:2506.11120v1 Announce Type: cross \nAbstract: In spite of strong\
  \ performance achieved by LLMs, the costs of their deployment are unaffordable.\
  \ For the compression of LLMs, gradient-based pruning methods present promising\
  \ effectiveness. However, in these methods, the gradient computation with one-hot\
  \ labels ignore the potential predictions on other words, thus missing key information\
  \ for generative capability of the original model. To address this issue, we introduce\
  \ a self-distillation loss during the pruning phase (rather than post-training)\
  \ to fully exploit the predictions of the original model, thereby obtaining more\
  \ accurate gradient information for pruning. Moreover, we find that, compared to\
  \ attention modules, the predictions of LLM are less sensitive to multilayer perceptron\
  \ (MLP) modules, which take up more than $5 \\times$ parameters (LLaMA3.2-1.2B).\
  \ To this end, we focus on the pruning of MLP modules, to significantly compress\
  \ LLM without obvious performance degradation. Experimental results on extensive\
  \ zero-shot benchmarks demonstrate that our method significantly outperforms existing\
  \ pruning methods. Furthermore, our method achieves very competitive performance\
  \ among 1B-scale open source LLMs. The source code and trained weights are available\
  \ at https://github.com/visresearch/SDMPrune."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11120
---

Computer Science > Computation and Language
[Submitted on 10 Jun 2025]
Title:SDMPrune: Self-Distillation MLP Pruning for Efficient Large Language Models
View PDF HTML (experimental)Abstract:In spite of strong performance achieved by LLMs, the costs of their deployment are unaffordable. For the compression of LLMs, gradient-based pruning methods present promising effectiveness. However, in these methods, the gradient computation with one-hot labels ignore the potential predictions on other words, thus missing key information for generative capability of the original model. To address this issue, we introduce a self-distillation loss during the pruning phase (rather than post-training) to fully exploit the predictions of the original model, thereby obtaining more accurate gradient information for pruning. Moreover, we find that, compared to attention modules, the predictions of LLM are less sensitive to multilayer perceptron (MLP) modules, which take up more than $5 \times$ parameters (LLaMA3.2-1.2B). To this end, we focus on the pruning of MLP modules, to significantly compress LLM without obvious performance degradation. Experimental results on extensive zero-shot benchmarks demonstrate that our method significantly outperforms existing pruning methods. Furthermore, our method achieves very competitive performance among 1B-scale open source LLMs. The source code and trained weights are available at this https URL.
Current browse context:
cs.CL
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