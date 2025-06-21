---
title: Competitive programming with AlphaCode
description: Solving novel problems and setting a new milestone in competitive programming.
summary: Solving novel problems and setting a new milestone in competitive programming.
pubDate: Thu, 08 Dec 2022 00:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/competitive-programming-with-alphacode/
thumbnail: https://lh3.googleusercontent.com/vQ0Ow6LwCpigfPyTGUhXEfdMBWPyHmaCo7eoQW7bv3QoZXW6EIj18FPiCLI1vlMYlUAOvEXta1KSkl8P2KScquYJb-Dm_QygP9kdlLYkpF4nVyEH=w528-h297-n-nu-rw
---

Research
Competitive programming with AlphaCode
Note: This blog was first published on 2 Feb 2022. Following the paper’s publication in Science on 8 Dec 2022, we’ve made minor updates to the text to reflect this.
Solving novel problems and setting a new milestone in competitive programming
Creating solutions to unforeseen problems is second nature in human intelligence – a result of critical thinking informed by experience. The machine learning community has made tremendous progress in generating and understanding textual data, but advances in problem solving remain limited to relatively simple maths and programming problems, or else retrieving and copying existing solutions.
As part of DeepMind’s mission to solve intelligence, we created a system called AlphaCode that writes computer programs at a competitive level. AlphaCode achieved an estimated rank within the top 54% of participants in programming competitions by solving new problems that require a combination of critical thinking, logic, algorithms, coding, and natural language understanding.
Published on the cover of Science, our paper details AlphaCode, which uses transformer-based language models to generate code at an unprecedented scale, and then smartly filters to a small set of promising programs.
We validated our performance using competitions hosted on Codeforces, a popular platform which hosts regular competitions that attract tens of thousands of participants from around the world who come to test their coding skills. We selected for evaluation 10 recent contests, each newer than our training data. AlphaCode placed at about the level of the median competitor, marking the first time an AI code generation system has reached a competitive level of performance in programming competitions.
To help others build on our results, we’ve released our dataset of competitive programming problems and solutions on GitHub, including extensive tests to ensure the programs that pass these tests are correct — a critical feature current datasets lack. We hope this benchmark will lead to further innovations in problem solving and code generation.
Competitive programming is a popular and challenging activity; hundreds of thousands of programmers participate in coding competitions to gain experience and showcase their skills in fun and collaborative ways. During competitions, participants receive a series of long problem descriptions and a few hours to write programs to solve them.
Typical problems include finding ways to place roads and buildings within certain constraints, or creating strategies to win custom board games. Participants are then ranked mainly based on how many problems they solve. Companies use these competitions as recruiting tools and similar types of problems are common in hiring processes for software engineers.
The problem-solving abilities required to excel at these competitions are beyond the capabilities of existing AI systems. However, by combining advances in large-scale transformer models (that have recently shown promising abilities to generate code) with large-scale sampling and filtering, we’ve made significant progress in the number of problems we can solve. We pre-train our model on selected public GitHub code and fine-tune it on our relatively small competitive programming dataset.
At evaluation time, we create a massive amount of C++ and Python programs for each problem, orders of magnitude larger than previous work. Then we filter, cluster, and rerank those solutions to a small set of 10 candidate programs that we submit for external assessment. This automated system replaces competitors’ trial-and-error process of debugging, compiling, passing tests, and eventually submitting.
With the permission of Codeforces, we evaluated AlphaCode by simulating participation in 10 recent contests. The impressive work of the competitive programming community has created a domain where it’s not possible to solve problems through shortcuts like duplicating solutions seen before or trying out every potentially related algorithm. Instead, our model must create novel and interesting solutions.
Overall, AlphaCode placed at approximately the level of the median competitor. Although far from winning competitions, this result represents a substantial leap in AI problem-solving capabilities and we hope that our results will inspire the competitive programming community.
For artificial intelligence to help humanity, our systems need to be able to develop problem-solving capabilities. AlphaCode ranked within the top 54% in real-world programming competitions, an advancement that demonstrates the potential of deep learning models for tasks that require critical thinking. These models elegantly leverage modern machine learning to express solutions to problems as code, circling back to the symbolic reasoning root of AI from decades ago. And this is only a start.
Our exploration into code generation leaves vast room for improvement and hints at even more exciting ideas that could help programmers improve their productivity and open up the field to people who do not currently write code. We will continue this exploration, and hope that further research will result in tools to enhance programming and bring us closer to a problem-solving AI.
View AlphaCode’s solutions and explore the model at alphacode.deepmind.com