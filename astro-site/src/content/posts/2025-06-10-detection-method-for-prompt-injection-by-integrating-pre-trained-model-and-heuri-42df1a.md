---
title: Detection Method for Prompt Injection by Integrating Pre-trained Model and
  Heuristic Feature Engineering
description: "arXiv:2506.06384v1 Announce Type: cross \nAbstract: With the widespread\
  \ adoption of Large Language Models (LLMs), prompt injection attacks have emerged\
  \ as a significant security threat. Existing defense mechanisms often face critical\
  \ trade-offs between effectiveness and generalizability. This highlights the urgent\
  \ need for efficient prompt injection detection methods that are applicable across\
  \ a wide range of LLMs. To address this challenge, we propose DMPI-PMHFE, a dual-channel\
  \ feature fusion detection framework. It integrates a pretrained language model\
  \ with heuristic feature engineering to detect prompt injection attacks. Specifically,\
  \ the framework employs DeBERTa-v3-base as a feature extractor to transform input\
  \ text into semantic vectors enriched with contextual information. In parallel,\
  \ we design heuristic rules based on known attack patterns to extract explicit structural\
  \ features commonly observed in attacks. Features from both channels are subsequently\
  \ fused and passed through a fully connected neural network to produce the final\
  \ prediction. This dual-channel approach mitigates the limitations of relying only\
  \ on DeBERTa to extract features. Experimental results on diverse benchmark datasets\
  \ demonstrate that DMPI-PMHFE outperforms existing methods in terms of accuracy,\
  \ recall, and F1-score. Furthermore, when deployed actually, it significantly reduces\
  \ attack success rates across mainstream LLMs, including GLM-4, LLaMA 3, Qwen 2.5,\
  \ and GPT-4o."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06384
---

Computer Science > Computation and Language
[Submitted on 5 Jun 2025]
Title:Detection Method for Prompt Injection by Integrating Pre-trained Model and Heuristic Feature Engineering
View PDF HTML (experimental)Abstract:With the widespread adoption of Large Language Models (LLMs), prompt injection attacks have emerged as a significant security threat. Existing defense mechanisms often face critical trade-offs between effectiveness and generalizability. This highlights the urgent need for efficient prompt injection detection methods that are applicable across a wide range of LLMs. To address this challenge, we propose DMPI-PMHFE, a dual-channel feature fusion detection framework. It integrates a pretrained language model with heuristic feature engineering to detect prompt injection attacks. Specifically, the framework employs DeBERTa-v3-base as a feature extractor to transform input text into semantic vectors enriched with contextual information. In parallel, we design heuristic rules based on known attack patterns to extract explicit structural features commonly observed in attacks. Features from both channels are subsequently fused and passed through a fully connected neural network to produce the final prediction. This dual-channel approach mitigates the limitations of relying only on DeBERTa to extract features. Experimental results on diverse benchmark datasets demonstrate that DMPI-PMHFE outperforms existing methods in terms of accuracy, recall, and F1-score. Furthermore, when deployed actually, it significantly reduces attack success rates across mainstream LLMs, including GLM-4, LLaMA 3, Qwen 2.5, and GPT-4o.
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