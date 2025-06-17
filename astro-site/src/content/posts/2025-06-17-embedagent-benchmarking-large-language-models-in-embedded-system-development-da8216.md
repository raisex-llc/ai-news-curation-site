---
title: 'EmbedAgent: Benchmarking Large Language Models in Embedded System Development'
description: "arXiv:2506.11003v1 Announce Type: cross \nAbstract: Large Language Models\
  \ (LLMs) have shown promise in various tasks, yet few benchmarks assess their capabilities\
  \ in embedded system development.In this paper, we introduce EmbedAgent, a paradigm\
  \ designed to simulate real-world roles in embedded system development, such as\
  \ Embedded System Programmer, Architect, and Integrator. This paradigm enables LLMs\
  \ to be tested in tasks that bridge the gap between digital and physical systems,\
  \ allowing for a more comprehensive assessment of their capabilities. To evaluate\
  \ LLMs on these tasks, we propose Embedbench, the first comprehensive benchmark\
  \ for embedded system programming, circuit design, and cross-platform migration.Embedbench\
  \ consists of 126 cases, covering 9 electronic components across 3 hardware platforms.\
  \ Through extensive experiments on 10 mainstream LLMs, we uncover several key findings.\
  \ Surprisingly, despite the simplicity of the cases, DeepSeek-R1 achieves only a\
  \ 55.6% pass@1 rate when provided with schematic information, and 50.0% when tasked\
  \ with generating the schematics itself. In the cross-platform migration tasks,\
  \ LLMs show relatively strong performance with MicroPython on the Raspberry Pi Pico\
  \ (with the top model achieving 73.8% pass@1), but perform poorly on ESP-IDF, where\
  \ the best model reaches only 29.4% pass@1.Interestingly, we observe that general-purpose\
  \ chat LLMs like DeepSeek-V3 often fail to utilize relevant pre-trained knowledge\
  \ in this domain, while reasoning LLMs tend to overthink and overlook efficient\
  \ knowledge during pretraining. Based on these insights, we propose two strategies:\
  \ retrieval augmented generation and compiler feedback-to enhance LLM performance.\
  \ These strategies result in significant improvements, with Deepseek-R1 reaching\
  \ a 65.1% pass@1 with correct schematics, and 53.1% without. Additionally, the accuracy\
  \ of the Arduino to ESP32 migration task improves from 21.4% to 27.8%."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11003
---

Computer Science > Software Engineering
[Submitted on 19 Apr 2025]
Title:EmbedAgent: Benchmarking Large Language Models in Embedded System Development
View PDFAbstract:Large Language Models (LLMs) have shown promise in various tasks, yet few benchmarks assess their capabilities in embedded system this http URL this paper, we introduce EmbedAgent, a paradigm designed to simulate real-world roles in embedded system development, such as Embedded System Programmer, Architect, and Integrator. This paradigm enables LLMs to be tested in tasks that bridge the gap between digital and physical systems, allowing for a more comprehensive assessment of their capabilities. To evaluate LLMs on these tasks, we propose Embedbench, the first comprehensive benchmark for embedded system programming, circuit design, and cross-platform this http URL consists of 126 cases, covering 9 electronic components across 3 hardware platforms. Through extensive experiments on 10 mainstream LLMs, we uncover several key findings. Surprisingly, despite the simplicity of the cases, DeepSeek-R1 achieves only a 55.6% pass@1 rate when provided with schematic information, and 50.0% when tasked with generating the schematics itself. In the cross-platform migration tasks, LLMs show relatively strong performance with MicroPython on the Raspberry Pi Pico (with the top model achieving 73.8% pass@1), but perform poorly on ESP-IDF, where the best model reaches only 29.4% pass@1.Interestingly, we observe that general-purpose chat LLMs like DeepSeek-V3 often fail to utilize relevant pre-trained knowledge in this domain, while reasoning LLMs tend to overthink and overlook efficient knowledge during pretraining. Based on these insights, we propose two strategies: retrieval augmented generation and compiler feedback-to enhance LLM performance. These strategies result in significant improvements, with Deepseek-R1 reaching a 65.1% pass@1 with correct schematics, and 53.1% without. Additionally, the accuracy of the Arduino to ESP32 migration task improves from 21.4% to 27.8%.
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