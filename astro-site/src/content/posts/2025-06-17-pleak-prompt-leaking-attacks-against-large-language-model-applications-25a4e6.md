---
title: 'PLeak: Prompt Leaking Attacks against Large Language Model Applications'
description: "arXiv:2405.06823v3 Announce Type: replace-cross \nAbstract: Large Language\
  \ Models (LLMs) enable a new ecosystem with many downstream applications, called\
  \ LLM applications, with different natural language processing tasks. The functionality\
  \ and performance of an LLM application highly depend on its system prompt, which\
  \ instructs the backend LLM on what task to perform. Therefore, an LLM application\
  \ developer often keeps a system prompt confidential to protect its intellectual\
  \ property. As a result, a natural attack, called prompt leaking, is to steal the\
  \ system prompt from an LLM application, which compromises the developer's intellectual\
  \ property. Existing prompt leaking attacks primarily rely on manually crafted queries,\
  \ and thus achieve limited effectiveness.\n  In this paper, we design a novel, closed-box\
  \ prompt leaking attack framework, called PLeak, to optimize an adversarial query\
  \ such that when the attacker sends it to a target LLM application, its response\
  \ reveals its own system prompt. We formulate finding such an adversarial query\
  \ as an optimization problem and solve it with a gradient-based method approximately.\
  \ Our key idea is to break down the optimization goal by optimizing adversary queries\
  \ for system prompts incrementally, i.e., starting from the first few tokens of\
  \ each system prompt step by step until the entire length of the system prompt.\n\
  \  We evaluate PLeak in both offline settings and for real-world LLM applications,\
  \ e.g., those on Poe, a popular platform hosting such applications. Our results\
  \ show that PLeak can effectively leak system prompts and significantly outperforms\
  \ not only baselines that manually curate queries but also baselines with optimized\
  \ queries that are modified and adapted from existing jailbreaking attacks. We responsibly\
  \ reported the issues to Poe and are still waiting for their response. Our implementation\
  \ is available at this repository: https://github.com/BHui97/PLeak."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2405.06823
---

Computer Science > Cryptography and Security
[Submitted on 10 May 2024 (v1), last revised 13 Jun 2025 (this version, v3)]
Title:PLeak: Prompt Leaking Attacks against Large Language Model Applications
View PDF HTML (experimental)Abstract:Large Language Models (LLMs) enable a new ecosystem with many downstream applications, called LLM applications, with different natural language processing tasks. The functionality and performance of an LLM application highly depend on its system prompt, which instructs the backend LLM on what task to perform. Therefore, an LLM application developer often keeps a system prompt confidential to protect its intellectual property. As a result, a natural attack, called prompt leaking, is to steal the system prompt from an LLM application, which compromises the developer's intellectual property. Existing prompt leaking attacks primarily rely on manually crafted queries, and thus achieve limited effectiveness.
In this paper, we design a novel, closed-box prompt leaking attack framework, called PLeak, to optimize an adversarial query such that when the attacker sends it to a target LLM application, its response reveals its own system prompt. We formulate finding such an adversarial query as an optimization problem and solve it with a gradient-based method approximately. Our key idea is to break down the optimization goal by optimizing adversary queries for system prompts incrementally, i.e., starting from the first few tokens of each system prompt step by step until the entire length of the system prompt.
We evaluate PLeak in both offline settings and for real-world LLM applications, e.g., those on Poe, a popular platform hosting such applications. Our results show that PLeak can effectively leak system prompts and significantly outperforms not only baselines that manually curate queries but also baselines with optimized queries that are modified and adapted from existing jailbreaking attacks. We responsibly reported the issues to Poe and are still waiting for their response. Our implementation is available at this repository: this https URL.
Submission history
From: Bo Hui [view email][v1] Fri, 10 May 2024 21:52:34 UTC (1,090 KB)
[v2] Tue, 14 May 2024 15:03:12 UTC (1,090 KB)
[v3] Fri, 13 Jun 2025 02:24:21 UTC (1,013 KB)
Current browse context:
cs.CR
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