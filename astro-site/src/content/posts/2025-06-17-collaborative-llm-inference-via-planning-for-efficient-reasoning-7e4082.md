---
title: Collaborative LLM Inference via Planning for Efficient Reasoning
description: "arXiv:2506.11578v1 Announce Type: new \nAbstract: Large language models\
  \ (LLMs) excel at complex reasoning tasks, but those with strong capabilities (e.g.,\
  \ whose numbers of parameters are larger than 100B) are often accessible only through\
  \ paid APIs, making them too costly for applications of frequent use. In contrast,\
  \ smaller open-sourced LLMs (e.g., whose numbers of parameters are less than 3B)\
  \ are freely available and easy to deploy locally (e.g., under a single GPU having\
  \ 8G VRAM), but lack suff icient reasoning ability. This trade-off raises a natural\
  \ question: can small (free) and large (costly) models collaborate at test time\
  \ to combine their strengths? We propose a test-time collaboration framework in\
  \ which a planner model first generates a plan, defined as a distilled and high-level\
  \ abstraction of the problem.\n  This plan serves as a lightweight intermediate\
  \ that guides a reasoner model, which generates a complete solution. Small and large\
  \ models take turns acting as planner and reasoner, exchanging plans in a multi-round\
  \ cascade to collaboratively solve complex tasks. Our method achieves accuracy comparable\
  \ to strong proprietary models alone, while significantly reducing reliance on paid\
  \ inference. These results highlight planning as an effective prior for orchestrating\
  \ cost-aware, cross-model inference under real-world deployment constraints."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11578
---

Computer Science > Artificial Intelligence
[Submitted on 13 Jun 2025]
Title:Collaborative LLM Inference via Planning for Efficient Reasoning
View PDF HTML (experimental)Abstract:Large language models (LLMs) excel at complex reasoning tasks, but those with strong capabilities (e.g., whose numbers of parameters are larger than 100B) are often accessible only through paid APIs, making them too costly for applications of frequent use. In contrast, smaller open-sourced LLMs (e.g., whose numbers of parameters are less than 3B) are freely available and easy to deploy locally (e.g., under a single GPU having 8G VRAM), but lack suff icient reasoning ability. This trade-off raises a natural question: can small (free) and large (costly) models collaborate at test time to combine their strengths? We propose a test-time collaboration framework in which a planner model first generates a plan, defined as a distilled and high-level abstraction of the problem.
This plan serves as a lightweight intermediate that guides a reasoner model, which generates a complete solution. Small and large models take turns acting as planner and reasoner, exchanging plans in a multi-round cascade to collaboratively solve complex tasks. Our method achieves accuracy comparable to strong proprietary models alone, while significantly reducing reliance on paid inference. These results highlight planning as an effective prior for orchestrating cost-aware, cross-model inference under real-world deployment constraints.
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