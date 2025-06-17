---
title: 'GraphRAG-Causal: A novel graph-augmented framework for causal reasoning and
  annotation in news'
description: "arXiv:2506.11600v1 Announce Type: cross \nAbstract: GraphRAG-Causal\
  \ introduces an innovative framework that combines graph-based retrieval with large\
  \ language models to enhance causal reasoning in news analysis. Traditional NLP\
  \ approaches often struggle with identifying complex, implicit causal links, especially\
  \ in low-data scenarios. Our approach addresses these challenges by transforming\
  \ annotated news headlines into structured causal knowledge graphs. It then employs\
  \ a hybrid retrieval system that merges semantic embeddings with graph-based structural\
  \ cues leveraging Neo4j to accurately match and retrieve relevant events. The framework\
  \ is built on a three-stage pipeline: First, during Data Preparation, news sentences\
  \ are meticulously annotated and converted into causal graphs capturing cause, effect,\
  \ and trigger relationships. Next, the Graph Retrieval stage stores these graphs\
  \ along with their embeddings in a Neo4j database and utilizes hybrid Cypher queries\
  \ to efficiently identify events that share both semantic and structural similarities\
  \ with a given query. Finally, the LLM Inference stage utilizes these retrieved\
  \ causal graphs in a few-shot learning setup with XML-based prompting, enabling\
  \ robust classification and tagging of causal relationships. Experimental evaluations\
  \ demonstrate that GraphRAG-Causal achieves an impressive F1-score of 82.1% on causal\
  \ classification using just 20 few-shot examples. This approach significantly boosts\
  \ accuracy and consistency, making it highly suitable for real-time applications\
  \ in news reliability assessment, misinformation detection, and policy analysis."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11600
---

Computer Science > Information Retrieval
[Submitted on 13 Jun 2025]
Title:GraphRAG-Causal: A novel graph-augmented framework for causal reasoning and annotation in news
View PDF HTML (experimental)Abstract:GraphRAG-Causal introduces an innovative framework that combines graph-based retrieval with large language models to enhance causal reasoning in news analysis. Traditional NLP approaches often struggle with identifying complex, implicit causal links, especially in low-data scenarios. Our approach addresses these challenges by transforming annotated news headlines into structured causal knowledge graphs. It then employs a hybrid retrieval system that merges semantic embeddings with graph-based structural cues leveraging Neo4j to accurately match and retrieve relevant events. The framework is built on a three-stage pipeline: First, during Data Preparation, news sentences are meticulously annotated and converted into causal graphs capturing cause, effect, and trigger relationships. Next, the Graph Retrieval stage stores these graphs along with their embeddings in a Neo4j database and utilizes hybrid Cypher queries to efficiently identify events that share both semantic and structural similarities with a given query. Finally, the LLM Inference stage utilizes these retrieved causal graphs in a few-shot learning setup with XML-based prompting, enabling robust classification and tagging of causal relationships. Experimental evaluations demonstrate that GraphRAG-Causal achieves an impressive F1-score of 82.1% on causal classification using just 20 few-shot examples. This approach significantly boosts accuracy and consistency, making it highly suitable for real-time applications in news reliability assessment, misinformation detection, and policy analysis.
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