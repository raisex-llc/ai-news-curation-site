---
title: Eliminating Hallucination-Induced Errors in LLM Code Generation with Functional
  Clustering
description: "arXiv:2506.11021v1 Announce Type: cross \nAbstract: Modern code-generation\
  \ LLMs can already solve a large fraction of programming problems, yet they still\
  \ hallucinate subtle bugs that make their outputs unsafe for autonomous deployment.\
  \ We present functional clustering, a black-box wrapper that eliminates nearly all\
  \ hallucination-induced errors while providing a tunable confidence score. The wrapper\
  \ samples many candidate programs, executes each on a self-generated test suite,\
  \ and clusters candidates whose I/O behavior is identical; the empirical mass of\
  \ the largest cluster serves as an exact confidence estimate. A single scalar threshold\
  \ on this estimate lets users trade coverage for reliability with exponential guarantees.\
  \ On LiveCodeBench our verifier preserves baseline pass@1 on solvable tasks yet\
  \ slashes the error rate of returned answers from ~65% to 2%, and drives it to 0%\
  \ at a conservative threshold while still answering 15.6% of prompts. Manual audits\
  \ show that the few residual mistakes stem from prompt misinterpretation, not random\
  \ generation noise, narrowing future work to specification clarity. Because the\
  \ method requires only sampling and sandbox execution, it applies unchanged to closed-source\
  \ APIs and future models, offering a practical path toward dependable, autonomous\
  \ code generation. Our code is available on Github (https://github.com/20ChaituR/functional-clustering)."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11021
---

Computer Science > Software Engineering
[Submitted on 16 May 2025]
Title:Eliminating Hallucination-Induced Errors in LLM Code Generation with Functional Clustering
View PDF HTML (experimental)Abstract:Modern code-generation LLMs can already solve a large fraction of programming problems, yet they still hallucinate subtle bugs that make their outputs unsafe for autonomous deployment. We present functional clustering, a black-box wrapper that eliminates nearly all hallucination-induced errors while providing a tunable confidence score. The wrapper samples many candidate programs, executes each on a self-generated test suite, and clusters candidates whose I/O behavior is identical; the empirical mass of the largest cluster serves as an exact confidence estimate. A single scalar threshold on this estimate lets users trade coverage for reliability with exponential guarantees. On LiveCodeBench our verifier preserves baseline pass@1 on solvable tasks yet slashes the error rate of returned answers from ~65% to 2%, and drives it to 0% at a conservative threshold while still answering 15.6% of prompts. Manual audits show that the few residual mistakes stem from prompt misinterpretation, not random generation noise, narrowing future work to specification clarity. Because the method requires only sampling and sandbox execution, it applies unchanged to closed-source APIs and future models, offering a practical path toward dependable, autonomous code generation. Our code is available on Github (this https URL).
Submission history
From: Chaitanya Ravuri [view email][v1] Fri, 16 May 2025 18:19:38 UTC (1,038 KB)
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