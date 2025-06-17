---
title: Invocable APIs derived from NL2SQL datasets for LLM Tool-Calling Evaluation
description: "arXiv:2506.11266v1 Announce Type: cross \nAbstract: Large language models\
  \ (LLMs) are routinely deployed as agentic systems, with access to tools that interact\
  \ with live environments to accomplish tasks. In enterprise deployments these systems\
  \ need to interact with API collections that can be extremely large and complex,\
  \ often backed by databases. In order to create datasets with such characteristics,\
  \ we explore how existing NL2SQL (Natural Language to SQL query) datasets can be\
  \ used to automatically create NL2API datasets. Specifically, this work describes\
  \ a novel data generation pipeline that exploits the syntax of SQL queries to construct\
  \ a functionally equivalent sequence of API calls. We apply this pipeline to one\
  \ of the largest NL2SQL datasets, BIRD-SQL to create a collection of over 2500 APIs\
  \ that can be served as invocable tools or REST-endpoints. We pair natural language\
  \ queries from BIRD-SQL to ground-truth API sequences based on this API pool. We\
  \ use this collection to study the performance of 10 public LLMs and find that all\
  \ models struggle to determine the right set of tools (consisting of tasks of intent\
  \ detection, sequencing with nested function calls, and slot-filling). We find that\
  \ models have extremely low task completion rates (7-47 percent - depending on the\
  \ dataset) which marginally improves to 50 percent when models are employed as ReACT\
  \ agents that interact with the live API environment. The best task completion rates\
  \ are far below what may be required for effective general-use tool-calling agents,\
  \ suggesting substantial scope for improvement in current state-of-the-art tool-calling\
  \ LLMs. We also conduct detailed ablation studies, such as assessing the impact\
  \ of the number of tools available as well as the impact of tool and slot-name obfuscation.\
  \ We compare the performance of models on the original SQL generation tasks and\
  \ find that current models are sometimes able to exploit SQL better than APIs."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11266
---

Computer Science > Software Engineering
[Submitted on 12 Jun 2025]
Title:Invocable APIs derived from NL2SQL datasets for LLM Tool-Calling Evaluation
View PDFAbstract:Large language models (LLMs) are routinely deployed as agentic systems, with access to tools that interact with live environments to accomplish tasks. In enterprise deployments these systems need to interact with API collections that can be extremely large and complex, often backed by databases. In order to create datasets with such characteristics, we explore how existing NL2SQL (Natural Language to SQL query) datasets can be used to automatically create NL2API datasets. Specifically, this work describes a novel data generation pipeline that exploits the syntax of SQL queries to construct a functionally equivalent sequence of API calls. We apply this pipeline to one of the largest NL2SQL datasets, BIRD-SQL to create a collection of over 2500 APIs that can be served as invocable tools or REST-endpoints. We pair natural language queries from BIRD-SQL to ground-truth API sequences based on this API pool. We use this collection to study the performance of 10 public LLMs and find that all models struggle to determine the right set of tools (consisting of tasks of intent detection, sequencing with nested function calls, and slot-filling). We find that models have extremely low task completion rates (7-47 percent - depending on the dataset) which marginally improves to 50 percent when models are employed as ReACT agents that interact with the live API environment. The best task completion rates are far below what may be required for effective general-use tool-calling agents, suggesting substantial scope for improvement in current state-of-the-art tool-calling LLMs. We also conduct detailed ablation studies, such as assessing the impact of the number of tools available as well as the impact of tool and slot-name obfuscation. We compare the performance of models on the original SQL generation tasks and find that current models are sometimes able to exploit SQL better than APIs.
Submission history
From: Anupama Narasimha Murthi [view email][v1] Thu, 12 Jun 2025 20:17:52 UTC (836 KB)
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