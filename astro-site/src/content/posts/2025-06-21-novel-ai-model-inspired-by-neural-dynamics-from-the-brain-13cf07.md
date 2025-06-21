---
title: Novel AI model inspired by neural dynamics from the brain
description: New type of “state-space model” leverages principles of harmonic oscillators.
summary: New type of “state-space model” leverages principles of harmonic oscillators.
pubDate: Fri, 02 May 2025 15:30:00 -0400
source: MIT
tags:
- mit
- ai
url: https://news.mit.edu/2025/novel-ai-model-inspired-neural-dynamics-from-brain-0502
---

Researchers from MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL) have developed a novel artificial intelligence model inspired by neural oscillations in the brain, with the goal of significantly advancing how machine learning algorithms handle long sequences of data.
AI often struggles with analyzing complex information that unfolds over long periods of time, such as climate trends, biological signals, or financial data. One new type of AI model, called "state-space models," has been designed specifically to understand these sequential patterns more effectively. However, existing state-space models often face challenges — they can become unstable or require a significant amount of computational resources when processing long data sequences.
To address these issues, CSAIL researchers T. Konstantin Rusch and Daniela Rus have developed what they call “linear oscillatory state-space models” (LinOSS), which leverage principles of forced harmonic oscillators — a concept deeply rooted in physics and observed in biological neural networks. This approach provides stable, expressive, and computationally efficient predictions without overly restrictive conditions on the model parameters.
"Our goal was to capture the stability and efficiency seen in biological neural systems and translate these principles into a machine learning framework," explains Rusch. "With LinOSS, we can now reliably learn long-range interactions, even in sequences spanning hundreds of thousands of data points or more."
The LinOSS model is unique in ensuring stable prediction by requiring far less restrictive design choices than previous methods. Moreover, the researchers rigorously proved the model’s universal approximation capability, meaning it can approximate any continuous, causal function relating input and output sequences.
Empirical testing demonstrated that LinOSS consistently outperformed existing state-of-the-art models across various demanding sequence classification and forecasting tasks. Notably, LinOSS outperformed the widely-used Mamba model by nearly two times in tasks involving sequences of extreme length.
Recognized for its significance, the research was selected for an oral presentation at ICLR 2025 — an honor awarded to only the top 1 percent of submissions. The MIT researchers anticipate that the LinOSS model could significantly impact any fields that would benefit from accurate and efficient long-horizon forecasting and classification, including health-care analytics, climate science, autonomous driving, and financial forecasting.
"This work exemplifies how mathematical rigor can lead to performance breakthroughs and broad applications," Rus says. "With LinOSS, we’re providing the scientific community with a powerful tool for understanding and predicting complex systems, bridging the gap between biological inspiration and computational innovation."
The team imagines that the emergence of a new paradigm like LinOSS will be of interest to machine learning practitioners to build upon. Looking ahead, the researchers plan to apply their model to an even wider range of different data modalities. Moreover, they suggest that LinOSS could provide valuable insights into neuroscience, potentially deepening our understanding of the brain itself.
Their work was supported by the Swiss National Science Foundation, the Schmidt AI2050 program, and the U.S. Department of the Air Force Artificial Intelligence Accelerator.