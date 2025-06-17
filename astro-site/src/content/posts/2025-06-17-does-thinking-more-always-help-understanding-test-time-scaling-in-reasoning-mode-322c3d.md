---
title: Does Thinking More always Help? Understanding Test-Time Scaling in Reasoning
  Models
description: "arXiv:2506.04210v2 Announce Type: replace \nAbstract: Recent trends\
  \ in test-time scaling for reasoning models (e.g., OpenAI o1, DeepSeek R1) have\
  \ led to a popular belief that extending thinking traces using prompts like \"Wait\"\
  \ or \"Let me rethink\" can improve performance. This raises a natural question:\
  \ Does thinking more at test-time truly lead to better reasoning? To answer this\
  \ question, we perform a detailed empirical study across models and benchmarks,\
  \ which reveals a consistent pattern of initial performance improvements from additional\
  \ thinking followed by a decline, due to \"overthinking\". To understand this non-monotonic\
  \ trend, we consider a simple probabilistic model, which reveals that additional\
  \ thinking increases output variance-creating an illusion of improved reasoning\
  \ while ultimately undermining precision. Thus, observed gains from \"more thinking\"\
  \ are not true indicators of improved reasoning, but artifacts stemming from the\
  \ connection between model uncertainty and evaluation metric. This suggests that\
  \ test-time scaling through extended thinking is not an effective way to utilize\
  \ the inference thinking budget. Recognizing these limitations, we introduce an\
  \ alternative test-time scaling approach, parallel thinking, inspired by Best-of-N\
  \ sampling. Our method generates multiple independent reasoning paths within the\
  \ same inference budget and selects the most consistent response via majority vote,\
  \ achieving up to 20% higher accuracy compared to extended thinking. This provides\
  \ a simple yet effective mechanism for test-time scaling of reasoning models."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.04210
---

Computer Science > Artificial Intelligence
[Submitted on 4 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Does Thinking More always Help? Understanding Test-Time Scaling in Reasoning Models
View PDF HTML (experimental)Abstract:Recent trends in test-time scaling for reasoning models (e.g., OpenAI o1, DeepSeek R1) have led to a popular belief that extending thinking traces using prompts like "Wait" or "Let me rethink" can improve performance. This raises a natural question: Does thinking more at test-time truly lead to better reasoning? To answer this question, we perform a detailed empirical study across models and benchmarks, which reveals a consistent pattern of initial performance improvements from additional thinking followed by a decline, due to "overthinking". To understand this non-monotonic trend, we consider a simple probabilistic model, which reveals that additional thinking increases output variance-creating an illusion of improved reasoning while ultimately undermining precision. Thus, observed gains from "more thinking" are not true indicators of improved reasoning, but artifacts stemming from the connection between model uncertainty and evaluation metric. This suggests that test-time scaling through extended thinking is not an effective way to utilize the inference thinking budget. Recognizing these limitations, we introduce an alternative test-time scaling approach, parallel thinking, inspired by Best-of-N sampling. Our method generates multiple independent reasoning paths within the same inference budget and selects the most consistent response via majority vote, achieving up to 20% higher accuracy compared to extended thinking. This provides a simple yet effective mechanism for test-time scaling of reasoning models.
Submission history
From: Soumya Suvra Ghosal Mr. [view email][v1] Wed, 4 Jun 2025 17:55:09 UTC (13,618 KB)
[v2] Fri, 13 Jun 2025 05:29:27 UTC (13,618 KB)
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