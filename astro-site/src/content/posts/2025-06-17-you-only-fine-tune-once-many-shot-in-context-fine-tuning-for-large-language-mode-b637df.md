---
title: 'You Only Fine-tune Once: Many-Shot In-Context Fine-Tuning for Large Language
  Model'
description: "arXiv:2506.11103v1 Announce Type: cross \nAbstract: Large language models\
  \ (LLMs) possess a remarkable ability to perform in-context learning (ICL), which\
  \ enables them to handle multiple downstream tasks simultaneously without requiring\
  \ task-specific fine-tuning. Recent studies have shown that even moderately sized\
  \ LLMs, such as Mistral 7B, Gemma 7B and Llama-3 8B, can achieve ICL through few-shot\
  \ in-context fine-tuning of all tasks at once. However, this approach still lags\
  \ behind dedicated fine-tuning, where a separate model is trained for each individual\
  \ task.\n  In this paper, we propose a novel approach, Many-Shot In-Context Fine-tuning\
  \ (ManyICL), which significantly narrows this performance gap by extending the principles\
  \ of ICL to a many-shot setting. To unlock the full potential of ManyICL and address\
  \ the inherent inefficiency of processing long sequences with numerous in-context\
  \ examples, we propose a novel training objective. Instead of solely predicting\
  \ the final answer, our approach treats every answer within the context as a supervised\
  \ training target. This effectively shifts the role of many-shot examples from prompts\
  \ to targets for autoregressive learning. Through extensive experiments on diverse\
  \ downstream tasks, including classification, summarization, question answering,\
  \ natural language inference, and math, we demonstrate that ManyICL substantially\
  \ outperforms zero/few-shot fine-tuning and approaches the performance of dedicated\
  \ fine-tuning. Furthermore, ManyICL significantly mitigates catastrophic forgetting\
  \ issues observed in zero/few-shot fine-tuning. The code will be made publicly available\
  \ upon publication."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11103
---

Computer Science > Computation and Language
[Submitted on 6 Jun 2025]
Title:You Only Fine-tune Once: Many-Shot In-Context Fine-Tuning for Large Language Model
View PDF HTML (experimental)Abstract:Large language models (LLMs) possess a remarkable ability to perform in-context learning (ICL), which enables them to handle multiple downstream tasks simultaneously without requiring task-specific fine-tuning. Recent studies have shown that even moderately sized LLMs, such as Mistral 7B, Gemma 7B and Llama-3 8B, can achieve ICL through few-shot in-context fine-tuning of all tasks at once. However, this approach still lags behind dedicated fine-tuning, where a separate model is trained for each individual task.
In this paper, we propose a novel approach, Many-Shot In-Context Fine-tuning (ManyICL), which significantly narrows this performance gap by extending the principles of ICL to a many-shot setting. To unlock the full potential of ManyICL and address the inherent inefficiency of processing long sequences with numerous in-context examples, we propose a novel training objective. Instead of solely predicting the final answer, our approach treats every answer within the context as a supervised training target. This effectively shifts the role of many-shot examples from prompts to targets for autoregressive learning. Through extensive experiments on diverse downstream tasks, including classification, summarization, question answering, natural language inference, and math, we demonstrate that ManyICL substantially outperforms zero/few-shot fine-tuning and approaches the performance of dedicated fine-tuning. Furthermore, ManyICL significantly mitigates catastrophic forgetting issues observed in zero/few-shot fine-tuning. The code will be made publicly available upon publication.
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