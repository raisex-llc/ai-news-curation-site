---
title: 'Fixing It in Post: A Comparative Study of LLM Post-Training Data Quality and
  Model Performance'
description: "arXiv:2506.06522v1 Announce Type: cross \nAbstract: Recent work on large\
  \ language models (LLMs) has increasingly focused on post-training and alignment\
  \ with datasets curated to enhance instruction following, world knowledge, and specialized\
  \ skills. However, most post-training datasets used in leading open- and closed-source\
  \ LLMs remain inaccessible to the public, with limited information about their construction\
  \ process. This lack of transparency has motivated the recent development of open-source\
  \ post-training corpora. While training on these open alternatives can yield performance\
  \ comparable to that of leading models, systematic comparisons remain challenging\
  \ due to the significant computational cost of conducting them rigorously at scale,\
  \ and are therefore largely absent. As a result, it remains unclear how specific\
  \ samples, task types, or curation strategies influence downstream performance when\
  \ assessing data quality. In this work, we conduct the first comprehensive side-by-side\
  \ analysis of two prominent open post-training datasets: Tulu-3-SFT-Mix and SmolTalk.\
  \ Using the Magpie framework, we annotate each sample with detailed quality metrics,\
  \ including turn structure (single-turn vs. multi-turn), task category, input quality,\
  \ and response quality, and we derive statistics that reveal structural and qualitative\
  \ similarities and differences between the two datasets. Based on these insights,\
  \ we design a principled curation recipe that produces a new data mixture, TuluTalk,\
  \ which contains 14% fewer samples than either source dataset while matching or\
  \ exceeding their performance on key benchmarks. Our findings offer actionable insights\
  \ for constructing more effective post-training datasets that improve model performance\
  \ within practical resource limits. To support future research, we publicly release\
  \ both the annotated source datasets and our curated TuluTalk mixture."
pubDate: Tue, 10 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.06522
---

Computer Science > Computation and Language
[Submitted on 6 Jun 2025]
Title:Fixing It in Post: A Comparative Study of LLM Post-Training Data Quality and Model Performance
View PDFAbstract:Recent work on large language models (LLMs) has increasingly focused on post-training and alignment with datasets curated to enhance instruction following, world knowledge, and specialized skills. However, most post-training datasets used in leading open- and closed-source LLMs remain inaccessible to the public, with limited information about their construction process. This lack of transparency has motivated the recent development of open-source post-training corpora. While training on these open alternatives can yield performance comparable to that of leading models, systematic comparisons remain challenging due to the significant computational cost of conducting them rigorously at scale, and are therefore largely absent. As a result, it remains unclear how specific samples, task types, or curation strategies influence downstream performance when assessing data quality. In this work, we conduct the first comprehensive side-by-side analysis of two prominent open post-training datasets: Tulu-3-SFT-Mix and SmolTalk. Using the Magpie framework, we annotate each sample with detailed quality metrics, including turn structure (single-turn vs. multi-turn), task category, input quality, and response quality, and we derive statistics that reveal structural and qualitative similarities and differences between the two datasets. Based on these insights, we design a principled curation recipe that produces a new data mixture, TuluTalk, which contains 14% fewer samples than either source dataset while matching or exceeding their performance on key benchmarks. Our findings offer actionable insights for constructing more effective post-training datasets that improve model performance within practical resource limits. To support future research, we publicly release both the annotated source datasets and our curated TuluTalk mixture.
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