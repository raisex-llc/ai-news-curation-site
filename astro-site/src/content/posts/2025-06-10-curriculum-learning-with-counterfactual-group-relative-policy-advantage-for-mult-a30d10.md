---
title: Curriculum Learning With Counterfactual Group Relative Policy Advantage For
  Multi-Agent Reinforcement Learning
description: "arXiv:2506.07548v1 Announce Type: new \nAbstract: Multi-agent reinforcement\
  \ learning (MARL) has achieved strong performance in cooperative adversarial tasks.\
  \ However, most existing methods typically train agents against fixed opponent strategies\
  \ and rely on such meta-static difficulty conditions, which limits their adaptability\
  \ to changing environments and often leads to suboptimal policies. Inspired by the\
  \ success of curriculum learning (CL) in supervised tasks, we propose a dynamic\
  \ CL framework for MARL that employs an self-adaptive difficulty adjustment mechanism.\
  \ This mechanism continuously modulates opponent strength based on real-time agent\
  \ training performance, allowing agents to progressively learn from easier to more\
  \ challenging scenarios. However, the dynamic nature of CL introduces instability\
  \ due to nonstationary environments and sparse global rewards. To address this challenge,\
  \ we develop a Counterfactual Group Relative Policy Advantage (CGRPA), which is\
  \ tightly coupled with the curriculum by providing intrinsic credit signals that\
  \ reflect each agent's impact under evolving task demands. CGRPA constructs a counterfactual\
  \ advantage function that isolates individual contributions within group behavior,\
  \ facilitating more reliable policy updates throughout the curriculum. CGRPA evaluates\
  \ each agent's contribution through constructing counterfactual action advantage\
  \ function, providing intrinsic rewards that enhance credit assignment and stabilize\
  \ learning under non-stationary conditions. Extensive experiments demonstrate that\
  \ our method improves both training stability and final performance, achieving competitive\
  \ results against state-of-the-art methods. The code is available at https://github.com/NICE-HKU/CL2MARL-SMAC."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.07548
---

Computer Science > Artificial Intelligence
[Submitted on 9 Jun 2025]
Title:Curriculum Learning With Counterfactual Group Relative Policy Advantage For Multi-Agent Reinforcement Learning
View PDF HTML (experimental)Abstract:Multi-agent reinforcement learning (MARL) has achieved strong performance in cooperative adversarial tasks. However, most existing methods typically train agents against fixed opponent strategies and rely on such meta-static difficulty conditions, which limits their adaptability to changing environments and often leads to suboptimal policies. Inspired by the success of curriculum learning (CL) in supervised tasks, we propose a dynamic CL framework for MARL that employs an self-adaptive difficulty adjustment mechanism. This mechanism continuously modulates opponent strength based on real-time agent training performance, allowing agents to progressively learn from easier to more challenging scenarios. However, the dynamic nature of CL introduces instability due to nonstationary environments and sparse global rewards. To address this challenge, we develop a Counterfactual Group Relative Policy Advantage (CGRPA), which is tightly coupled with the curriculum by providing intrinsic credit signals that reflect each agent's impact under evolving task demands. CGRPA constructs a counterfactual advantage function that isolates individual contributions within group behavior, facilitating more reliable policy updates throughout the curriculum. CGRPA evaluates each agent's contribution through constructing counterfactual action advantage function, providing intrinsic rewards that enhance credit assignment and stabilize learning under non-stationary conditions. Extensive experiments demonstrate that our method improves both training stability and final performance, achieving competitive results against state-of-the-art methods. The code is available at this https URL.
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