---
title: Boosting LLM Reasoning via Spontaneous Self-Correction
description: "arXiv:2506.06923v1 Announce Type: new \nAbstract: While large language\
  \ models (LLMs) have demonstrated remarkable success on a broad range of tasks,\
  \ math reasoning remains a challenging one. One of the approaches for improving\
  \ math reasoning is self-correction, which designs self-improving loops to let the\
  \ model correct its own mistakes. However, existing self-correction approaches treat\
  \ corrections as standalone post-generation refinements, relying on extra prompt\
  \ and system designs to elicit self-corrections, instead of performing real-time,\
  \ spontaneous self-corrections in a single pass. To address this, we propose SPOC,\
  \ a spontaneous self-correction approach that enables LLMs to generate interleaved\
  \ solutions and verifications in a single inference pass, with generation dynamically\
  \ terminated based on verification outcomes, thereby effectively scaling inference\
  \ time compute. SPOC considers a multi-agent perspective by assigning dual roles\
  \ -- solution proposer and verifier -- to the same model. We adopt a simple yet\
  \ effective approach to generate synthetic data for fine-tuning, enabling the model\
  \ to develop capabilities for self-verification and multi-agent collaboration. We\
  \ further improve its solution proposal and verification accuracy through online\
  \ reinforcement learning. Experiments on mathematical reasoning benchmarks show\
  \ that SPOC significantly improves performance. Notably, SPOC boosts the accuracy\
  \ of Llama-3.1-8B and 70B Instruct models, achieving gains of 8.8% and 11.6% on\
  \ MATH500, 10.0% and 20.0% on AMC23, and 3.3% and 6.7% on AIME24, respectively."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06923
---

Computer Science > Artificial Intelligence
[Submitted on 7 Jun 2025]
Title:Boosting LLM Reasoning via Spontaneous Self-Correction
View PDFAbstract:While large language models (LLMs) have demonstrated remarkable success on a broad range of tasks, math reasoning remains a challenging one. One of the approaches for improving math reasoning is self-correction, which designs self-improving loops to let the model correct its own mistakes. However, existing self-correction approaches treat corrections as standalone post-generation refinements, relying on extra prompt and system designs to elicit self-corrections, instead of performing real-time, spontaneous self-corrections in a single pass. To address this, we propose SPOC, a spontaneous self-correction approach that enables LLMs to generate interleaved solutions and verifications in a single inference pass, with generation dynamically terminated based on verification outcomes, thereby effectively scaling inference time compute. SPOC considers a multi-agent perspective by assigning dual roles -- solution proposer and verifier -- to the same model. We adopt a simple yet effective approach to generate synthetic data for fine-tuning, enabling the model to develop capabilities for self-verification and multi-agent collaboration. We further improve its solution proposal and verification accuracy through online reinforcement learning. Experiments on mathematical reasoning benchmarks show that SPOC significantly improves performance. Notably, SPOC boosts the accuracy of Llama-3.1-8B and 70B Instruct models, achieving gains of 8.8% and 11.6% on MATH500, 10.0% and 20.0% on AMC23, and 3.3% and 6.7% on AIME24, respectively.
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