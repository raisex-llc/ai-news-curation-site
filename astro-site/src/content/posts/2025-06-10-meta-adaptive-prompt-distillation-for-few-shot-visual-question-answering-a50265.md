---
title: Meta-Adaptive Prompt Distillation for Few-Shot Visual Question Answering
description: "arXiv:2506.06905v1 Announce Type: new \nAbstract: Large Multimodal Models\
  \ (LMMs) often rely on in-context learning (ICL) to perform new tasks with minimal\
  \ supervision. However, ICL performance, especially in smaller LMMs, is inconsistent\
  \ and does not always improve monotonically with increasing examples. We hypothesize\
  \ that this occurs due to the LMM being overwhelmed by additional information present\
  \ in the image embeddings, which is not required for the downstream task. To address\
  \ this, we propose a meta-learning approach that provides an alternative for inducing\
  \ few-shot capabilities in LMMs, using a fixed set of soft prompts that are distilled\
  \ from task-relevant image features and can be adapted at test time using a few\
  \ examples. To facilitate this distillation, we introduce an attention-mapper module\
  \ that can be easily integrated with the popular LLaVA v1.5 architecture and is\
  \ jointly learned with soft prompts, enabling task adaptation in LMMs under low-data\
  \ regimes with just a few gradient steps. Evaluation on the VL-ICL Bench shows that\
  \ our method consistently outperforms ICL and related prompt-tuning approaches,\
  \ even under image perturbations, improving task induction and reasoning across\
  \ visual question answering tasks."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06905
---

Computer Science > Artificial Intelligence
[Submitted on 7 Jun 2025]
Title:Meta-Adaptive Prompt Distillation for Few-Shot Visual Question Answering
View PDF HTML (experimental)Abstract:Large Multimodal Models (LMMs) often rely on in-context learning (ICL) to perform new tasks with minimal supervision. However, ICL performance, especially in smaller LMMs, is inconsistent and does not always improve monotonically with increasing examples. We hypothesize that this occurs due to the LMM being overwhelmed by additional information present in the image embeddings, which is not required for the downstream task. To address this, we propose a meta-learning approach that provides an alternative for inducing few-shot capabilities in LMMs, using a fixed set of soft prompts that are distilled from task-relevant image features and can be adapted at test time using a few examples. To facilitate this distillation, we introduce an attention-mapper module that can be easily integrated with the popular LLaVA v1.5 architecture and is jointly learned with soft prompts, enabling task adaptation in LMMs under low-data regimes with just a few gradient steps. Evaluation on the VL-ICL Bench shows that our method consistently outperforms ICL and related prompt-tuning approaches, even under image perturbations, improving task induction and reasoning across visual question answering tasks.
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