---
title: Intra-Trajectory Consistency for Reward Modeling
description: "arXiv:2506.09096v2 Announce Type: replace-cross \nAbstract: Reward models\
  \ are critical for improving large language models (LLMs), particularly in reinforcement\
  \ learning from human feedback (RLHF) or inference-time verification. Current reward\
  \ modeling typically relies on scores of overall responses to learn the outcome\
  \ rewards for the responses. However, since the response-level scores are coarse-grained\
  \ supervision signals, the reward model struggles to identify the specific components\
  \ within a response trajectory that truly correlate with the scores, leading to\
  \ poor generalization on unseen responses. In this paper, we propose to leverage\
  \ generation probabilities to establish reward consistency between processes in\
  \ the response trajectory, which allows the response-level supervisory signal to\
  \ propagate across processes, thereby providing additional fine-grained signals\
  \ for reward learning. Building on analysis under the Bayesian framework, we develop\
  \ an intra-trajectory consistency regularization to enforce that adjacent processes\
  \ with higher next-token generation probability maintain more consistent rewards.\
  \ We apply the proposed regularization to the advanced outcome reward model, improving\
  \ its performance on RewardBench. Besides, we show that the reward model trained\
  \ with the proposed regularization induces better DPO-aligned policies and achieves\
  \ better best-of-N (BON) inference-time verification results. Our code is provided\
  \ in https://github.com/chaoyang101/ICRM."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.09096
---

Computer Science > Machine Learning
[Submitted on 10 Jun 2025 (v1), last revised 16 Jun 2025 (this version, v3)]
Title:Intra-Trajectory Consistency for Reward Modeling
View PDF HTML (experimental)Abstract:Reward models are critical for improving large language models (LLMs), particularly in reinforcement learning from human feedback (RLHF) or inference-time verification. Current reward modeling typically relies on scores of overall responses to learn the outcome rewards for the responses. However, since the response-level scores are coarse-grained supervision signals, the reward model struggles to identify the specific components within a response trajectory that truly correlate with the scores, leading to poor generalization on unseen responses. In this paper, we propose to leverage generation probabilities to establish reward consistency between processes in the response trajectory, which allows the response-level supervisory signal to propagate across processes, thereby providing additional fine-grained signals for reward learning. Building on analysis under the Bayesian framework, we develop an intra-trajectory consistency regularization to enforce that adjacent processes with higher next-token generation probability maintain more consistent rewards. We apply the proposed regularization to the advanced outcome reward model, improving its performance on RewardBench. Besides, we show that the reward model trained with the proposed regularization induces better DPO-aligned policies and achieves better best-of-N (BON) inference-time verification results. Our code is provided in this https URL.
Submission history
From: Chaoyang Zhou [view email][v1] Tue, 10 Jun 2025 12:59:14 UTC (130 KB)
[v2] Fri, 13 Jun 2025 11:11:52 UTC (130 KB)
[v3] Mon, 16 Jun 2025 04:03:11 UTC (127 KB)
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