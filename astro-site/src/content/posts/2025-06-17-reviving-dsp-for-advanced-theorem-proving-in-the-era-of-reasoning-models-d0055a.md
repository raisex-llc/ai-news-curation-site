---
title: Reviving DSP for Advanced Theorem Proving in the Era of Reasoning Models
description: "arXiv:2506.11487v1 Announce Type: new \nAbstract: Recent advancements,\
  \ such as DeepSeek-Prover-V2-671B and Kimina-Prover-Preview-72B, demonstrate a prevailing\
  \ trend in leveraging reinforcement learning (RL)-based large-scale training for\
  \ automated theorem proving. Surprisingly, we discover that even without any training,\
  \ careful neuro-symbolic coordination of existing off-the-shelf reasoning models\
  \ and tactic step provers can achieve comparable performance. This paper introduces\
  \ \\textbf{DSP+}, an improved version of the Draft, Sketch, and Prove framework,\
  \ featuring a \\emph{fine-grained and integrated} neuro-symbolic enhancement for\
  \ each phase: (1) In the draft phase, we prompt reasoning models to generate concise\
  \ natural-language subgoals to benefit the sketch phase, removing thinking tokens\
  \ and references to human-written proofs; (2) In the sketch phase, subgoals are\
  \ autoformalized with hypotheses to benefit the proving phase, and sketch lines\
  \ containing syntactic errors are masked according to predefined rules; (3) In the\
  \ proving phase, we tightly integrate symbolic search methods like Aesop with step\
  \ provers to establish proofs for the sketch subgoals. Experimental results show\
  \ that, without any additional model training or fine-tuning, DSP+ solves 80.7\\\
  %, 32.8\\%, and 24 out of 644 problems from miniF2F, ProofNet, and PutnamBench,\
  \ respectively, while requiring fewer budgets compared to state-of-the-arts. DSP+\
  \ proves \\texttt{imo\\_2019\\_p1}, an IMO problem in miniF2F that is not solved\
  \ by any prior work. Additionally, DSP+ generates proof patterns comprehensible\
  \ by human experts, facilitating the identification of formalization errors; For\
  \ example, eight wrongly formalized statements in miniF2F are discovered. Our results\
  \ highlight the potential of classical reasoning patterns besides the RL-based training.\
  \ All components will be open-sourced."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11487
---

Computer Science > Artificial Intelligence
[Submitted on 13 Jun 2025]
Title:Reviving DSP for Advanced Theorem Proving in the Era of Reasoning Models
View PDFAbstract:Recent advancements, such as DeepSeek-Prover-V2-671B and Kimina-Prover-Preview-72B, demonstrate a prevailing trend in leveraging reinforcement learning (RL)-based large-scale training for automated theorem proving. Surprisingly, we discover that even without any training, careful neuro-symbolic coordination of existing off-the-shelf reasoning models and tactic step provers can achieve comparable performance. This paper introduces \textbf{DSP+}, an improved version of the Draft, Sketch, and Prove framework, featuring a \emph{fine-grained and integrated} neuro-symbolic enhancement for each phase: (1) In the draft phase, we prompt reasoning models to generate concise natural-language subgoals to benefit the sketch phase, removing thinking tokens and references to human-written proofs; (2) In the sketch phase, subgoals are autoformalized with hypotheses to benefit the proving phase, and sketch lines containing syntactic errors are masked according to predefined rules; (3) In the proving phase, we tightly integrate symbolic search methods like Aesop with step provers to establish proofs for the sketch subgoals. Experimental results show that, without any additional model training or fine-tuning, DSP+ solves 80.7\%, 32.8\%, and 24 out of 644 problems from miniF2F, ProofNet, and PutnamBench, respectively, while requiring fewer budgets compared to state-of-the-arts. DSP+ proves \texttt{imo\_2019\_p1}, an IMO problem in miniF2F that is not solved by any prior work. Additionally, DSP+ generates proof patterns comprehensible by human experts, facilitating the identification of formalization errors; For example, eight wrongly formalized statements in miniF2F are discovered. Our results highlight the potential of classical reasoning patterns besides the RL-based training. All components will be open-sourced.
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