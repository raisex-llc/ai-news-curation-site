---
title: Towards Foundation Model on Temporal Knowledge Graph Reasoning
description: "arXiv:2506.06367v1 Announce Type: new \nAbstract: Temporal Knowledge\
  \ Graphs (TKGs) store temporal facts with quadruple formats (s, p, o, t). Existing\
  \ Temporal Knowledge Graph Embedding (TKGE) models perform link prediction tasks\
  \ in transductive or semi-inductive settings, which means the entities, relations,\
  \ and temporal information in the test graph are fully or partially observed during\
  \ training. Such reliance on seen elements during inference limits the models' ability\
  \ to transfer to new domains and generalize to real-world scenarios. A central limitation\
  \ is the difficulty in learning representations for entities, relations, and timestamps\
  \ that are transferable and not tied to dataset-specific vocabularies. To overcome\
  \ these limitations, we introduce the first fully-inductive approach to temporal\
  \ knowledge graph link prediction. Our model employs sinusoidal positional encodings\
  \ to capture fine-grained temporal patterns and generates adaptive entity and relation\
  \ representations using message passing conditioned on both local and global temporal\
  \ contexts. Our model design is agnostic to temporal granularity and time span,\
  \ effectively addressing temporal discrepancies across TKGs and facilitating time-aware\
  \ structural information transfer. As a pretrained, scalable, and transferable model,\
  \ POSTRA demonstrates strong zero-shot performance on unseen temporal knowledge\
  \ graphs, effectively generalizing to novel entities, relations, and timestamps.\
  \ Extensive theoretical analysis and empirical results show that a single pretrained\
  \ model can improve zero-shot performance on various inductive temporal reasoning\
  \ scenarios, marking a significant step toward a foundation model for temporal KGs."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06367
---

Computer Science > Artificial Intelligence
[Submitted on 4 Jun 2025]
Title:Towards Foundation Model on Temporal Knowledge Graph Reasoning
View PDF HTML (experimental)Abstract:Temporal Knowledge Graphs (TKGs) store temporal facts with quadruple formats (s, p, o, t). Existing Temporal Knowledge Graph Embedding (TKGE) models perform link prediction tasks in transductive or semi-inductive settings, which means the entities, relations, and temporal information in the test graph are fully or partially observed during training. Such reliance on seen elements during inference limits the models' ability to transfer to new domains and generalize to real-world scenarios. A central limitation is the difficulty in learning representations for entities, relations, and timestamps that are transferable and not tied to dataset-specific vocabularies. To overcome these limitations, we introduce the first fully-inductive approach to temporal knowledge graph link prediction. Our model employs sinusoidal positional encodings to capture fine-grained temporal patterns and generates adaptive entity and relation representations using message passing conditioned on both local and global temporal contexts. Our model design is agnostic to temporal granularity and time span, effectively addressing temporal discrepancies across TKGs and facilitating time-aware structural information transfer. As a pretrained, scalable, and transferable model, POSTRA demonstrates strong zero-shot performance on unseen temporal knowledge graphs, effectively generalizing to novel entities, relations, and timestamps. Extensive theoretical analysis and empirical results show that a single pretrained model can improve zero-shot performance on various inductive temporal reasoning scenarios, marking a significant step toward a foundation model for temporal KGs.
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