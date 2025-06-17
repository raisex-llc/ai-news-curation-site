---
title: 'Accelerating Diffusion Large Language Models with SlowFast Sampling: The Three
  Golden Principles'
description: "arXiv:2506.10848v2 Announce Type: replace-cross \nAbstract: Diffusion-based\
  \ language models (dLLMs) have emerged as a promising alternative to traditional\
  \ autoregressive LLMs by enabling parallel token generation and significantly reducing\
  \ inference latency. However, existing sampling strategies for dLLMs, such as confidence-based\
  \ or semi-autoregressive decoding, often suffer from static behavior, leading to\
  \ suboptimal efficiency and limited flexibility. In this paper, we propose SlowFast\
  \ Sampling, a novel dynamic sampling strategy that adaptively alternates between\
  \ exploratory and accelerated decoding stages. Our method is guided by three golden\
  \ principles: certainty principle, convergence principle, and positional principle,\
  \ which govern when and where tokens can be confidently and efficiently decoded.\
  \ We further integrate our strategy with dLLM-Cache to reduce redundant computation.\
  \ Extensive experiments across benchmarks and models show that SlowFast Sampling\
  \ achieves up to 15.63$\\times$ speedup on LLaDA with minimal accuracy drop, and\
  \ up to 34.22$\\times$ when combined with caching. Notably, our approach outperforms\
  \ strong autoregressive baselines like LLaMA3 8B in throughput, demonstrating that\
  \ well-designed sampling can unlock the full potential of dLLMs for fast and high-quality\
  \ generation."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.10848
---

Computer Science > Computation and Language
[Submitted on 12 Jun 2025 (v1), last revised 13 Jun 2025 (this version, v2)]
Title:Accelerating Diffusion Large Language Models with SlowFast Sampling: The Three Golden Principles
View PDF HTML (experimental)Abstract:Diffusion-based language models (dLLMs) have emerged as a promising alternative to traditional autoregressive LLMs by enabling parallel token generation and significantly reducing inference latency. However, existing sampling strategies for dLLMs, such as confidence-based or semi-autoregressive decoding, often suffer from static behavior, leading to suboptimal efficiency and limited flexibility. In this paper, we propose SlowFast Sampling, a novel dynamic sampling strategy that adaptively alternates between exploratory and accelerated decoding stages. Our method is guided by three golden principles: certainty principle, convergence principle, and positional principle, which govern when and where tokens can be confidently and efficiently decoded. We further integrate our strategy with dLLM-Cache to reduce redundant computation. Extensive experiments across benchmarks and models show that SlowFast Sampling achieves up to 15.63$\times$ speedup on LLaDA with minimal accuracy drop, and up to 34.22$\times$ when combined with caching. Notably, our approach outperforms strong autoregressive baselines like LLaMA3 8B in throughput, demonstrating that well-designed sampling can unlock the full potential of dLLMs for fast and high-quality generation.
Submission history
From: Dongrui Liu [view email][v1] Thu, 12 Jun 2025 16:08:28 UTC (1,237 KB)
[v2] Fri, 13 Jun 2025 02:28:47 UTC (1,237 KB)
Current browse context:
cs.CL
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