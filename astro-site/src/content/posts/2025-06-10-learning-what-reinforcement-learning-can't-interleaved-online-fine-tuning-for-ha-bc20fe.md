---
title: 'Learning What Reinforcement Learning Can''t: Interleaved Online Fine-Tuning
  for Hardest Questions'
description: "arXiv:2506.07527v1 Announce Type: new \nAbstract: Recent advances in\
  \ large language model (LLM) reasoning have shown that sophisticated behaviors such\
  \ as planning and self-reflection can emerge through reinforcement learning (RL).\
  \ However, despite these successes, RL in its current form remains insufficient\
  \ to induce capabilities that exceed the limitations of the base model, as it is\
  \ primarily optimized based on existing knowledge of the model rather than facilitating\
  \ the acquisition of new information. To address this limitation, we employ supervised\
  \ fine-tuning (SFT) to learn what RL cannot, which enables the incorporation of\
  \ new knowledge and reasoning patterns by leveraging high-quality demonstration\
  \ data. We analyze the training dynamics of RL and SFT for LLM reasoning and find\
  \ that RL excels at maintaining and improving performance on questions within the\
  \ model's original capabilities, while SFT is more effective at enabling progress\
  \ on questions beyond the current scope of the model. Motivated by the complementary\
  \ strengths of RL and SFT, we introduce a novel training approach, \\textbf{ReLIFT}\
  \ (\\textbf{Re}inforcement \\textbf{L}earning \\textbf{I}nterleaved with Online\
  \ \\textbf{F}ine-\\textbf{T}uning). In ReLIFT, the model is primarily trained using\
  \ RL, but when it encounters challenging questions, high-quality solutions are collected\
  \ for fine-tuning, and the training process alternates between RL and fine-tuning\
  \ to enhance the model's reasoning abilities. ReLIFT achieves an average improvement\
  \ of over +5.2 points across five competition-level benchmarks and one out-of-distribution\
  \ benchmark compared to other zero-RL models. Furthermore, we demonstrate that ReLIFT\
  \ outperforms both RL and SFT while using only 13\\% of the detailed demonstration\
  \ data, highlighting its scalability. These results provide compelling evidence\
  \ that ReLIFT overcomes the fundamental limitations of RL and underscores the significant\
  \ potential."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.07527
---

Computer Science > Artificial Intelligence
[Submitted on 9 Jun 2025]
Title:Learning What Reinforcement Learning Can't: Interleaved Online Fine-Tuning for Hardest Questions
View PDF HTML (experimental)Abstract:Recent advances in large language model (LLM) reasoning have shown that sophisticated behaviors such as planning and self-reflection can emerge through reinforcement learning (RL). However, despite these successes, RL in its current form remains insufficient to induce capabilities that exceed the limitations of the base model, as it is primarily optimized based on existing knowledge of the model rather than facilitating the acquisition of new information. To address this limitation, we employ supervised fine-tuning (SFT) to learn what RL cannot, which enables the incorporation of new knowledge and reasoning patterns by leveraging high-quality demonstration data. We analyze the training dynamics of RL and SFT for LLM reasoning and find that RL excels at maintaining and improving performance on questions within the model's original capabilities, while SFT is more effective at enabling progress on questions beyond the current scope of the model. Motivated by the complementary strengths of RL and SFT, we introduce a novel training approach, \textbf{ReLIFT} (\textbf{Re}inforcement \textbf{L}earning \textbf{I}nterleaved with Online \textbf{F}ine-\textbf{T}uning). In ReLIFT, the model is primarily trained using RL, but when it encounters challenging questions, high-quality solutions are collected for fine-tuning, and the training process alternates between RL and fine-tuning to enhance the model's reasoning abilities. ReLIFT achieves an average improvement of over +5.2 points across five competition-level benchmarks and one out-of-distribution benchmark compared to other zero-RL models. Furthermore, we demonstrate that ReLIFT outperforms both RL and SFT while using only 13\% of the detailed demonstration data, highlighting its scalability. These results provide compelling evidence that ReLIFT overcomes the fundamental limitations of RL and underscores the significant potential.
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