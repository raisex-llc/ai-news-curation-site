---
title: "RoboCat: A self-improving robotic agent"
description: "Robots are quickly becoming part of our everyday lives, but they’re often only programmed to perform specific tasks well. While harnessing recent advances in AI could lead to robots that could help in many more ways, progress in building general-purpose robots is slower in part because of the time needed to collect real-world training data. Our latest paper introduces a self-improving AI agent for robotics, RoboCat, that learns to perform a variety of tasks across different arms, and then self-generates new training data to improve its technique."
summary: "Robots are quickly becoming part of our everyday lives, but they’re often only programmed to perform specific tasks well"
pubDate: "Tue, 20 Jun 2023 00:00:00 +0000"
source: "DeepMind Blog"
url: "https://deepmind.google/discover/blog/robocat-a-self-improving-robotic-agent/"
thumbnail: "https://lh3.googleusercontent.com/Rz9Xv4TXuTe-eO2UDUD6kDElDB5wDE2b2hEU1liUAi0AyiTwQ81mLMigXg3kueWrHoqeNctRO5-EMprZDRnXcaL8snfqHwDqgQpw_qB3VEvoO_jCCzI=w528-h297-n-nu-rw"
---

Research
RoboCat: A self-improving robotic agent
New foundation agent learns to operate different robotic arms, solves tasks from as few as 100 demonstrations, and improves from self-generated data.
Robots are quickly becoming part of our everyday lives, but they’re often only programmed to perform specific tasks well. While harnessing recent advances in AI could lead to robots that could help in many more ways, progress in building general-purpose robots is slower in part because of the time needed to collect real-world training data.
Our latest paper introduces a self-improving AI agent for robotics, RoboCat, that learns to perform a variety of tasks across different arms, and then self-generates new training data to improve its technique.
Previous research has explored how to develop robots that can learn to multi-task at scale and combine the understanding of language models with the real-world capabilities of a helper robot. RoboCat is the first agent to solve and adapt to multiple tasks and do so across different, real robots.
RoboCat learns much faster than other state-of-the-art models. It can pick up a new task with as few as 100 demonstrations because it draws from a large and diverse dataset. This capability will help accelerate robotics research, as it reduces the need for human-supervised training, and is an important step towards creating a general-purpose robot.
How RoboCat improves itself
RoboCat is based on our multimodal model Gato (Spanish for “cat”), which can process language, images, and actions in both simulated and physical environments. We combined Gato’s architecture with a large training dataset of sequences of images and actions of various robot arms solving hundreds of different tasks.
After this first round of training, we launched RoboCat into a “self-improvement” training cycle with a set of previously unseen tasks. The learning of each new task followed five steps:
- Collect 100-1000 demonstrations of a new task or robot, using a robotic arm controlled by a human.
- Fine-tune RoboCat on this new task/arm, creating a specialised spin-off agent.
- The spin-off agent practises on this new task/arm an average of 10,000 times, generating more training data.
- Incorporate the demonstration data and self-generated data into RoboCat’s existing training dataset.
- Train a new version of RoboCat on the new training dataset.
The combination of all this training means the latest RoboCat is based on a dataset of millions of trajectories, from both real and simulated robotic arms, including self-generated data. We used four different types of robots and many robotic arms to collect vision-based data representing the tasks RoboCat would be trained to perform.
Learning to operate new robotic arms and solve more complex tasks
With RoboCat’s diverse training, it learned to operate different robotic arms within a few hours. While it had been trained on arms with two-pronged grippers, it was able to adapt to a more complex arm with a three-fingered gripper and twice as many controllable inputs.
After observing 1000 human-controlled demonstrations, collected in just hours, RoboCat could direct this new arm dexterously enough to pick up gears successfully 86% of the time. With the same level of demonstrations, it could adapt to solve tasks that combined precision and understanding, such as removing the correct fruit from a bowl and solving a shape-matching puzzle, which are necessary for more complex control.
The self-improving generalist
RoboCat has a virtuous cycle of training: the more new tasks it learns, the better it gets at learning additional new tasks. The initial version of RoboCat was successful just 36% of the time on previously unseen tasks, after learning from 500 demonstrations per task. But the latest RoboCat, which had trained on a greater diversity of tasks, more than doubled this success rate on the same tasks.
These improvements were due to RoboCat's growing breadth of experience, similar to how people develop a more diverse range of skills as they deepen their learning in a given domain. RoboCat’s ability to independently learn skills and rapidly self-improve, especially when applied to different robotic devices, will help pave the way toward a new generation of more helpful, general-purpose robotic agents.