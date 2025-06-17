---
title: 'DiffTORI: Differentiable Trajectory Optimization for Deep Reinforcement and
  Imitation Learning'
description: "arXiv:2402.05421v5 Announce Type: replace-cross \nAbstract: This paper\
  \ introduces DiffTORI, which utilizes Differentiable Trajectory Optimization as\
  \ the policy representation to generate actions for deep Reinforcement and Imitation\
  \ learning. Trajectory optimization is a powerful and widely used algorithm in control,\
  \ parameterized by a cost and a dynamics function. The key to our approach is to\
  \ leverage the recent progress in differentiable trajectory optimization, which\
  \ enables computing the gradients of the loss with respect to the parameters of\
  \ trajectory optimization. As a result, the cost and dynamics functions of trajectory\
  \ optimization can be learned end-to-end. DiffTORI addresses the ``objective mismatch''\
  \ issue of prior model-based RL algorithms, as the dynamics model in DiffTORI is\
  \ learned to directly maximize task performance by differentiating the policy gradient\
  \ loss through the trajectory optimization process. We further benchmark DiffTORI\
  \ for imitation learning on standard robotic manipulation task suites with high-dimensional\
  \ sensory observations and compare our method to feed-forward policy classes as\
  \ well as Energy-Based Models (EBM) and Diffusion. Across 15 model-based RL tasks\
  \ and 35 imitation learning tasks with high-dimensional image and point cloud inputs,\
  \ DiffTORI outperforms prior state-of-the-art methods in both domains. Our code\
  \ is available at https://github.com/wkwan7/DiffTORI."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2402.05421
---

Computer Science > Machine Learning
[Submitted on 8 Feb 2024 (v1), last revised 13 Jun 2025 (this version, v5)]
Title:DiffTORI: Differentiable Trajectory Optimization for Deep Reinforcement and Imitation Learning
View PDFAbstract:This paper introduces DiffTORI, which utilizes Differentiable Trajectory Optimization as the policy representation to generate actions for deep Reinforcement and Imitation learning. Trajectory optimization is a powerful and widely used algorithm in control, parameterized by a cost and a dynamics function. The key to our approach is to leverage the recent progress in differentiable trajectory optimization, which enables computing the gradients of the loss with respect to the parameters of trajectory optimization. As a result, the cost and dynamics functions of trajectory optimization can be learned end-to-end. DiffTORI addresses the ``objective mismatch'' issue of prior model-based RL algorithms, as the dynamics model in DiffTORI is learned to directly maximize task performance by differentiating the policy gradient loss through the trajectory optimization process. We further benchmark DiffTORI for imitation learning on standard robotic manipulation task suites with high-dimensional sensory observations and compare our method to feed-forward policy classes as well as Energy-Based Models (EBM) and Diffusion. Across 15 model-based RL tasks and 35 imitation learning tasks with high-dimensional image and point cloud inputs, DiffTORI outperforms prior state-of-the-art methods in both domains. Our code is available at this https URL.
Submission history
From: Yufei Wang [view email][v1] Thu, 8 Feb 2024 05:26:40 UTC (7,566 KB)
[v2] Fri, 21 Jun 2024 04:46:15 UTC (13,400 KB)
[v3] Thu, 31 Oct 2024 04:53:19 UTC (12,734 KB)
[v4] Mon, 3 Mar 2025 22:40:19 UTC (12,734 KB)
[v5] Fri, 13 Jun 2025 04:41:59 UTC (9,710 KB)
Current browse context:
cs.LG
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