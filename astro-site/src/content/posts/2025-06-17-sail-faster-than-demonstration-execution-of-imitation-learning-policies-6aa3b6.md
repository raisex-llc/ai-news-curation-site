---
title: 'SAIL: Faster-than-Demonstration Execution of Imitation Learning Policies'
description: "arXiv:2506.11948v1 Announce Type: cross \nAbstract: Offline Imitation\
  \ Learning (IL) methods such as Behavior Cloning are effective at acquiring complex\
  \ robotic manipulation skills. However, existing IL-trained policies are confined\
  \ to executing the task at the same speed as shown in demonstration data. This limits\
  \ the task throughput of a robotic system, a critical requirement for applications\
  \ such as industrial automation. In this paper, we introduce and formalize the novel\
  \ problem of enabling faster-than-demonstration execution of visuomotor policies\
  \ and identify fundamental challenges in robot dynamics and state-action distribution\
  \ shifts. We instantiate the key insights as SAIL (Speed Adaptation for Imitation\
  \ Learning), a full-stack system integrating four tightly-connected components:\
  \ (1) a consistency-preserving action inference algorithm for smooth motion at high\
  \ speed, (2) high-fidelity tracking of controller-invariant motion targets, (3)\
  \ adaptive speed modulation that dynamically adjusts execution speed based on motion\
  \ complexity, and (4) action scheduling to handle real-world system latencies. Experiments\
  \ on 12 tasks across simulation and two real, distinct robot platforms show that\
  \ SAIL achieves up to a 4x speedup over demonstration speed in simulation and up\
  \ to 3.2x speedup in the real world. Additional detail is available at https://nadunranawaka1.github.io/sail-policy"
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11948
---

Computer Science > Robotics
[Submitted on 13 Jun 2025]
Title:SAIL: Faster-than-Demonstration Execution of Imitation Learning Policies
View PDFAbstract:Offline Imitation Learning (IL) methods such as Behavior Cloning are effective at acquiring complex robotic manipulation skills. However, existing IL-trained policies are confined to executing the task at the same speed as shown in demonstration data. This limits the task throughput of a robotic system, a critical requirement for applications such as industrial automation. In this paper, we introduce and formalize the novel problem of enabling faster-than-demonstration execution of visuomotor policies and identify fundamental challenges in robot dynamics and state-action distribution shifts. We instantiate the key insights as SAIL (Speed Adaptation for Imitation Learning), a full-stack system integrating four tightly-connected components: (1) a consistency-preserving action inference algorithm for smooth motion at high speed, (2) high-fidelity tracking of controller-invariant motion targets, (3) adaptive speed modulation that dynamically adjusts execution speed based on motion complexity, and (4) action scheduling to handle real-world system latencies. Experiments on 12 tasks across simulation and two real, distinct robot platforms show that SAIL achieves up to a 4x speedup over demonstration speed in simulation and up to 3.2x speedup in the real world. Additional detail is available at this https URL
Submission history
From: Nadun Ranawaka Arachchige [view email][v1] Fri, 13 Jun 2025 16:58:20 UTC (4,538 KB)
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