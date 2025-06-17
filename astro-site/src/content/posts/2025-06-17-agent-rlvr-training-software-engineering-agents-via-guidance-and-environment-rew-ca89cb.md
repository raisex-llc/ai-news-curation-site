---
title: 'Agent-RLVR: Training Software Engineering Agents via Guidance and Environment
  Rewards'
description: "arXiv:2506.11425v1 Announce Type: cross \nAbstract: Reinforcement Learning\
  \ from Verifiable Rewards (RLVR) has been widely adopted as the de facto method\
  \ for enhancing the reasoning capabilities of large language models and has demonstrated\
  \ notable success in verifiable domains like math and competitive programming tasks.\
  \ However, the efficacy of RLVR diminishes significantly when applied to agentic\
  \ environments. These settings, characterized by multi-step, complex problem solving,\
  \ lead to high failure rates even for frontier LLMs, as the reward landscape is\
  \ too sparse for effective model training via conventional RLVR. In this work, we\
  \ introduce Agent-RLVR, a framework that makes RLVR effective in challenging agentic\
  \ settings, with an initial focus on software engineering tasks. Inspired by human\
  \ pedagogy, Agent-RLVR introduces agent guidance, a mechanism that actively steers\
  \ the agent towards successful trajectories by leveraging diverse informational\
  \ cues. These cues, ranging from high-level strategic plans to dynamic feedback\
  \ on the agent's errors and environmental interactions, emulate a teacher's guidance,\
  \ enabling the agent to navigate difficult solution spaces and promotes active self-improvement\
  \ via additional environment exploration. In the Agent-RLVR training loop, agents\
  \ first attempt to solve tasks to produce initial trajectories, which are then validated\
  \ by unit tests and supplemented with agent guidance. Agents then reattempt with\
  \ guidance, and the agent policy is updated with RLVR based on the rewards of these\
  \ guided trajectories. Agent-RLVR elevates the pass@1 performance of Qwen-2.5-72B-Instruct\
  \ from 9.4% to 22.4% on SWE-Bench Verified. We find that our guidance-augmented\
  \ RLVR data is additionally useful for test-time reward model training, shown by\
  \ further boosting pass@1 to 27.8%. Agent-RLVR lays the groundwork for training\
  \ agents with RLVR in complex, real-world environments where conventional RL methods\
  \ struggle."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11425
---

Computer Science > Computation and Language
[Submitted on 13 Jun 2025]
Title:Agent-RLVR: Training Software Engineering Agents via Guidance and Environment Rewards
View PDF HTML (experimental)Abstract:Reinforcement Learning from Verifiable Rewards (RLVR) has been widely adopted as the de facto method for enhancing the reasoning capabilities of large language models and has demonstrated notable success in verifiable domains like math and competitive programming tasks. However, the efficacy of RLVR diminishes significantly when applied to agentic environments. These settings, characterized by multi-step, complex problem solving, lead to high failure rates even for frontier LLMs, as the reward landscape is too sparse for effective model training via conventional RLVR. In this work, we introduce Agent-RLVR, a framework that makes RLVR effective in challenging agentic settings, with an initial focus on software engineering tasks. Inspired by human pedagogy, Agent-RLVR introduces agent guidance, a mechanism that actively steers the agent towards successful trajectories by leveraging diverse informational cues. These cues, ranging from high-level strategic plans to dynamic feedback on the agent's errors and environmental interactions, emulate a teacher's guidance, enabling the agent to navigate difficult solution spaces and promotes active self-improvement via additional environment exploration. In the Agent-RLVR training loop, agents first attempt to solve tasks to produce initial trajectories, which are then validated by unit tests and supplemented with agent guidance. Agents then reattempt with guidance, and the agent policy is updated with RLVR based on the rewards of these guided trajectories. Agent-RLVR elevates the pass@1 performance of Qwen-2.5-72B-Instruct from 9.4% to 22.4% on SWE-Bench Verified. We find that our guidance-augmented RLVR data is additionally useful for test-time reward model training, shown by further boosting pass@1 to 27.8%. Agent-RLVR lays the groundwork for training agents with RLVR in complex, real-world environments where conventional RL methods struggle.
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