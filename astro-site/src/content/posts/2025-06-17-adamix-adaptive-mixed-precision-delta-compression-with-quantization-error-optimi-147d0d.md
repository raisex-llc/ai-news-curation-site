---
title: 'ADAMIX: Adaptive Mixed-Precision Delta-Compression with Quantization Error
  Optimization for Large Language Models'
description: "arXiv:2506.11087v1 Announce Type: cross \nAbstract: Large language models\
  \ (LLMs) achieve impressive performance on various knowledge-intensive and complex\
  \ reasoning tasks in different domains. In certain scenarios like multi-tenant serving,\
  \ a large number of LLMs finetuned from the same base model are deployed to meet\
  \ complex requirements for users. Recent works explore delta-compression approaches\
  \ to quantize and compress the delta parameters between the customized LLM and the\
  \ corresponding base model. However, existing works either exhibit unsatisfactory\
  \ performance at high compression ratios or depend on empirical bit allocation schemes.\
  \ In this work, we propose ADAMIX, an effective adaptive mixed-precision delta-compression\
  \ framework. We provide a mathematical derivation of quantization error to motivate\
  \ our mixed-precision compression strategy and formulate the optimal mixed-precision\
  \ bit allocation scheme as the solution to a 0/1 integer linear programming problem.\
  \ Our derived bit allocation strategy minimizes the quantization error while adhering\
  \ to a predefined compression ratio requirement. Experimental results on various\
  \ models and benchmarks demonstrate that our approach surpasses the best baseline\
  \ by a considerable margin. On tasks like AIME2024 and GQA, where the norm of $\\\
  Delta \\mathbf{W}$ is large and the base model lacks sufficient ability, ADAMIX\
  \ outperforms the best baseline Delta-CoMe by 22.3% and 6.1% with 7B models, respectively."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11087
---

Computer Science > Machine Learning
[Submitted on 5 Jun 2025]
Title:ADAMIX: Adaptive Mixed-Precision Delta-Compression with Quantization Error Optimization for Large Language Models
View PDF HTML (experimental)Abstract:Large language models (LLMs) achieve impressive performance on various knowledge-intensive and complex reasoning tasks in different domains. In certain scenarios like multi-tenant serving, a large number of LLMs finetuned from the same base model are deployed to meet complex requirements for users. Recent works explore delta-compression approaches to quantize and compress the delta parameters between the customized LLM and the corresponding base model. However, existing works either exhibit unsatisfactory performance at high compression ratios or depend on empirical bit allocation schemes. In this work, we propose ADAMIX, an effective adaptive mixed-precision delta-compression framework. We provide a mathematical derivation of quantization error to motivate our mixed-precision compression strategy and formulate the optimal mixed-precision bit allocation scheme as the solution to a 0/1 integer linear programming problem. Our derived bit allocation strategy minimizes the quantization error while adhering to a predefined compression ratio requirement. Experimental results on various models and benchmarks demonstrate that our approach surpasses the best baseline by a considerable margin. On tasks like AIME2024 and GQA, where the norm of $\Delta \mathbf{W}$ is large and the base model lacks sufficient ability, ADAMIX outperforms the best baseline Delta-CoMe by 22.3% and 6.1% with 7B models, respectively.
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