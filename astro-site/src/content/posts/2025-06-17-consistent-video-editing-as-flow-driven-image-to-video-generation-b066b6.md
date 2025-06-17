---
title: Consistent Video Editing as Flow-Driven Image-to-Video Generation
description: "arXiv:2506.07713v2 Announce Type: replace-cross \nAbstract: With the\
  \ prosper of video diffusion models, down-stream applications like video editing\
  \ have been significantly promoted without consuming much computational cost. One\
  \ particular challenge in this task lies at the motion transfer process from the\
  \ source video to the edited one, where it requires the consideration of the shape\
  \ deformation in between, meanwhile maintaining the temporal consistency in the\
  \ generated video sequence. However, existing methods fail to model complicated\
  \ motion patterns for video editing, and are fundamentally limited to object replacement,\
  \ where tasks with non-rigid object motions like multi-object and portrait editing\
  \ are largely neglected. In this paper, we observe that optical flows offer a promising\
  \ alternative in complex motion modeling, and present FlowV2V to re-investigate\
  \ video editing as a task of flow-driven Image-to-Video (I2V) generation. Specifically,\
  \ FlowV2V decomposes the entire pipeline into first-frame editing and conditional\
  \ I2V generation, and simulates pseudo flow sequence that aligns with the deformed\
  \ shape, thus ensuring the consistency during editing. Experimental results on DAVIS-EDIT\
  \ with improvements of 13.67% and 50.66% on DOVER and warping error illustrate the\
  \ superior temporal consistency and sample quality of FlowV2V compared to existing\
  \ state-of-the-art ones. Furthermore, we conduct comprehensive ablation studies\
  \ to analyze the internal functionalities of the first-frame paradigm and flow alignment\
  \ in the proposed method."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.07713
---

Computer Science > Computer Vision and Pattern Recognition
[Submitted on 9 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Consistent Video Editing as Flow-Driven Image-to-Video Generation
View PDF HTML (experimental)Abstract:With the prosper of video diffusion models, down-stream applications like video editing have been significantly promoted without consuming much computational cost. One particular challenge in this task lies at the motion transfer process from the source video to the edited one, where it requires the consideration of the shape deformation in between, meanwhile maintaining the temporal consistency in the generated video sequence. However, existing methods fail to model complicated motion patterns for video editing, and are fundamentally limited to object replacement, where tasks with non-rigid object motions like multi-object and portrait editing are largely neglected. In this paper, we observe that optical flows offer a promising alternative in complex motion modeling, and present FlowV2V to re-investigate video editing as a task of flow-driven Image-to-Video (I2V) generation. Specifically, FlowV2V decomposes the entire pipeline into first-frame editing and conditional I2V generation, and simulates pseudo flow sequence that aligns with the deformed shape, thus ensuring the consistency during editing. Experimental results on DAVIS-EDIT with improvements of 13.67% and 50.66% on DOVER and warping error illustrate the superior temporal consistency and sample quality of FlowV2V compared to existing state-of-the-art ones. Furthermore, we conduct comprehensive ablation studies to analyze the internal functionalities of the first-frame paradigm and flow alignment in the proposed method.
Submission history
From: Ge Wang [view email][v1] Mon, 9 Jun 2025 12:57:30 UTC (40,946 KB)
[v2] Fri, 13 Jun 2025 09:10:58 UTC (40,946 KB)
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