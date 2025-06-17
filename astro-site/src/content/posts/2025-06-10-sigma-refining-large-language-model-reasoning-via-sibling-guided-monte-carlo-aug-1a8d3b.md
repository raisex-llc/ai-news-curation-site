---
title: 'SIGMA: Refining Large Language Model Reasoning via Sibling-Guided Monte Carlo
  Augmentation'
description: "arXiv:2506.06470v1 Announce Type: new \nAbstract: Enhancing large language\
  \ models by simply scaling up datasets has begun to yield diminishing returns, shifting\
  \ the spotlight to data quality. Monte Carlo Tree Search (MCTS) has emerged as a\
  \ powerful technique for generating high-quality chain-of-thought data, yet conventional\
  \ approaches typically retain only the top-scoring trajectory from the search tree,\
  \ discarding sibling nodes that often contain valuable partial insights, recurrent\
  \ error patterns, and alternative reasoning strategies. This unconditional rejection\
  \ of non-optimal reasoning branches may waste vast amounts of informative data in\
  \ the whole search tree. We propose SIGMA (Sibling Guided Monte Carlo Augmentation),\
  \ a novel framework that reintegrates these discarded sibling nodes to refine LLM\
  \ reasoning. SIGMA forges semantic links among sibling nodes along each search path\
  \ and applies a two-stage refinement: a critique model identifies overlooked strengths\
  \ and weaknesses across the sibling set, and a revision model conducts text-based\
  \ backpropagation to refine the top-scoring trajectory in light of this comparative\
  \ feedback. By recovering and amplifying the underutilized but valuable signals\
  \ from non-optimal reasoning branches, SIGMA substantially improves reasoning trajectories.\
  \ On the challenging MATH benchmark, our SIGMA-tuned 7B model achieves 54.92% accuracy\
  \ using only 30K samples, outperforming state-of-the-art models trained on 590K\
  \ samples. This result highlights that our sibling-guided optimization not only\
  \ significantly reduces data usage but also significantly boosts LLM reasoning."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06470
---

Computer Science > Artificial Intelligence
[Submitted on 6 Jun 2025]
Title:SIGMA: Refining Large Language Model Reasoning via Sibling-Guided Monte Carlo Augmentation
View PDFAbstract:Enhancing large language models by simply scaling up datasets has begun to yield diminishing returns, shifting the spotlight to data quality. Monte Carlo Tree Search (MCTS) has emerged as a powerful technique for generating high-quality chain-of-thought data, yet conventional approaches typically retain only the top-scoring trajectory from the search tree, discarding sibling nodes that often contain valuable partial insights, recurrent error patterns, and alternative reasoning strategies. This unconditional rejection of non-optimal reasoning branches may waste vast amounts of informative data in the whole search tree. We propose SIGMA (Sibling Guided Monte Carlo Augmentation), a novel framework that reintegrates these discarded sibling nodes to refine LLM reasoning. SIGMA forges semantic links among sibling nodes along each search path and applies a two-stage refinement: a critique model identifies overlooked strengths and weaknesses across the sibling set, and a revision model conducts text-based backpropagation to refine the top-scoring trajectory in light of this comparative feedback. By recovering and amplifying the underutilized but valuable signals from non-optimal reasoning branches, SIGMA substantially improves reasoning trajectories. On the challenging MATH benchmark, our SIGMA-tuned 7B model achieves 54.92% accuracy using only 30K samples, outperforming state-of-the-art models trained on 590K samples. This result highlights that our sibling-guided optimization not only significantly reduces data usage but also significantly boosts LLM reasoning.
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