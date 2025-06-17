---
title: 'dLLM-Cache: Accelerating Diffusion Large Language Models with Adaptive Caching'
description: "arXiv:2506.06295v1 Announce Type: cross \nAbstract: Autoregressive Models\
  \ (ARMs) have long dominated the landscape of Large Language Models. Recently, a\
  \ new paradigm has emerged in the form of diffusion-based Large Language Models\
  \ (dLLMs), which generate text by iteratively denoising masked segments. This approach\
  \ has shown significant advantages and potential. However, dLLMs suffer from high\
  \ inference latency. Traditional ARM acceleration techniques, such as Key-Value\
  \ caching, are incompatible with dLLMs due to their bidirectional attention mechanism.\
  \ To address this specific challenge, our work begins with a key observation that\
  \ dLLM inference involves a static prompt and a partially dynamic response, where\
  \ most tokens remain stable across adjacent denoising steps. Based on this, we propose\
  \ dLLM-Cache, a training-free adaptive caching framework that combines long-interval\
  \ prompt caching with partial response updates guided by feature similarity. This\
  \ design enables efficient reuse of intermediate computations without compromising\
  \ model performance. Extensive experiments on representative dLLMs, including LLaDA\
  \ 8B and Dream 7B, show that dLLM-Cache achieves up to 9.1 x speedup over standard\
  \ inference without compromising output quality. Notably, our method brings dLLM\
  \ inference latency close to that of ARMs under many settings. Codes are provided\
  \ in the supplementary material and will be released publicly on GitHub."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06295
---

Computer Science > Machine Learning
[Submitted on 17 May 2025]
Title:dLLM-Cache: Accelerating Diffusion Large Language Models with Adaptive Caching
View PDF HTML (experimental)Abstract:Autoregressive Models (ARMs) have long dominated the landscape of Large Language Models. Recently, a new paradigm has emerged in the form of diffusion-based Large Language Models (dLLMs), which generate text by iteratively denoising masked segments. This approach has shown significant advantages and potential. However, dLLMs suffer from high inference latency. Traditional ARM acceleration techniques, such as Key-Value caching, are incompatible with dLLMs due to their bidirectional attention mechanism. To address this specific challenge, our work begins with a key observation that dLLM inference involves a static prompt and a partially dynamic response, where most tokens remain stable across adjacent denoising steps. Based on this, we propose dLLM-Cache, a training-free adaptive caching framework that combines long-interval prompt caching with partial response updates guided by feature similarity. This design enables efficient reuse of intermediate computations without compromising model performance. Extensive experiments on representative dLLMs, including LLaDA 8B and Dream 7B, show that dLLM-Cache achieves up to 9.1 x speedup over standard inference without compromising output quality. Notably, our method brings dLLM inference latency close to that of ARMs under many settings. Codes are provided in the supplementary material and will be released publicly on GitHub.
Current browse context:
cs.LG
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