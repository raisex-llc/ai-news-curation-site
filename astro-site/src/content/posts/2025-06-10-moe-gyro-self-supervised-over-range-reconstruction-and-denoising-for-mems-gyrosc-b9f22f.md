---
title: 'MoE-Gyro: Self-Supervised Over-Range Reconstruction and Denoising for MEMS
  Gyroscopes'
description: "arXiv:2506.06318v1 Announce Type: cross \nAbstract: MEMS gyroscopes\
  \ play a critical role in inertial navigation and motion control applications but\
  \ typically suffer from a fundamental trade-off between measurement range and noise\
  \ performance. Existing hardware-based solutions aimed at mitigating this issue\
  \ introduce additional complexity, cost, and scalability challenges. Deep-learning\
  \ methods primarily focus on noise reduction and typically require precisely aligned\
  \ ground-truth signals, making them difficult to deploy in practical scenarios and\
  \ leaving the fundamental trade-off unresolved. To address these challenges, we\
  \ introduce Mixture of Experts for MEMS Gyroscopes (MoE-Gyro), a novel self-supervised\
  \ framework specifically designed for simultaneous over-range signal reconstruction\
  \ and noise suppression. MoE-Gyro employs two experts: an Over-Range Reconstruction\
  \ Expert (ORE), featuring a Gaussian-Decay Attention mechanism for reconstructing\
  \ saturated segments; and a Denoise Expert (DE), utilizing dual-branch complementary\
  \ masking combined with FFT-guided augmentation for robust noise reduction. A lightweight\
  \ gating module dynamically routes input segments to the appropriate expert. Furthermore,\
  \ existing evaluation lack a comprehensive standard for assessing multi-dimensional\
  \ signal enhancement. To bridge this gap, we introduce IMU Signal Enhancement Benchmark\
  \ (ISEBench), an open-source benchmarking platform comprising the GyroPeak-100 dataset\
  \ and a unified evaluation of IMU signal enhancement methods. We evaluate MoE-Gyro\
  \ using our proposed ISEBench, demonstrating that our framework significantly extends\
  \ the measurable range from 450 deg/s to 1500 deg/s, reduces Bias Instability by\
  \ 98.4%, and achieves state-of-the-art performance, effectively addressing the long-standing\
  \ trade-off in inertial sensing."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06318
---

Electrical Engineering and Systems Science > Signal Processing
[Submitted on 27 May 2025]
Title:MoE-Gyro: Self-Supervised Over-Range Reconstruction and Denoising for MEMS Gyroscopes
View PDF HTML (experimental)Abstract:MEMS gyroscopes play a critical role in inertial navigation and motion control applications but typically suffer from a fundamental trade-off between measurement range and noise performance. Existing hardware-based solutions aimed at mitigating this issue introduce additional complexity, cost, and scalability challenges. Deep-learning methods primarily focus on noise reduction and typically require precisely aligned ground-truth signals, making them difficult to deploy in practical scenarios and leaving the fundamental trade-off unresolved. To address these challenges, we introduce Mixture of Experts for MEMS Gyroscopes (MoE-Gyro), a novel self-supervised framework specifically designed for simultaneous over-range signal reconstruction and noise suppression. MoE-Gyro employs two experts: an Over-Range Reconstruction Expert (ORE), featuring a Gaussian-Decay Attention mechanism for reconstructing saturated segments; and a Denoise Expert (DE), utilizing dual-branch complementary masking combined with FFT-guided augmentation for robust noise reduction. A lightweight gating module dynamically routes input segments to the appropriate expert. Furthermore, existing evaluation lack a comprehensive standard for assessing multi-dimensional signal enhancement. To bridge this gap, we introduce IMU Signal Enhancement Benchmark (ISEBench), an open-source benchmarking platform comprising the GyroPeak-100 dataset and a unified evaluation of IMU signal enhancement methods. We evaluate MoE-Gyro using our proposed ISEBench, demonstrating that our framework significantly extends the measurable range from 450 deg/s to 1500 deg/s, reduces Bias Instability by 98.4%, and achieves state-of-the-art performance, effectively addressing the long-standing trade-off in inertial sensing.
Current browse context:
eess.SP
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