---
title: Researchers teach LLMs to solve complex planning challenges
description: This new framework leverages a model’s reasoning abilities to create
  a “smart assistant” that finds the optimal solution to multistep problems.
summary: This new framework leverages a model’s reasoning abilities to create a “smart
  assistant” that finds the optimal solution
pubDate: Wed, 02 Apr 2025 00:00:00 -0400
source: MIT
tags:
- mit
- ai
url: https://news.mit.edu/2025/researchers-teach-llms-to-solve-complex-planning-challenges-0402
---

Audio
Imagine a coffee company trying to optimize its supply chain. The company sources beans from three suppliers, roasts them at two facilities into either dark or light coffee, and then ships the roasted coffee to three retail locations. The suppliers have different fixed capacity, and roasting costs and shipping costs vary from place to place.
The company seeks to minimize costs while meeting a 23 percent increase in demand.
Wouldn’t it be easier for the company to just ask ChatGPT to come up with an optimal plan? In fact, for all their incredible capabilities, large language models (LLMs) often perform poorly when tasked with directly solving such complicated planning problems on their own.
Rather than trying to change the model to make an LLM a better planner, MIT researchers took a different approach. They introduced a framework that guides an LLM to break down the problem like a human would, and then automatically solve it using a powerful software tool.
A user only needs to describe the problem in natural language — no task-specific examples are needed to train or prompt the LLM. The model encodes a user’s text prompt into a format that can be unraveled by an optimization solver designed to efficiently crack extremely tough planning challenges.
During the formulation process, the LLM checks its work at multiple intermediate steps to make sure the plan is described correctly to the solver. If it spots an error, rather than giving up, the LLM tries to fix the broken part of the formulation.
When the researchers tested their framework on nine complex challenges, such as minimizing the distance warehouse robots must travel to complete tasks, it achieved an 85 percent success rate, whereas the best baseline only achieved a 39 percent success rate.
The versatile framework could be applied to a range of multistep planning tasks, such as scheduling airline crews or managing machine time in a factory.
“Our research introduces a framework that essentially acts as a smart assistant for planning problems. It can figure out the best plan that meets all the needs you have, even if the rules are complicated or unusual,” says Yilun Hao, a graduate student in the MIT Laboratory for Information and Decision Systems (LIDS) and lead author of a paper on this research.
She is joined on the paper by Yang Zhang, a research scientist at the MIT-IBM Watson AI Lab; and senior author Chuchu Fan, an associate professor of aeronautics and astronautics and LIDS principal investigator. The research will be presented at the International Conference on Learning Representations.
Optimization 101
The Fan group develops algorithms that automatically solve what are known as combinatorial optimization problems. These vast problems have many interrelated decision variables, each with multiple options that rapidly add up to billions of potential choices.
Humans solve such problems by narrowing them down to a few options and then determining which one leads to the best overall plan. The researchers’ algorithmic solvers apply the same principles to optimization problems that are far too complex for a human to crack.
But the solvers they develop tend to have steep learning curves and are typically only used by experts.
“We thought that LLMs could allow nonexperts to use these solving algorithms. In our lab, we take a domain expert’s problem and formalize it into a problem our solver can solve. Could we teach an LLM to do the same thing?” Fan says.
Using the framework the researchers developed, called LLM-Based Formalized Programming (LLMFP), a person provides a natural language description of the problem, background information on the task, and a query that describes their goal.
Then LLMFP prompts an LLM to reason about the problem and determine the decision variables and key constraints that will shape the optimal solution.
LLMFP asks the LLM to detail the requirements of each variable before encoding the information into a mathematical formulation of an optimization problem. It writes code that encodes the problem and calls the attached optimization solver, which arrives at an ideal solution.
“It is similar to how we teach undergrads about optimization problems at MIT. We don’t teach them just one domain. We teach them the methodology,” Fan adds.
As long as the inputs to the solver are correct, it will give the right answer. Any mistakes in the solution come from errors in the formulation process.
To ensure it has found a working plan, LLMFP analyzes the solution and modifies any incorrect steps in the problem formulation. Once the plan passes this self-assessment, the solution is described to the user in natural language.
Perfecting the plan
This self-assessment module also allows the LLM to add any implicit constraints it missed the first time around, Hao says.
For instance, if the framework is optimizing a supply chain to minimize costs for a coffeeshop, a human knows the coffeeshop can’t ship a negative amount of roasted beans, but an LLM might not realize that.
The self-assessment step would flag that error and prompt the model to fix it.
“Plus, an LLM can adapt to the preferences of the user. If the model realizes a particular user does not like to change the time or budget of their travel plans, it can suggest changing things that fit the user’s needs,” Fan says.
In a series of tests, their framework achieved an average success rate between 83 and 87 percent across nine diverse planning problems using several LLMs. While some baseline models were better at certain problems, LLMFP achieved an overall success rate about twice as high as the baseline techniques.
Unlike these other approaches, LLMFP does not require domain-specific examples for training. It can find the optimal solution to a planning problem right out of the box.
In addition, the user can adapt LLMFP for different optimization solvers by adjusting the prompts fed to the LLM.
“With LLMs, we have an opportunity to create an interface that allows people to use tools from other domains to solve problems in ways they might not have been thinking about before,” Fan says.
In the future, the researchers want to enable LLMFP to take images as input to supplement the descriptions of a planning problem. This would help the framework solve tasks that are particularly hard to fully describe with natural language.
This work was funded, in part, by the Office of Naval Research and the MIT-IBM Watson AI Lab.