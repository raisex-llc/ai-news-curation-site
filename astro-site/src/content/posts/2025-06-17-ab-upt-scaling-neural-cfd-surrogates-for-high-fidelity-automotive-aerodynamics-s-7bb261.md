---
title: 'AB-UPT: Scaling Neural CFD Surrogates for High-Fidelity Automotive Aerodynamics
  Simulations via Anchored-Branched Universal Physics Transformers'
description: "arXiv:2502.09692v2 Announce Type: replace-cross \nAbstract: Recent advances\
  \ in neural surrogate modeling offer the potential for transformative innovations\
  \ in applications such as automotive aerodynamics. Yet, industrial-scale problems\
  \ often involve volumetric meshes with cell counts reaching the 100 millions, presenting\
  \ major scalability challenges. Complex geometries further complicate modeling through\
  \ intricate surface-volume interactions, while quantities such as vorticity are\
  \ highly nonlinear and must satisfy strict divergence-free constraints. To address\
  \ these requirements, we introduce AB-UPT as a novel modeling scheme for building\
  \ neural surrogates for CFD simulations. AB-UPT is designed to: (i) decouple geometry\
  \ encoding and prediction tasks via multi-branch operators; (ii) enable scalability\
  \ to high-resolution outputs via neural simulation in a low-dimensional latent space,\
  \ coupled with anchored neural field decoders to predict high-fidelity outputs;\
  \ (iii) enforce physics consistency by a novel divergence-free formulation. We show\
  \ that AB-UPT yields state-of-the-art predictive accuracy of surface and volume\
  \ fields on automotive CFD simulations ranging from 33 thousand up to 150 million\
  \ mesh cells. Furthermore, our anchored neural field architecture enables the enforcement\
  \ of hard physical constraints on the physics predictions without degradation in\
  \ performance, exemplified by modeling divergence-free vorticity fields. Notably,\
  \ the proposed models can be trained on a single GPU in less than a day and predict\
  \ industry-standard surface and volume fields within seconds. Additionally, we show\
  \ that the flexible design of our method enables neural simulation from a CAD geometry\
  \ alone, omitting the need for costly CFD meshing procedures."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2502.09692
---

Computer Science > Machine Learning
[Submitted on 13 Feb 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:AB-UPT: Scaling Neural CFD Surrogates for High-Fidelity Automotive Aerodynamics Simulations via Anchored-Branched Universal Physics Transformers
View PDF HTML (experimental)Abstract:Recent advances in neural surrogate modeling offer the potential for transformative innovations in applications such as automotive aerodynamics. Yet, industrial-scale problems often involve volumetric meshes with cell counts reaching the 100 millions, presenting major scalability challenges. Complex geometries further complicate modeling through intricate surface-volume interactions, while quantities such as vorticity are highly nonlinear and must satisfy strict divergence-free constraints. To address these requirements, we introduce AB-UPT as a novel modeling scheme for building neural surrogates for CFD simulations. AB-UPT is designed to: (i) decouple geometry encoding and prediction tasks via multi-branch operators; (ii) enable scalability to high-resolution outputs via neural simulation in a low-dimensional latent space, coupled with anchored neural field decoders to predict high-fidelity outputs; (iii) enforce physics consistency by a novel divergence-free formulation. We show that AB-UPT yields state-of-the-art predictive accuracy of surface and volume fields on automotive CFD simulations ranging from 33 thousand up to 150 million mesh cells. Furthermore, our anchored neural field architecture enables the enforcement of hard physical constraints on the physics predictions without degradation in performance, exemplified by modeling divergence-free vorticity fields. Notably, the proposed models can be trained on a single GPU in less than a day and predict industry-standard surface and volume fields within seconds. Additionally, we show that the flexible design of our method enables neural simulation from a CAD geometry alone, omitting the need for costly CFD meshing procedures.
Submission history
From: Benedikt Alkin [view email][v1] Thu, 13 Feb 2025 17:58:07 UTC (11,432 KB)
[v2] Fri, 13 Jun 2025 15:49:13 UTC (2,728 KB)
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