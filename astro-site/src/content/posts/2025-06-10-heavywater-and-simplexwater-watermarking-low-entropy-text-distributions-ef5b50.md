---
title: 'HeavyWater and SimplexWater: Watermarking Low-Entropy Text Distributions'
description: "arXiv:2506.06409v1 Announce Type: cross \nAbstract: Large language model\
  \ (LLM) watermarks enable authentication of text provenance, curb misuse of machine-generated\
  \ text, and promote trust in AI systems. Current watermarks operate by changing\
  \ the next-token predictions output by an LLM. The updated (i.e., watermarked) predictions\
  \ depend on random side information produced, for example, by hashing previously\
  \ generated tokens. LLM watermarking is particularly challenging in low-entropy\
  \ generation tasks - such as coding - where next-token predictions are near-deterministic.\
  \ In this paper, we propose an optimization framework for watermark design. Our\
  \ goal is to understand how to most effectively use random side information in order\
  \ to maximize the likelihood of watermark detection and minimize the distortion\
  \ of generated text. Our analysis informs the design of two new watermarks: HeavyWater\
  \ and SimplexWater. Both watermarks are tunable, gracefully trading-off between\
  \ detection accuracy and text distortion. They can also be applied to any LLM and\
  \ are agnostic to side information generation. We examine the performance of HeavyWater\
  \ and SimplexWater through several benchmarks, demonstrating that they can achieve\
  \ high watermark detection accuracy with minimal compromise of text generation quality,\
  \ particularly in the low-entropy regime. Our theoretical analysis also reveals\
  \ surprising new connections between LLM watermarking and coding theory. The code\
  \ implementation can be found in https://github.com/DorTsur/HeavyWater_SimplexWater"
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06409
---

Computer Science > Cryptography and Security
[Submitted on 6 Jun 2025]
Title:HeavyWater and SimplexWater: Watermarking Low-Entropy Text Distributions
View PDF HTML (experimental)Abstract:Large language model (LLM) watermarks enable authentication of text provenance, curb misuse of machine-generated text, and promote trust in AI systems. Current watermarks operate by changing the next-token predictions output by an LLM. The updated (i.e., watermarked) predictions depend on random side information produced, for example, by hashing previously generated tokens. LLM watermarking is particularly challenging in low-entropy generation tasks - such as coding - where next-token predictions are near-deterministic. In this paper, we propose an optimization framework for watermark design. Our goal is to understand how to most effectively use random side information in order to maximize the likelihood of watermark detection and minimize the distortion of generated text. Our analysis informs the design of two new watermarks: HeavyWater and SimplexWater. Both watermarks are tunable, gracefully trading-off between detection accuracy and text distortion. They can also be applied to any LLM and are agnostic to side information generation. We examine the performance of HeavyWater and SimplexWater through several benchmarks, demonstrating that they can achieve high watermark detection accuracy with minimal compromise of text generation quality, particularly in the low-entropy regime. Our theoretical analysis also reveals surprising new connections between LLM watermarking and coding theory. The code implementation can be found in this https URL
Current browse context:
cs.CR
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