---
title: How undesired goals can arise with correct rewards
description: 'As we build increasingly advanced artificial intelligence (AI) systems,
  we want to make sure they don’t pursue undesired goals. Such behaviour in an AI
  agent is often the result of specification gaming – exploiting a poor choice of
  what they are rewarded for. In our latest paper, we explore a more subtle mechanism
  by which AI systems may unintentionally learn to pursue undesired goals: goal misgeneralisation
  (GMG). GMG occurs when a system''s capabilities generalise successfully but its
  goal does not generalise as desired, so the system competently pursues the wrong
  goal. Crucially, in contrast to specification gaming, GMG can occur even when the
  AI system is trained with a correct specification.'
pubDate: Fri, 07 Oct 2022 00:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/how-undesired-goals-can-arise-with-correct-rewards/
---

Research
How undesired goals can arise with correct rewards
Exploring examples of goal misgeneralisation – where an AI system's capabilities generalise but its goal doesn't
As we build increasingly advanced artificial intelligence (AI) systems, we want to make sure they don’t pursue undesired goals. Such behaviour in an AI agent is often the result of specification gaming – exploiting a poor choice of what they are rewarded for. In our latest paper, we explore a more subtle mechanism by which AI systems may unintentionally learn to pursue undesired goals: goal misgeneralisation (GMG).
GMG occurs when a system's capabilities generalise successfully but its goal does not generalise as desired, so the system competently pursues the wrong goal. Crucially, in contrast to specification gaming, GMG can occur even when the AI system is trained with a correct specification.
Our earlier work on cultural transmission led to an example of GMG behaviour that we didn’t design. An agent (the blue blob, below) must navigate around its environment, visiting the coloured spheres in the correct order. During training, there is an “expert” agent (the red blob) that visits the coloured spheres in the correct order. The agent learns that following the red blob is a rewarding strategy.
Unfortunately, while the agent performs well during training, it does poorly when, after training, we replace the expert with an “anti-expert” that visits the spheres in the wrong order.
Even though the agent can observe that it is getting negative reward, the agent does not pursue the desired goal to “visit the spheres in the correct order” and instead competently pursues the goal “follow the red agent”.
GMG is not limited to reinforcement learning environments like this one. In fact, it can occur with any learning system, including the “few-shot learning” of large language models (LLMs). Few-shot learning approaches aim to build accurate models with less training data.
We prompted one LLM, Gopher, to evaluate linear expressions involving unknown variables and constants, such as x+y-3. To solve these expressions, Gopher must first ask about the values of unknown variables. We provide it with ten training examples, each involving two unknown variables.
At test time, the model is asked questions with zero, one or three unknown variables. Although the model generalises correctly to expressions with one or three unknown variables, when there are no unknowns, it nevertheless asks redundant questions like “What’s 6?”. The model always queries the user at least once before giving an answer, even when it is not necessary.
Within our paper, we provide additional examples in other learning settings.
Addressing GMG is important to aligning AI systems with their designers' goals simply because it is a mechanism by which an AI system may misfire. This will be especially critical as we approach artificial general intelligence (AGI).
Consider two possible types of AGI systems:
- A1: Intended model. This AI system does what its designers intend it to do.
- A2: Deceptive model. This AI system pursues some undesired goal, but (by assumption) is also smart enough to know that it will be penalised if it behaves in ways contrary to its designer's intentions.
Since A1 and A2 will exhibit the same behaviour during training, the possibility of GMG means that either model could take shape, even with a specification that only rewards intended behaviour. If A2 is learned, it would try to subvert human oversight in order to enact its plans towards the undesired goal.
Our research team would be happy to see follow-up work investigating how likely it is for GMG to occur in practice, and possible mitigations. In our paper, we suggest some approaches, including mechanistic interpretability and recursive evaluation, both of which we are actively working on.
We’re currently collecting examples of GMG in this publicly available spreadsheet. If you have come across goal misgeneralisation in AI research, we invite you to submit examples here.