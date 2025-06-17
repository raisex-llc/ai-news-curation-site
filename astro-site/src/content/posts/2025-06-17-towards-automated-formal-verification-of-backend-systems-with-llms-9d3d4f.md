---
title: Towards Automated Formal Verification of Backend Systems with LLMs
description: "arXiv:2506.10998v1 Announce Type: cross \nAbstract: Software testing\
  \ plays a critical role in ensuring that systems behave as intended. However, existing\
  \ automated testing approaches struggle to match the capabilities of human engineers\
  \ due to key limitations such as test locality, lack of general reliability, and\
  \ business logic blindness. In this work, we propose a novel framework that leverages\
  \ functional programming and type systems to translate Scala backend code into formal\
  \ Lean representations. Our pipeline automatically generates theorems that specify\
  \ the intended behavior of APIs and database operations, and uses LLM-based provers\
  \ to verify them. When a theorem is proved, the corresponding logic is guaranteed\
  \ to be correct and no further testing is needed. If the negation of a theorem is\
  \ proved instead, it confirms a bug. In cases where neither can be proved, human\
  \ intervention is required. We evaluate our method on realistic backend systems\
  \ and find that it can formally verify over 50% of the test requirements, which\
  \ suggests that half of a testing engineer's workload can be automated. Additionally,\
  \ with an average cost of only $2.19 per API, LLM-based verification is significantly\
  \ more cost-effective than manual testing and can be scaled easily through parallel\
  \ execution. Our results indicate a promising direction for scalable, AI-powered\
  \ software testing, with the potential to greatly improve engineering productivity\
  \ as models continue to advance."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.10998
---

Computer Science > Software Engineering
[Submitted on 13 Apr 2025]
Title:Towards Automated Formal Verification of Backend Systems with LLMs
View PDF HTML (experimental)Abstract:Software testing plays a critical role in ensuring that systems behave as intended. However, existing automated testing approaches struggle to match the capabilities of human engineers due to key limitations such as test locality, lack of general reliability, and business logic blindness. In this work, we propose a novel framework that leverages functional programming and type systems to translate Scala backend code into formal Lean representations. Our pipeline automatically generates theorems that specify the intended behavior of APIs and database operations, and uses LLM-based provers to verify them. When a theorem is proved, the corresponding logic is guaranteed to be correct and no further testing is needed. If the negation of a theorem is proved instead, it confirms a bug. In cases where neither can be proved, human intervention is required. We evaluate our method on realistic backend systems and find that it can formally verify over 50% of the test requirements, which suggests that half of a testing engineer's workload can be automated. Additionally, with an average cost of only $2.19 per API, LLM-based verification is significantly more cost-effective than manual testing and can be scaled easily through parallel execution. Our results indicate a promising direction for scalable, AI-powered software testing, with the potential to greatly improve engineering productivity as models continue to advance.
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