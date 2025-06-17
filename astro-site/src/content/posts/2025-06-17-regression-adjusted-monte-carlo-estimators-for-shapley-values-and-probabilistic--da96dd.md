---
title: Regression-adjusted Monte Carlo Estimators for Shapley Values and Probabilistic
  Values
description: "arXiv:2506.11849v1 Announce Type: cross \nAbstract: With origins in\
  \ game theory, probabilistic values like Shapley values, Banzhaf values, and semi-values\
  \ have emerged as a central tool in explainable AI. They are used for feature attribution,\
  \ data attribution, data valuation, and more. Since all of these values require\
  \ exponential time to compute exactly, research has focused on efficient approximation\
  \ methods using two techniques: Monte Carlo sampling and linear regression formulations.\
  \ In this work, we present a new way of combining both of these techniques. Our\
  \ approach is more flexible than prior algorithms, allowing for linear regression\
  \ to be replaced with any function family whose probabilistic values can be computed\
  \ efficiently. This allows us to harness the accuracy of tree-based models like\
  \ XGBoost, while still producing unbiased estimates. From experiments across eight\
  \ datasets, we find that our methods give state-of-the-art performance for estimating\
  \ probabilistic values. For Shapley values, the error of our methods can be $6.5\\\
  times$ lower than Permutation SHAP (the most popular Monte Carlo method), $3.8\\\
  times$ lower than Kernel SHAP (the most popular linear regression method), and $2.6\\\
  times$ lower than Leverage SHAP (the prior state-of-the-art Shapley value estimator).\
  \ For more general probabilistic values, we can obtain error $215\\times$ lower\
  \ than the best estimator from prior work."
pubDate: Mon, 16 Jun 2025 00:00:00 -0400
source: arXiv AI
tags:
- arxiv
- ai
- research
url: https://arxiv.org/abs/2506.11849
---

Computer Science > Machine Learning
[Submitted on 13 Jun 2025]
Title:Regression-adjusted Monte Carlo Estimators for Shapley Values and Probabilistic Values
View PDF HTML (experimental)Abstract:With origins in game theory, probabilistic values like Shapley values, Banzhaf values, and semi-values have emerged as a central tool in explainable AI. They are used for feature attribution, data attribution, data valuation, and more. Since all of these values require exponential time to compute exactly, research has focused on efficient approximation methods using two techniques: Monte Carlo sampling and linear regression formulations. In this work, we present a new way of combining both of these techniques. Our approach is more flexible than prior algorithms, allowing for linear regression to be replaced with any function family whose probabilistic values can be computed efficiently. This allows us to harness the accuracy of tree-based models like XGBoost, while still producing unbiased estimates. From experiments across eight datasets, we find that our methods give state-of-the-art performance for estimating probabilistic values. For Shapley values, the error of our methods can be $6.5\times$ lower than Permutation SHAP (the most popular Monte Carlo method), $3.8\times$ lower than Kernel SHAP (the most popular linear regression method), and $2.6\times$ lower than Leverage SHAP (the prior state-of-the-art Shapley value estimator). For more general probabilistic values, we can obtain error $215\times$ lower than the best estimator from prior work.
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