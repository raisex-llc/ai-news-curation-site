---
title: 'Code Researcher: Deep Research Agent for Large Systems Code and Commit History'
description: "arXiv:2506.11060v1 Announce Type: cross \nAbstract: Large Language Model\
  \ (LLM)-based coding agents have shown promising results on coding benchmarks, but\
  \ their effectiveness on systems code remains underexplored. Due to the size and\
  \ complexities of systems code, making changes to a systems codebase is a daunting\
  \ task, even for humans. It requires researching about many pieces of context, derived\
  \ from the large codebase and its massive commit history, before making changes.\
  \ Inspired by the recent progress on deep research agents, we design the first deep\
  \ research agent for code, called Code Researcher, and apply it to the problem of\
  \ generating patches for mitigating crashes reported in systems code. Code Researcher\
  \ performs multi-step reasoning about semantics, patterns, and commit history of\
  \ code to gather sufficient context. The context is stored in a structured memory\
  \ which is used for synthesizing a patch. We evaluate Code Researcher on kBenchSyz,\
  \ a benchmark of Linux kernel crashes, and show that it significantly outperforms\
  \ strong baselines, achieving a crash-resolution rate of 58%, compared to 37.5%\
  \ by SWE-agent. On an average, Code Researcher explores 10 files in each trajectory\
  \ whereas SWE-agent explores only 1.33 files, highlighting Code Researcher's ability\
  \ to deeply explore the codebase. Through another experiment on an open-source multimedia\
  \ software, we show the generalizability of Code Researcher. Our experiments highlight\
  \ the importance of global context gathering and multi-faceted reasoning for large\
  \ codebases."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11060
---

Computer Science > Software Engineering
[Submitted on 27 May 2025]
Title:Code Researcher: Deep Research Agent for Large Systems Code and Commit History
View PDFAbstract:Large Language Model (LLM)-based coding agents have shown promising results on coding benchmarks, but their effectiveness on systems code remains underexplored. Due to the size and complexities of systems code, making changes to a systems codebase is a daunting task, even for humans. It requires researching about many pieces of context, derived from the large codebase and its massive commit history, before making changes. Inspired by the recent progress on deep research agents, we design the first deep research agent for code, called Code Researcher, and apply it to the problem of generating patches for mitigating crashes reported in systems code. Code Researcher performs multi-step reasoning about semantics, patterns, and commit history of code to gather sufficient context. The context is stored in a structured memory which is used for synthesizing a patch. We evaluate Code Researcher on kBenchSyz, a benchmark of Linux kernel crashes, and show that it significantly outperforms strong baselines, achieving a crash-resolution rate of 58%, compared to 37.5% by SWE-agent. On an average, Code Researcher explores 10 files in each trajectory whereas SWE-agent explores only 1.33 files, highlighting Code Researcher's ability to deeply explore the codebase. Through another experiment on an open-source multimedia software, we show the generalizability of Code Researcher. Our experiments highlight the importance of global context gathering and multi-faceted reasoning for large codebases.
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