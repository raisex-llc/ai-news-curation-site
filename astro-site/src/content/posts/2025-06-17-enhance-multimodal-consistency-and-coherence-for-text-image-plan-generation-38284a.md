---
title: Enhance Multimodal Consistency and Coherence for Text-Image Plan Generation
description: "arXiv:2506.11380v1 Announce Type: cross \nAbstract: People get informed\
  \ of a daily task plan through diverse media involving both texts and images. However,\
  \ most prior research only focuses on LLM's capability of textual plan generation.\
  \ The potential of large-scale models in providing text-image plans remains understudied.\
  \ Generating high-quality text-image plans faces two main challenges: ensuring consistent\
  \ alignment between two modalities and keeping coherence among visual steps. To\
  \ address these challenges, we propose a novel framework that generates and refines\
  \ text-image plans step-by-step. At each iteration, our framework (1) drafts the\
  \ next textual step based on the prediction history; (2) edits the last visual step\
  \ to obtain the next one; (3) extracts PDDL-like visual information; and (4) refines\
  \ the draft with the extracted visual information. The textual and visual step produced\
  \ in stage (4) and (2) will then serve as inputs for the next iteration. Our approach\
  \ offers a plug-and-play improvement to various backbone models, such as Mistral-7B,\
  \ Gemini-1.5, and GPT-4o. To evaluate the effectiveness of our approach, we collect\
  \ a new benchmark consisting of 1,100 tasks and their text-image pair solutions\
  \ covering 11 daily topics. We also design and validate a new set of metrics to\
  \ evaluate the multimodal consistency and coherence in text-image plans. Extensive\
  \ experiment results show the effectiveness of our approach on a range of backbone\
  \ models against competitive baselines. Our code and data are available at https://github.com/psunlpgroup/MPlanner."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11380
---

Computer Science > Computer Vision and Pattern Recognition
[Submitted on 13 Jun 2025]
Title:Enhance Multimodal Consistency and Coherence for Text-Image Plan Generation
View PDF HTML (experimental)Abstract:People get informed of a daily task plan through diverse media involving both texts and images. However, most prior research only focuses on LLM's capability of textual plan generation. The potential of large-scale models in providing text-image plans remains understudied. Generating high-quality text-image plans faces two main challenges: ensuring consistent alignment between two modalities and keeping coherence among visual steps. To address these challenges, we propose a novel framework that generates and refines text-image plans step-by-step. At each iteration, our framework (1) drafts the next textual step based on the prediction history; (2) edits the last visual step to obtain the next one; (3) extracts PDDL-like visual information; and (4) refines the draft with the extracted visual information. The textual and visual step produced in stage (4) and (2) will then serve as inputs for the next iteration. Our approach offers a plug-and-play improvement to various backbone models, such as Mistral-7B, Gemini-1.5, and GPT-4o. To evaluate the effectiveness of our approach, we collect a new benchmark consisting of 1,100 tasks and their text-image pair solutions covering 11 daily topics. We also design and validate a new set of metrics to evaluate the multimodal consistency and coherence in text-image plans. Extensive experiment results show the effectiveness of our approach on a range of backbone models against competitive baselines. Our code and data are available at this https URL.
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