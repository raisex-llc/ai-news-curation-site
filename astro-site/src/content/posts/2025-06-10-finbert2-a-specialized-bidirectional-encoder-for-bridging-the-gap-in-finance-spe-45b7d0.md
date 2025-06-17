---
title: 'FinBERT2: A Specialized Bidirectional Encoder for Bridging the Gap in Finance-Specific
  Deployment of Large Language Models'
description: "arXiv:2506.06335v1 Announce Type: cross \nAbstract: In natural language\
  \ processing (NLP), the focus has shifted from encoder-only tiny language models\
  \ like BERT to decoder-only large language models(LLMs) such as GPT-3. However,\
  \ LLMs' practical application in the financial sector has revealed three limitations:\
  \ (1) LLMs often perform worse than fine-tuned BERT on discriminative tasks despite\
  \ costing much higher computational resources, such as market sentiment analysis\
  \ in financial reports; (2) Application on generative tasks heavily relies on retrieval\
  \ augmented generation (RAG) methods to provide current and specialized information,\
  \ with general retrievers showing suboptimal performance on domain-specific retrieval\
  \ tasks; (3) There are additional inadequacies in other feature-based scenarios,\
  \ such as topic modeling. We introduce FinBERT2, a specialized bidirectional encoder\
  \ pretrained on a high-quality, financial-specific corpus of 32b tokens. This represents\
  \ the largest known Chinese financial pretraining corpus for models of this parameter\
  \ size. As a better backbone, FinBERT2 can bridge the gap in the financial-specific\
  \ deployment of LLMs through the following achievements: (1) Discriminative fine-tuned\
  \ models (Fin-Labelers) outperform other (Fin)BERT variants by 0.4%-3.3% and leading\
  \ LLMs by 9.7%-12.3% on average across five financial classification tasks. (2)\
  \ Contrastive fine-tuned models (Fin-Retrievers) outperform both open-source (e.g.,\
  \ +6.8\\% avg improvement over BGE-base-zh) and proprietary (e.g., +4.2\\% avg improvement\
  \ over OpenAI's text-embedding-3-large) embedders across five financial retrieval\
  \ tasks; (3) Building on FinBERT2 variants, we construct the Fin-TopicModel, which\
  \ enables superior clustering and topic representation for financial titles. Our\
  \ work revisits financial BERT models through comparative analysis with contemporary\
  \ LLMs and offers practical insights for effectively utilizing FinBERT in the LLMs\
  \ era."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06335
---

Computer Science > Information Retrieval
[Submitted on 31 May 2025]
Title:FinBERT2: A Specialized Bidirectional Encoder for Bridging the Gap in Finance-Specific Deployment of Large Language Models
View PDF HTML (experimental)Abstract:In natural language processing (NLP), the focus has shifted from encoder-only tiny language models like BERT to decoder-only large language models(LLMs) such as GPT-3. However, LLMs' practical application in the financial sector has revealed three limitations: (1) LLMs often perform worse than fine-tuned BERT on discriminative tasks despite costing much higher computational resources, such as market sentiment analysis in financial reports; (2) Application on generative tasks heavily relies on retrieval augmented generation (RAG) methods to provide current and specialized information, with general retrievers showing suboptimal performance on domain-specific retrieval tasks; (3) There are additional inadequacies in other feature-based scenarios, such as topic modeling. We introduce FinBERT2, a specialized bidirectional encoder pretrained on a high-quality, financial-specific corpus of 32b tokens. This represents the largest known Chinese financial pretraining corpus for models of this parameter size. As a better backbone, FinBERT2 can bridge the gap in the financial-specific deployment of LLMs through the following achievements: (1) Discriminative fine-tuned models (Fin-Labelers) outperform other (Fin)BERT variants by 0.4%-3.3% and leading LLMs by 9.7%-12.3% on average across five financial classification tasks. (2) Contrastive fine-tuned models (Fin-Retrievers) outperform both open-source (e.g., +6.8\% avg improvement over BGE-base-zh) and proprietary (e.g., +4.2\% avg improvement over OpenAI's text-embedding-3-large) embedders across five financial retrieval tasks; (3) Building on FinBERT2 variants, we construct the Fin-TopicModel, which enables superior clustering and topic representation for financial titles. Our work revisits financial BERT models through comparative analysis with contemporary LLMs and offers practical insights for effectively utilizing FinBERT in the LLMs era.
Current browse context:
cs.IR
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