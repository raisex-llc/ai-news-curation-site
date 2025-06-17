---
title: 'Reasoning Multimodal Large Language Model: Data Contamination and Dynamic
  Evaluation'
description: "arXiv:2506.07202v1 Announce Type: new \nAbstract: Multimodal Large Language\
  \ Models (MLLMs) show impressive vision-language benchmark performance, yet growing\
  \ concerns about data contamination (test set exposure during training) risk masking\
  \ true generalization. This concern extends to reasoning MLLMs, often fine-tuned\
  \ via reinforcement learning from potentially contaminated base models. We propose\
  \ a novel dynamic evaluation framework to rigorously assess MLLM generalization,\
  \ moving beyond static benchmarks. Instead of perturbing inputs, we perturb the\
  \ task itself. Using the same visual input, models are evaluated across a family\
  \ of tasks (e.g., QA, captioning, question posing, verification) to probe diverse\
  \ capabilities. This task perturbation reveals whether model performance is robust\
  \ or reliant on superficial task-specific cues. Our approach is analogous to loss\
  \ landscape sharpness: models overfit or contaminated for a single task (sharp minima)\
  \ falter under task shifts, unlike models with generalizable solutions (flatter\
  \ minima). We developed an automated pipeline with a calibrated judge scoring open-ended\
  \ generations (captions, questions) using paraphrase and corruption sampling. Applying\
  \ this framework to leading image/video MLLMs on benchmarks including MME, RealWorldQA,\
  \ and CVRR-ES, we analyze each model's cross-task \"ability vector.\" We demonstrate\
  \ that fine-tuning on simulated test data (extreme contamination) drastically sharpens\
  \ task-specific performance but harms overall generalization. Our dynamic task perturbation\
  \ offers deeper insights into MLLM generalization, distinguishing genuine understanding\
  \ from spurious leakage or overfitting."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.07202
---

Computer Science > Artificial Intelligence
[Submitted on 8 Jun 2025]
Title:Reasoning Multimodal Large Language Model: Data Contamination and Dynamic Evaluation
View PDF HTML (experimental)Abstract:Multimodal Large Language Models (MLLMs) show impressive vision-language benchmark performance, yet growing concerns about data contamination (test set exposure during training) risk masking true generalization. This concern extends to reasoning MLLMs, often fine-tuned via reinforcement learning from potentially contaminated base models. We propose a novel dynamic evaluation framework to rigorously assess MLLM generalization, moving beyond static benchmarks. Instead of perturbing inputs, we perturb the task itself. Using the same visual input, models are evaluated across a family of tasks (e.g., QA, captioning, question posing, verification) to probe diverse capabilities. This task perturbation reveals whether model performance is robust or reliant on superficial task-specific cues. Our approach is analogous to loss landscape sharpness: models overfit or contaminated for a single task (sharp minima) falter under task shifts, unlike models with generalizable solutions (flatter minima). We developed an automated pipeline with a calibrated judge scoring open-ended generations (captions, questions) using paraphrase and corruption sampling. Applying this framework to leading image/video MLLMs on benchmarks including MME, RealWorldQA, and CVRR-ES, we analyze each model's cross-task "ability vector." We demonstrate that fine-tuning on simulated test data (extreme contamination) drastically sharpens task-specific performance but harms overall generalization. Our dynamic task perturbation offers deeper insights into MLLM generalization, distinguishing genuine understanding from spurious leakage or overfitting.
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