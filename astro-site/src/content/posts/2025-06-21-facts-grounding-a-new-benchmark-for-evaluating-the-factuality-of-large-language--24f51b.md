---
title: 'FACTS Grounding: A new benchmark for evaluating the factuality of large language
  models'
description: Our comprehensive benchmark and online leaderboard offer a much-needed
  measure of how accurately LLMs ground their responses in provided source material
  and avoid hallucinations
summary: Our comprehensive benchmark and online leaderboard offer a much-needed measure
  of how accurately LLMs ground their respo
pubDate: Tue, 17 Dec 2024 15:29:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/facts-grounding-a-new-benchmark-for-evaluating-the-factuality-of-large-language-models/
thumbnail: https://lh3.googleusercontent.com/PNlhxhf4LKLRCezIt7Ap358F91-vbK5dLp56Ak1FejpCZh3YTp6jGqIDJm9c0iAtx8Y73MCTu279c1k2GZkM2qXXaqx315NSOaSiU0y0ATMK2c2Hyw=w528-h297-n-nu-rw
---

Responsibility & Safety
FACTS Grounding: A new benchmark for evaluating the factuality of large language models
Our comprehensive benchmark and online leaderboard offer a much-needed measure of how accurately LLMs ground their responses in provided source material and avoid hallucinations
Large language models (LLMs) are transforming how we access information, yet their grip on factual accuracy remains imperfect. They can “hallucinate” false information, particularly when given complex inputs. In turn, this can erode trust in LLMs and limit their applications in the real world.
Today, we’re introducing FACTS Grounding, a comprehensive benchmark for evaluating the ability of LLMs to generate responses that are not only factually accurate with respect to given inputs, but also sufficiently detailed to provide satisfactory answers to user queries.
We hope our benchmark will spur industry-wide progress on factuality and grounding. To track progress, we’re also launching the FACTS leaderboard on Kaggle. We’ve already tested leading LLMs using FACTS Grounding and have populated the initial leaderboard with their grounding scores. We will maintain and update the leaderboard as the field advances.
FACTS Grounding dataset
To accurately evaluate the factuality and grounding of any given LLM, the FACTS Grounding dataset comprises 1,719 examples, each carefully crafted to require long-form responses grounded in the context document provided. Each example comprises a document, a system instruction requiring the LLM to exclusively reference the provided document, and an accompanying user request.
All examples are divided into a "public" set (860) and a "private" (859) held out set. We are releasing the public set today so anyone can use it to evaluate an LLM. Of course, we know that issues of benchmark contamination and leaderboard hacking are important to protect against, so following standard industry practice, we are keeping the private evaluation set held out. The FACTS leaderboard scores are the average performance across both public and private sets.
To ensure a diversity of inputs, the FACTS Grounding examples include documents with a variety of lengths, up to a maximum of 32,000 tokens (roughly 20,000 words), covering domains such as finance, technology, retail, medicine, and law. The user requests are similarly wide ranging, including requests for summarization, Q&A generation, and rewriting tasks. We did not include any examples that could require creativity, mathematics, or complex reasoning – capabilities which might require the model to apply more advanced reasoning in addition to grounding.
Collective judgement by leading LLMs
To succeed on a given example, an LLM must synthesize the complex information in the document and generate a long-form response that is both a comprehensive answer to the user request and fully attributable to that document.
FACTS Grounding evaluates model responses automatically using three frontier LLM judges — namely Gemini 1.5 Pro, GPT-4o, and Claude 3.5 Sonnet. We selected a combination of different judges to mitigate any potential bias of a judge giving higher scores to the responses produced by a member of its own model family. The automatic judge models were comprehensively evaluated against a held-out test set to find the best performing judging prompt templates and to verify agreement with human raters.
Each FACTS Grounding example is judged in two phases. First, responses are evaluated for eligibility, and disqualified if they don’t sufficiently address the user’s request. Second, responses are judged as factually accurate if they are fully grounded in information contained in the provided document, with no hallucinations.
With the eligibility and grounding accuracy of a given LLM response evaluated separately by multiple AI judge models, the results are then aggregated to determine if the LLM has dealt with the example successfully. The final score for the overall grounding task is the average of all judge models’ scores across all examples. Find more details of our FACTS Grounding evaluation methodology in our paper.
FACTS Grounding will continue to evolve
We are mindful that benchmarks can be quickly overtaken by progress, so this launch of our FACTS Grounding benchmark and leaderboard is just the beginning. Factuality and grounding are among the key factors that will shape the future success and usefulness of LLMs and broader AI systems, and we aim to grow and iterate FACTS Grounding as the field progresses, continually raising the bar.
We encourage the AI community to engage with FACTS Grounding, evaluate their models on the open set of examples or to submit their models for evaluation. We believe that comprehensive benchmarking methods, coupled with continuous research and development will continue to improve AI systems.
Acknowledgements
FACTS is a collaboration between Google DeepMind and Google Research.
FACTS Grounding was led by: Alon Jacovi, Andrew Wang, Chris Alberti, Connie Tao, Dipanjan Das, Jon Lipovetz, Kate Olszewska, Lukas Haas, Michelle Liu, and Nate Keating.
We are also very grateful for contributions from: Adam Bloniarz, Carl Saroufim, Corey Fry, Dror Marcus, Doron Kukliansky, Gaurav Singh Tomar, James Swirhun, Jinwei Xing, Lily Wang, Madhu Gurumurthy, Michael Aaron, Moran Ambar, Rachana Fellinger, Rui Wang, Zizhao Zhang, and Sasha Goldshtein.
We would also like to thank Avinatan Hassidim, D. Sculley, Fernando Pereira, Koray Kavukcuoglu, Slav Petrov, Ya Xu, and Yossi Matias for their continued support.