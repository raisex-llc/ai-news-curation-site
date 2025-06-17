---
title: 'Saffron-1: Towards an Inference Scaling Paradigm for LLM Safety Assurance'
description: "arXiv:2506.06444v1 Announce Type: cross \nAbstract: Existing safety\
  \ assurance research has primarily focused on training-phase alignment to instill\
  \ safe behaviors into LLMs. However, recent studies have exposed these methods'\
  \ susceptibility to diverse jailbreak attacks. Concurrently, inference scaling has\
  \ significantly advanced LLM reasoning capabilities but remains unexplored in the\
  \ context of safety assurance. Addressing this gap, our work pioneers inference\
  \ scaling for robust and effective LLM safety against emerging threats. We reveal\
  \ that conventional inference scaling techniques, despite their success in reasoning\
  \ tasks, perform poorly in safety contexts, even falling short of basic approaches\
  \ like Best-of-N Sampling. We attribute this inefficiency to a newly identified\
  \ challenge, the exploration--efficiency dilemma, arising from the high computational\
  \ overhead associated with frequent process reward model (PRM) evaluations. To overcome\
  \ this dilemma, we propose SAFFRON, a novel inference scaling paradigm tailored\
  \ explicitly for safety assurance. Central to our approach is the introduction of\
  \ a multifurcation reward model (MRM) that significantly reduces the required number\
  \ of reward model evaluations. To operationalize this paradigm, we further propose:\
  \ (i) a partial supervision training objective for MRM, (ii) a conservative exploration\
  \ constraint to prevent out-of-distribution explorations, and (iii) a Trie-based\
  \ key--value caching strategy that facilitates cache sharing across sequences during\
  \ tree search. Extensive experiments validate the effectiveness of our method. Additionally,\
  \ we publicly release our trained multifurcation reward model (Saffron-1) and the\
  \ accompanying token-level safety reward dataset (Safety4M) to accelerate future\
  \ research in LLM safety. Our code, model, and data are publicly available at https://github.com/q-rz/saffron\
  \ , and our project homepage is at https://q-rz.github.io/p/saffron ."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06444
---

Computer Science > Machine Learning
[Submitted on 6 Jun 2025]
Title:Saffron-1: Towards an Inference Scaling Paradigm for LLM Safety Assurance
View PDF HTML (experimental)Abstract:Existing safety assurance research has primarily focused on training-phase alignment to instill safe behaviors into LLMs. However, recent studies have exposed these methods' susceptibility to diverse jailbreak attacks. Concurrently, inference scaling has significantly advanced LLM reasoning capabilities but remains unexplored in the context of safety assurance. Addressing this gap, our work pioneers inference scaling for robust and effective LLM safety against emerging threats. We reveal that conventional inference scaling techniques, despite their success in reasoning tasks, perform poorly in safety contexts, even falling short of basic approaches like Best-of-N Sampling. We attribute this inefficiency to a newly identified challenge, the exploration--efficiency dilemma, arising from the high computational overhead associated with frequent process reward model (PRM) evaluations. To overcome this dilemma, we propose SAFFRON, a novel inference scaling paradigm tailored explicitly for safety assurance. Central to our approach is the introduction of a multifurcation reward model (MRM) that significantly reduces the required number of reward model evaluations. To operationalize this paradigm, we further propose: (i) a partial supervision training objective for MRM, (ii) a conservative exploration constraint to prevent out-of-distribution explorations, and (iii) a Trie-based key--value caching strategy that facilitates cache sharing across sequences during tree search. Extensive experiments validate the effectiveness of our method. Additionally, we publicly release our trained multifurcation reward model (Saffron-1) and the accompanying token-level safety reward dataset (Safety4M) to accelerate future research in LLM safety. Our code, model, and data are publicly available at this https URL , and our project homepage is at this https URL .
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