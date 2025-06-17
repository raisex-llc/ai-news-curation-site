---
title: 'LoRA Users Beware: A Few Spurious Tokens Can Manipulate Your Finetuned Model'
description: "arXiv:2506.11402v1 Announce Type: cross \nAbstract: Parameter Efficient\
  \ FineTuning (PEFT), such as Low-Rank Adaptation (LoRA), aligns pre-trained Large\
  \ Language Models (LLMs) to particular downstream tasks in a resource-efficient\
  \ manner. Because efficiency has been the main metric of progress, very little attention\
  \ has been put in understanding possible catastrophic failures. We uncover one such\
  \ failure: PEFT encourages a model to search for shortcut solutions to solve its\
  \ fine-tuning tasks. When very small amount of tokens, e.g., one token per prompt,\
  \ are correlated with downstream task classes, PEFT makes any pretrained model rely\
  \ predominantly on that token for decision making. While such spurious tokens may\
  \ emerge accidentally from incorrect data cleaning, it also opens opportunities\
  \ for malevolent parties to control a model's behavior from Seamless Spurious Token\
  \ Injection (SSTI). In SSTI, a small amount of tokens correlated with downstream\
  \ classes are injected by the dataset creators. At test time, the finetuned LLM's\
  \ behavior can be controlled solely by injecting those few tokens. We apply SSTI\
  \ across models from three families (Snowflake Arctic, Apple OpenELM, and Meta LLaMA-3)\
  \ and four diverse datasets (IMDB, Financial Classification, CommonSense QA, and\
  \ Bias in Bios). Our findings reveal three astonishing behaviors. First, as few\
  \ as a single token of SSTI is sufficient to steer a model's decision making. Second,\
  \ for light SSTI, the reliance on spurious tokens is proportional to the LoRA rank.\
  \ Lastly, with aggressive SSTI, larger LoRA rank values become preferable to small\
  \ rank values as it makes the model attend to non-spurious tokens, hence improving\
  \ robustness."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11402
---

Computer Science > Machine Learning
[Submitted on 13 Jun 2025]
Title:LoRA Users Beware: A Few Spurious Tokens Can Manipulate Your Finetuned Model
View PDF HTML (experimental)Abstract:Parameter Efficient FineTuning (PEFT), such as Low-Rank Adaptation (LoRA), aligns pre-trained Large Language Models (LLMs) to particular downstream tasks in a resource-efficient manner. Because efficiency has been the main metric of progress, very little attention has been put in understanding possible catastrophic failures. We uncover one such failure: PEFT encourages a model to search for shortcut solutions to solve its fine-tuning tasks. When very small amount of tokens, e.g., one token per prompt, are correlated with downstream task classes, PEFT makes any pretrained model rely predominantly on that token for decision making. While such spurious tokens may emerge accidentally from incorrect data cleaning, it also opens opportunities for malevolent parties to control a model's behavior from Seamless Spurious Token Injection (SSTI). In SSTI, a small amount of tokens correlated with downstream classes are injected by the dataset creators. At test time, the finetuned LLM's behavior can be controlled solely by injecting those few tokens. We apply SSTI across models from three families (Snowflake Arctic, Apple OpenELM, and Meta LLaMA-3) and four diverse datasets (IMDB, Financial Classification, CommonSense QA, and Bias in Bios). Our findings reveal three astonishing behaviors. First, as few as a single token of SSTI is sufficient to steer a model's decision making. Second, for light SSTI, the reliance on spurious tokens is proportional to the LoRA rank. Lastly, with aggressive SSTI, larger LoRA rank values become preferable to small rank values as it makes the model attend to non-spurious tokens, hence improving robustness.
Submission history
From: Marcel Mateos Salles [view email][v1] Fri, 13 Jun 2025 02:02:57 UTC (1,808 KB)
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