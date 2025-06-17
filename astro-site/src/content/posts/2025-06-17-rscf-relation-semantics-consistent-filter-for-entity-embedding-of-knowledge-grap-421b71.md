---
title: 'RSCF: Relation-Semantics Consistent Filter for Entity Embedding of Knowledge
  Graph'
description: "arXiv:2505.20813v3 Announce Type: replace-cross \nAbstract: In knowledge\
  \ graph embedding, leveraging relation specific entity transformation has markedly\
  \ enhanced performance. However, the consistency of embedding differences before\
  \ and after transformation remains unaddressed, risking the loss of valuable inductive\
  \ bias inherent in the embeddings. This inconsistency stems from two problems. First,\
  \ transformation representations are specified for relations in a disconnected manner,\
  \ allowing dissimilar transformations and corresponding entity embeddings for similar\
  \ relations. Second, a generalized plug-in approach as a SFBR (Semantic Filter Based\
  \ on Relations) disrupts this consistency through excessive concentration of entity\
  \ embeddings under entity-based regularization, generating indistinguishable score\
  \ distributions among relations. In this paper, we introduce a plug-in KGE method,\
  \ Relation-Semantics Consistent Filter (RSCF). Its entity transformation has three\
  \ features for enhancing semantic consistency: 1) shared affine transformation of\
  \ relation embeddings across all relations, 2) rooted entity transformation that\
  \ adds an entity embedding to its change represented by the transformed vector,\
  \ and 3) normalization of the change to prevent scale reduction. To amplify the\
  \ advantages of consistency that preserve semantics on embeddings, RSCF adds relation\
  \ transformation and prediction modules for enhancing the semantics. In knowledge\
  \ graph completion tasks with distance-based and tensor decomposition models, RSCF\
  \ significantly outperforms state-of-the-art KGE methods, showing robustness across\
  \ all relations and their frequencies."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2505.20813
---

Computer Science > Computation and Language
[Submitted on 27 May 2025 (v1), last revised 13 Jun 2025 (this version, v3)]
Title:RSCF: Relation-Semantics Consistent Filter for Entity Embedding of Knowledge Graph
View PDF HTML (experimental)Abstract:In knowledge graph embedding, leveraging relation specific entity transformation has markedly enhanced performance. However, the consistency of embedding differences before and after transformation remains unaddressed, risking the loss of valuable inductive bias inherent in the embeddings. This inconsistency stems from two problems. First, transformation representations are specified for relations in a disconnected manner, allowing dissimilar transformations and corresponding entity embeddings for similar relations. Second, a generalized plug-in approach as a SFBR (Semantic Filter Based on Relations) disrupts this consistency through excessive concentration of entity embeddings under entity-based regularization, generating indistinguishable score distributions among relations. In this paper, we introduce a plug-in KGE method, Relation-Semantics Consistent Filter (RSCF). Its entity transformation has three features for enhancing semantic consistency: 1) shared affine transformation of relation embeddings across all relations, 2) rooted entity transformation that adds an entity embedding to its change represented by the transformed vector, and 3) normalization of the change to prevent scale reduction. To amplify the advantages of consistency that preserve semantics on embeddings, RSCF adds relation transformation and prediction modules for enhancing the semantics. In knowledge graph completion tasks with distance-based and tensor decomposition models, RSCF significantly outperforms state-of-the-art KGE methods, showing robustness across all relations and their frequencies.
Submission history
From: Junsik Kim [view email][v1] Tue, 27 May 2025 07:22:00 UTC (8,673 KB)
[v2] Wed, 28 May 2025 01:17:49 UTC (8,801 KB)
[v3] Fri, 13 Jun 2025 02:33:26 UTC (8,671 KB)
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