---
title: 'RollingQ: Reviving the Cooperation Dynamics in Multimodal Transformer'
description: "arXiv:2506.11465v1 Announce Type: cross \nAbstract: Multimodal learning\
  \ faces challenges in effectively fusing information from diverse modalities, especially\
  \ when modality quality varies across samples. Dynamic fusion strategies, such as\
  \ attention mechanism in Transformers, aim to address such challenge by adaptively\
  \ emphasizing modalities based on the characteristics of input data. However, through\
  \ amounts of carefully designed experiments, we surprisingly observed that the dynamic\
  \ adaptability of widely-used self-attention models diminishes. Model tends to prefer\
  \ one modality regardless of data characteristics. This bias triggers a self-reinforcing\
  \ cycle that progressively overemphasizes the favored modality, widening the distribution\
  \ gap in attention keys across modalities and deactivating attention mechanism's\
  \ dynamic properties. To revive adaptability, we propose a simple yet effective\
  \ method Rolling Query (RollingQ), which balances attention allocation by rotating\
  \ the query to break the self-reinforcing cycle and mitigate the key distribution\
  \ gap. Extensive experiments on various multimodal scenarios validate the effectiveness\
  \ of RollingQ and the restoration of cooperation dynamics is pivotal for enhancing\
  \ the broader capabilities of widely deployed multimodal Transformers. The source\
  \ code is available at https://github.com/GeWu-Lab/RollingQ_ICML2025."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11465
---

Computer Science > Machine Learning
[Submitted on 13 Jun 2025]
Title:RollingQ: Reviving the Cooperation Dynamics in Multimodal Transformer
View PDF HTML (experimental)Abstract:Multimodal learning faces challenges in effectively fusing information from diverse modalities, especially when modality quality varies across samples. Dynamic fusion strategies, such as attention mechanism in Transformers, aim to address such challenge by adaptively emphasizing modalities based on the characteristics of input data. However, through amounts of carefully designed experiments, we surprisingly observed that the dynamic adaptability of widely-used self-attention models diminishes. Model tends to prefer one modality regardless of data characteristics. This bias triggers a self-reinforcing cycle that progressively overemphasizes the favored modality, widening the distribution gap in attention keys across modalities and deactivating attention mechanism's dynamic properties. To revive adaptability, we propose a simple yet effective method Rolling Query (RollingQ), which balances attention allocation by rotating the query to break the self-reinforcing cycle and mitigate the key distribution gap. Extensive experiments on various multimodal scenarios validate the effectiveness of RollingQ and the restoration of cooperation dynamics is pivotal for enhancing the broader capabilities of widely deployed multimodal Transformers. The source code is available at this https URL.
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