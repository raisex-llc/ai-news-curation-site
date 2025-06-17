---
title: Denoising Programming Knowledge Tracing with a Code Graph-based Tuning Adaptor
description: "arXiv:2506.11107v1 Announce Type: cross \nAbstract: Programming Knowledge\
  \ Tracking (PKT) aims to dynamically diagnose learners' mastery levels of programming\
  \ knowledge based on their coding activities, facilitating more effective and personalized\
  \ programming education. However, current PKT studies primarily focus on the implicit\
  \ relationship between code content and knowledge assessment, often overlooking\
  \ two types of noise signals in long-term programming activities: unwanted signals\
  \ from unrelated submissions and weak signals from minor modifications. This practical\
  \ challenge significantly limits model performance and application. To address this\
  \ issue, we propose Coda, a Code graph-based tuning adaptor designed to enhance\
  \ existing PKT models by identifying and mitigating the impact of noise. Specifically,\
  \ Coda first transforms the loose code sequences submitted by each learner into\
  \ a compact code graph. By leveraging this code graph, unwanted signals can be identified\
  \ from a semantic similarity perspective. We then apply a cluster-aware GCN to the\
  \ code graph, which improves the discrimination of weak signals and enables their\
  \ clustering for identification. Finally, a lightweight yet effective adaptor is\
  \ incorporated into the PKT task through optimization with two noise feature-based\
  \ constraints and a navigational regularization term, to correct knowledge states\
  \ affected by noise. It is worth mentioning that the Coda framework is model-agnostic\
  \ and can be adapted to most existing PKT solutions. Extensive experimental results\
  \ on four real-world datasets demonstrate that Coda effectively performs the PKT\
  \ task in the presence of noisy programming records, outperforming typical baselines."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11107
---

Computer Science > Software Engineering
[Submitted on 7 Jun 2025]
Title:Denoising Programming Knowledge Tracing with a Code Graph-based Tuning Adaptor
View PDF HTML (experimental)Abstract:Programming Knowledge Tracking (PKT) aims to dynamically diagnose learners' mastery levels of programming knowledge based on their coding activities, facilitating more effective and personalized programming education. However, current PKT studies primarily focus on the implicit relationship between code content and knowledge assessment, often overlooking two types of noise signals in long-term programming activities: unwanted signals from unrelated submissions and weak signals from minor modifications. This practical challenge significantly limits model performance and application. To address this issue, we propose Coda, a Code graph-based tuning adaptor designed to enhance existing PKT models by identifying and mitigating the impact of noise. Specifically, Coda first transforms the loose code sequences submitted by each learner into a compact code graph. By leveraging this code graph, unwanted signals can be identified from a semantic similarity perspective. We then apply a cluster-aware GCN to the code graph, which improves the discrimination of weak signals and enables their clustering for identification. Finally, a lightweight yet effective adaptor is incorporated into the PKT task through optimization with two noise feature-based constraints and a navigational regularization term, to correct knowledge states affected by noise. It is worth mentioning that the Coda framework is model-agnostic and can be adapted to most existing PKT solutions. Extensive experimental results on four real-world datasets demonstrate that Coda effectively performs the PKT task in the presence of noisy programming records, outperforming typical baselines.
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