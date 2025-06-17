---
title: Debiasing Online Preference Learning via Preference Feature Preservation
description: "arXiv:2506.11098v1 Announce Type: cross \nAbstract: Recent preference\
  \ learning frameworks for large language models (LLMs) simplify human preferences\
  \ with binary pairwise comparisons and scalar rewards. This simplification could\
  \ make LLMs' responses biased to mostly preferred features, and would be exacerbated\
  \ during the iterations of online preference learning steps. To address these challenges,\
  \ we propose a novel framework coined PFP (Preference Feature Preservation). The\
  \ key idea of PFP is maintaining the distribution of human preference features and\
  \ utilizing such rich signals throughout the online preference learning process.\
  \ Specifically, PFP first extract preference features from offline pairwise human\
  \ preference data and trains a feature classifier. Then, using trained classifier\
  \ and the distribution preserving optimization, PFP maps appropriate preference\
  \ features for a new input instruction during online learning. Lastly, PFP trains\
  \ LLM using the existing preference learning method, by incorporating the preference\
  \ feature into system prompts and enabling LLM to explicitly handle various human\
  \ preferences. Our experiments demonstrate that PFP successfully mitigates the bias\
  \ in preference features during online learning, and hence achieves superior performance\
  \ compared to previous preference learning methods on standard benchmarks to evaluate\
  \ LLM alignment."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11098
---

Computer Science > Machine Learning
[Submitted on 6 Jun 2025]
Title:Debiasing Online Preference Learning via Preference Feature Preservation
View PDF HTML (experimental)Abstract:Recent preference learning frameworks for large language models (LLMs) simplify human preferences with binary pairwise comparisons and scalar rewards. This simplification could make LLMs' responses biased to mostly preferred features, and would be exacerbated during the iterations of online preference learning steps. To address these challenges, we propose a novel framework coined PFP (Preference Feature Preservation). The key idea of PFP is maintaining the distribution of human preference features and utilizing such rich signals throughout the online preference learning process. Specifically, PFP first extract preference features from offline pairwise human preference data and trains a feature classifier. Then, using trained classifier and the distribution preserving optimization, PFP maps appropriate preference features for a new input instruction during online learning. Lastly, PFP trains LLM using the existing preference learning method, by incorporating the preference feature into system prompts and enabling LLM to explicitly handle various human preferences. Our experiments demonstrate that PFP successfully mitigates the bias in preference features during online learning, and hence achieves superior performance compared to previous preference learning methods on standard benchmarks to evaluate LLM alignment.
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