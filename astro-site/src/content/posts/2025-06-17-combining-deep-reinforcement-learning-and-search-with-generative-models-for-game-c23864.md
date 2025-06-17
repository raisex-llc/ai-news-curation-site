---
title: Combining Deep Reinforcement Learning and Search with Generative Models for
  Game-Theoretic Opponent Modeling
description: "arXiv:2302.00797v2 Announce Type: replace \nAbstract: Opponent modeling\
  \ methods typically involve two crucial steps: building a belief distribution over\
  \ opponents' strategies, and exploiting this opponent model by playing a best response.\
  \ However, existing approaches typically require domain-specific heurstics to come\
  \ up with such a model, and algorithms for approximating best responses are hard\
  \ to scale in large, imperfect information domains.\n  In this work, we introduce\
  \ a scalable and generic multiagent training regime for opponent modeling using\
  \ deep game-theoretic reinforcement learning. We first propose Generative Best Respoonse\
  \ (GenBR), a best response algorithm based on Monte-Carlo Tree Search (MCTS) with\
  \ a learned deep generative model that samples world states during planning. This\
  \ new method scales to large imperfect information domains and can be plug and play\
  \ in a variety of multiagent algorithms. We use this new method under the framework\
  \ of Policy Space Response Oracles (PSRO), to automate the generation of an \\emph{offline\
  \ opponent model} via iterative game-theoretic reasoning and population-based training.\
  \ We propose using solution concepts based on bargaining theory to build up an opponent\
  \ mixture, which we find identifying profiles that are near the Pareto frontier.\
  \ Then GenBR keeps updating an \\emph{online opponent model} and reacts against\
  \ it during gameplay. We conduct behavioral studies where human participants negotiate\
  \ with our agents in Deal-or-No-Deal, a class of bilateral bargaining games. Search\
  \ with generative modeling finds stronger policies during both training time and\
  \ test time, enables online Bayesian co-player prediction, and can produce agents\
  \ that achieve comparable social welfare and Nash bargaining score negotiating with\
  \ humans as humans trading among themselves."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2302.00797
---

Computer Science > Artificial Intelligence
[Submitted on 1 Feb 2023 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Combining Deep Reinforcement Learning and Search with Generative Models for Game-Theoretic Opponent Modeling
View PDF HTML (experimental)Abstract:Opponent modeling methods typically involve two crucial steps: building a belief distribution over opponents' strategies, and exploiting this opponent model by playing a best response. However, existing approaches typically require domain-specific heurstics to come up with such a model, and algorithms for approximating best responses are hard to scale in large, imperfect information domains.
In this work, we introduce a scalable and generic multiagent training regime for opponent modeling using deep game-theoretic reinforcement learning. We first propose Generative Best Respoonse (GenBR), a best response algorithm based on Monte-Carlo Tree Search (MCTS) with a learned deep generative model that samples world states during planning. This new method scales to large imperfect information domains and can be plug and play in a variety of multiagent algorithms. We use this new method under the framework of Policy Space Response Oracles (PSRO), to automate the generation of an \emph{offline opponent model} via iterative game-theoretic reasoning and population-based training. We propose using solution concepts based on bargaining theory to build up an opponent mixture, which we find identifying profiles that are near the Pareto frontier. Then GenBR keeps updating an \emph{online opponent model} and reacts against it during gameplay. We conduct behavioral studies where human participants negotiate with our agents in Deal-or-No-Deal, a class of bilateral bargaining games. Search with generative modeling finds stronger policies during both training time and test time, enables online Bayesian co-player prediction, and can produce agents that achieve comparable social welfare and Nash bargaining score negotiating with humans as humans trading among themselves.
Submission history
From: Zun Li [view email][v1] Wed, 1 Feb 2023 23:06:23 UTC (5,545 KB)
[v2] Fri, 13 Jun 2025 15:38:03 UTC (1,908 KB)
Current browse context:
cs.AI
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