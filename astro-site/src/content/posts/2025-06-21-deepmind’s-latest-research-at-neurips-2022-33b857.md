---
title: "DeepMind’s latest research at NeurIPS 2022"
description: "NeurIPS is the world’s largest conference in artificial intelligence (AI) and machine learning (ML), and we’re proud to support the event as Diamond sponsors, helping foster the exchange of research advances in the AI and ML community. Teams from across DeepMind are presenting 47 papers, including 35 external collaborations in virtual panels and poster sessions."
summary: "NeurIPS is the world’s largest conference in artificial intelligence (AI) and machine learning (ML), and we’re proud to"
pubDate: "Fri, 25 Nov 2022 00:00:00 +0000"
source: "DeepMind Blog"
url: "https://deepmind.google/discover/blog/deepminds-latest-research-at-neurips-2022/"
thumbnail: "https://lh3.googleusercontent.com/MFZKdGWHOzJ6nM8NufhIfpts0R-v9D4jQqnC416FT8ArwmNC2Ztke2S50WVtUhO0g1u8AGmYEyWMDC7LO0a16ydHBMei9GmJO4NjykhpLKw1TVtd4Mg=w528-h297-n-nu-rw"
---

Research
DeepMind’s latest research at NeurIPS 2022
Advancing best-in-class large models, compute-optimal RL agents, and more transparent, ethical, and fair AI systems
The thirty-sixth International Conference on Neural Information Processing Systems (NeurIPS 2022) is taking place from 28 November - 9 December 2022, as a hybrid event, based in New Orleans, USA.
NeurIPS is the world’s largest conference in artificial intelligence (AI) and machine learning (ML), and we’re proud to support the event as Diamond sponsors, helping foster the exchange of research advances in the AI and ML community.
Teams from across DeepMind are presenting 47 papers, including 35 external collaborations in virtual panels and poster sessions. Here’s a brief introduction to some of the research we’re presenting:
Best-in-class large models
Large models (LMs) – generative AI systems trained on huge amounts of data – have resulted in incredible performances in areas including language, text, audio, and image generation. Part of their success is down to their sheer scale.
However, in Chinchilla, we have created a 70 billion parameter language model that outperforms many larger models, including Gopher. We updated the scaling laws of large models, showing how previously trained models were too large for the amount of training performed. This work already shaped other models that follow these updated rules, creating leaner, better models, and has won an Outstanding Main Track Paper award at the conference.
Building upon Chinchilla and our multimodal models NFNets and Perceiver, we also present Flamingo, a family of few-shot learning visual language models. Handling images, videos and textual data, Flamingo represents a bridge between vision-only and language-only models. A single Flamingo model sets a new state of the art in few-shot learning on a wide range of open-ended multimodal tasks.
And yet, scale and architecture aren’t the only factors that are important for the power of transformer-based models. Data properties also play a significant role, which we discuss in a presentation on data properties that promote in-context learning in transformer models.
Optimising reinforcement learning
Reinforcement learning (RL) has shown great promise as an approach to creating generalised AI systems that can address a wide range of complex tasks. It has led to breakthroughs in many domains from Go to mathematics, and we’re always looking for ways to make RL agents smarter and leaner.
We introduce a new approach that boosts the decision-making abilities of RL agents in a compute-efficient way by drastically expanding the scale of information available for their retrieval.
We’ll also showcase a conceptually simple yet general approach for curiosity-driven exploration in visually complex environments – an RL agent called BYOL-Explore. It achieves superhuman performance while being robust to noise and being much simpler than prior work.
Algorithmic advances
From compressing data to running simulations for predicting the weather, algorithms are a fundamental part of modern computing. And so, incremental improvements can have an enormous impact when working at scale, helping save energy, time, and money.
We share a radically new and highly scalable method for the automatic configuration of computer networks, based on neural algorithmic reasoning, showing that our highly flexible approach is up to 490 times faster than the current state of the art, while satisfying the majority of the input constraints.
During the same session, we also present a rigorous exploration of the previously theoretical notion of “algorithmic alignment”, highlighting the nuanced relationship between graph neural networks and dynamic programming, and how best to combine them for optimising out-of-distribution performance.
Pioneering responsibly
At the heart of DeepMind’s mission is our commitment to act as responsible pioneers in the field of AI. We’re committed to developing AI systems that are transparent, ethical, and fair.
Explaining and understanding the behaviour of complex AI systems is an essential part of creating fair, transparent, and accurate systems. We offer a set of desiderata that capture those ambitions, and describe a practical way to meet them, which involves training an AI system to build a causal model of itself, enabling it to explain its own behaviour in a meaningful way.
To act safely and ethically in the world, AI agents must be able to reason about harm and avoid harmful actions. We’ll introduce collaborative work on a novel statistical measure called counterfactual harm, and demonstrate how it overcomes problems with standard approaches to avoid pursuing harmful policies.
Finally, we're presenting our new paper which proposes ways to diagnose and mitigate failures in model fairness caused by distribution shifts, showing how important these issues are for the deployment of safe ML technologies in healthcare settings.
See the full range of our work at NeurIPS 2022 here.