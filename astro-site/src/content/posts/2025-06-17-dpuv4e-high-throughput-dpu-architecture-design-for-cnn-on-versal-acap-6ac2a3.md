---
title: 'DPUV4E: High-Throughput DPU Architecture Design for CNN on Versal ACAP'
description: "arXiv:2506.11441v1 Announce Type: cross \nAbstract: Convolutional Neural\
  \ Networks (CNNs) remain prevalent in computer vision applications, and FPGAs, known\
  \ for their flexibility and energy efficiency, have become essential components\
  \ in heterogeneous acceleration systems. However, traditional FPGAs face challenges\
  \ in balancing performance and versatility due to limited on-chip resources. AMD's\
  \ Versal ACAP architecture, tailored for AI applications, incorporates AI Engines\
  \ (AIEs) to deliver high computational power. Nevertheless, the platform suffers\
  \ from insufficient memory bandwidth, hindering the full utilization of the AIEs'\
  \ theoretical performance. In this paper, we present DPUV4E for the Versal architecture,\
  \ providing configurations ranging from 2PE ($32.6$ TOPS) to 8PE ($131.0$ TOPS).\
  \ We design two computation units, Conv PE and DWC PE, to support different computational\
  \ patterns. Each computation unit's data flow efficiently utilizes the data reuse\
  \ opportunities to mitigate bandwidth bottlenecks. Additionally, we extend the functionality\
  \ of each PE to utilize AIEs for non-convolutional operations, reducing resource\
  \ overhead. Experiments on over 50 models show that compared to previous designs,\
  \ our design provides $8.6\\times$ the TOPS/W of traditional FPGA-based DPU designs,\
  \ while reducing DSP usage by $95.8\\%$, LUT usage by $44.7\\%$, and latency to\
  \ $68.5\\%$ under single-batch conditions. For end-to-end inference, our design\
  \ improving throughput by up to $2.2\\times$ for depth-wise convolution models and\
  \ up to $1.3\\times$ for standard models."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11441
---

Computer Science > Hardware Architecture
[Submitted on 13 Jun 2025]
Title:DPUV4E: High-Throughput DPU Architecture Design for CNN on Versal ACAP
View PDF HTML (experimental)Abstract:Convolutional Neural Networks (CNNs) remain prevalent in computer vision applications, and FPGAs, known for their flexibility and energy efficiency, have become essential components in heterogeneous acceleration systems. However, traditional FPGAs face challenges in balancing performance and versatility due to limited on-chip resources. AMD's Versal ACAP architecture, tailored for AI applications, incorporates AI Engines (AIEs) to deliver high computational power. Nevertheless, the platform suffers from insufficient memory bandwidth, hindering the full utilization of the AIEs' theoretical performance. In this paper, we present DPUV4E for the Versal architecture, providing configurations ranging from 2PE ($32.6$ TOPS) to 8PE ($131.0$ TOPS). We design two computation units, Conv PE and DWC PE, to support different computational patterns. Each computation unit's data flow efficiently utilizes the data reuse opportunities to mitigate bandwidth bottlenecks. Additionally, we extend the functionality of each PE to utilize AIEs for non-convolutional operations, reducing resource overhead. Experiments on over 50 models show that compared to previous designs, our design provides $8.6\times$ the TOPS/W of traditional FPGA-based DPU designs, while reducing DSP usage by $95.8\%$, LUT usage by $44.7\%$, and latency to $68.5\%$ under single-batch conditions. For end-to-end inference, our design improving throughput by up to $2.2\times$ for depth-wise convolution models and up to $1.3\times$ for standard models.
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