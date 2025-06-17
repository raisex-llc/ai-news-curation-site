---
title: 'Unsafe LLM-Based Search: Quantitative Analysis and Mitigation of Safety Risks
  in AI Web Search'
description: "arXiv:2502.04951v3 Announce Type: replace-cross \nAbstract: Recent advancements\
  \ in Large Language Models (LLMs) have significantly enhanced the capabilities of\
  \ AI-Powered Search Engines (AIPSEs), offering precise and efficient responses by\
  \ integrating external databases with pre-existing knowledge. However, we observe\
  \ that these AIPSEs raise risks such as quoting malicious content or citing malicious\
  \ websites, leading to harmful or unverified information dissemination. In this\
  \ study, we conduct the first safety risk quantification on seven production AIPSEs\
  \ by systematically defining the threat model, risk type, and evaluating responses\
  \ to various query types. With data collected from PhishTank, ThreatBook, and LevelBlue,\
  \ our findings reveal that AIPSEs frequently generate harmful content that contains\
  \ malicious URLs even with benign queries (e.g., with benign keywords). We also\
  \ observe that directly querying a URL will increase the number of main risk-inclusive\
  \ responses, while querying with natural language will slightly mitigate such risk.\
  \ Compared to traditional search engines, AIPSEs outperform in both utility and\
  \ safety. We further perform two case studies on online document spoofing and phishing\
  \ to show the ease of deceiving AIPSEs in the real-world setting. To mitigate these\
  \ risks, we develop an agent-based defense with a GPT-4.1-based content refinement\
  \ tool and a URL detector. Our evaluation shows that our defense can effectively\
  \ reduce the risk, with only a minor cost of reducing available information by approximately\
  \ 10.7%. Our research highlights the urgent need for robust safety measures in AIPSEs."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2502.04951
---

Computer Science > Cryptography and Security
[Submitted on 7 Feb 2025 (v1), last revised 13 Jun 2025 (this version, v3)]
Title:Unsafe LLM-Based Search: Quantitative Analysis and Mitigation of Safety Risks in AI Web Search
View PDFAbstract:Recent advancements in Large Language Models (LLMs) have significantly enhanced the capabilities of AI-Powered Search Engines (AIPSEs), offering precise and efficient responses by integrating external databases with pre-existing knowledge. However, we observe that these AIPSEs raise risks such as quoting malicious content or citing malicious websites, leading to harmful or unverified information dissemination. In this study, we conduct the first safety risk quantification on seven production AIPSEs by systematically defining the threat model, risk type, and evaluating responses to various query types. With data collected from PhishTank, ThreatBook, and LevelBlue, our findings reveal that AIPSEs frequently generate harmful content that contains malicious URLs even with benign queries (e.g., with benign keywords). We also observe that directly querying a URL will increase the number of main risk-inclusive responses, while querying with natural language will slightly mitigate such risk. Compared to traditional search engines, AIPSEs outperform in both utility and safety. We further perform two case studies on online document spoofing and phishing to show the ease of deceiving AIPSEs in the real-world setting. To mitigate these risks, we develop an agent-based defense with a GPT-4.1-based content refinement tool and a URL detector. Our evaluation shows that our defense can effectively reduce the risk, with only a minor cost of reducing available information by approximately 10.7%. Our research highlights the urgent need for robust safety measures in AIPSEs.
Submission history
From: Zifan Peng [view email][v1] Fri, 7 Feb 2025 14:15:46 UTC (1,426 KB)
[v2] Sun, 8 Jun 2025 18:33:55 UTC (532 KB)
[v3] Fri, 13 Jun 2025 04:49:36 UTC (1,018 KB)
Current browse context:
cs.CR
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