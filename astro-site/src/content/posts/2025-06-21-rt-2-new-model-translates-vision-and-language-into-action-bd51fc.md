---
title: 'RT-2: New model translates vision and language into action'
description: Robotic Transformer 2 (RT-2) is a novel vision-language-action (VLA)
  model that learns from both web and robotics data, and translates this knowledge
  into generalised instructions for robotic control.
summary: 'Robotic Transformer 2 (RT-2) is a novel vision-language-action (VLA) model
  that learns from both web and robotics data, '
pubDate: Fri, 28 Jul 2023 00:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/rt-2-new-model-translates-vision-and-language-into-action/
thumbnail: https://lh3.googleusercontent.com/ZduBtQRn2mrvSfNqkixe2XktBREieIhekS7NcboCn0E76gFVckUwNLZw74EJ5jIndzxbRoCqCY47iW1-eGi5c_JJV1DFyTmkS91vMnRalgT0rih125s=w528-h297-n-nu-rw
---

Research
RT-2: New model translates vision and language into action
Robotic Transformer 2 (RT-2) is a novel vision-language-action (VLA) model that learns from both web and robotics data, and translates this knowledge into generalised instructions for robotic control
High-capacity vision-language models (VLMs) are trained on web-scale datasets, making these systems remarkably good at recognising visual or language patterns and operating across different languages. But for robots to achieve a similar level of competency, they would need to collect robot data, first-hand, across every object, environment, task, and situation.
In our paper, we introduce Robotic Transformer 2 (RT-2), a novel vision-language-action (VLA) model that learns from both web and robotics data, and translates this knowledge into generalised instructions for robotic control, while retaining web-scale capabilities.
This work builds upon Robotic Transformer 1 (RT-1), a model trained on multi-task demonstrations, which can learn combinations of tasks and objects seen in the robotic data. More specifically, our work used RT-1 robot demonstration data that was collected with 13 robots over 17 months in an office kitchen environment.
RT-2 shows improved generalisation capabilities and semantic and visual understanding beyond the robotic data it was exposed to. This includes interpreting new commands and responding to user commands by performing rudimentary reasoning, such as reasoning about object categories or high-level descriptions.
We also show that incorporating chain-of-thought reasoning allows RT-2 to perform multi-stage semantic reasoning, like deciding which object could be used as an improvised hammer (a rock), or which type of drink is best for a tired person (an energy drink).
Adapting VLMs for robotic control
RT-2 builds upon VLMs that take one or more images as input, and produces a sequence of tokens that, conventionally, represent natural language text. Such VLMs have been successfully trained on web-scale data to perform tasks, like visual question answering, image captioning, or object recognition. In our work, we adapt Pathways Language and Image model (PaLI-X) and Pathways Language model Embodied (PaLM-E) to act as the backbones of RT-2.
To control a robot, it must be trained to output actions. We address this challenge by representing actions as tokens in the model’s output – similar to language tokens – and describe actions as strings that can be processed by standard natural language tokenizers, shown here:
The string starts with a flag that indicates whether to continue or terminate the current episode, without executing the subsequent commands, and follows with the commands to change position and rotation of the end-effector, as well as the desired extension of the robot gripper.
We use the same discretised version of robot actions as in RT-1, and show that converting it to a string representation makes it possible to train VLM models on robotic data – as the input and output spaces of such models don’t need to be changed.
Generalisation and emergent skills
We performed a series of qualitative and quantitative experiments on our RT-2 models, on over 6,000 robotic trials. Exploring RT-2’s emergent capabilities, we first searched for tasks that would require combining knowledge from web-scale data and the robot’s experience, and then defined three categories of skills: symbol understanding, reasoning, and human recognition.
Each task required understanding visual-semantic concepts and the ability to perform robotic control to operate on these concepts. Commands such as “pick up the bag about to fall off the table” or “move banana to the sum of two plus one” – where the robot is asked to perform a manipulation task on objects or scenarios never seen in the robotic data – required knowledge translated from web-based data to operate.
Across all categories, we observed increased generalisation performance (more than 3x improvement) compared to previous baselines, such as previous RT-1 models and models like Visual Cortex (VC-1), which were pre-trained on large visual datasets.
We also performed a series of quantitative evaluations, beginning with the original RT-1 tasks, for which we have examples in the robot data, and continued with varying degrees of previously unseen objects, backgrounds, and environments by the robot that required the robot to learn generalisation from VLM pre-training.
RT-2 retained the performance on the original tasks seen in robot data and improved performance on previously unseen scenarios by the robot, from RT-1’s 32% to 62%, showing the considerable benefit of the large-scale pre-training.
Additionally, we observed significant improvements over baselines pre-trained on visual-only tasks, such as VC-1 and Reusable Representations for Robotic Manipulation (R3M), and algorithms that use VLMs for object identification, such as Manipulation of Open-World Objects (MOO).
Evaluating our model on the open-source Language Table suite of robotic tasks, we achieved a success rate of 90% in simulation, substantially improving over the previous baselines including BC-Z (72%), RT-1 (74%), and LAVA (77%).
Then we evaluated the same model in the real world (since it was trained on simulation and real data), and demonstrated its ability to generalise to novel objects, as shown below, where none of the objects except the blue cube were present in the training dataset.
Inspired by chain-of-thought prompting methods used in LLMs, we probed our models to combine robotic control with chain-of-thought reasoning to enable learning long-horizon planning and low-level skills within a single model.
In particular, we fine-tuned a variant of RT-2 for just a few hundred gradient steps to increase its ability to use language and actions jointly. Then we augmented the data to include an additional “Plan” step, first describing the purpose of the action that the robot is about to take in natural language, followed by “Action” and the action tokens. Here we show an example of such reasoning and the robot’s resulting behaviour:
With this process, RT-2 can perform more involved commands that require reasoning about intermediate steps needed to accomplish a user instruction. Thanks to its VLM backbone, RT-2 can also plan from both image and text commands, enabling visually grounded planning, whereas current plan-and-act approaches like SayCan cannot see the real world and rely entirely on language.
Advancing robotic control
RT-2 shows that vision-language models (VLMs) can be transformed into powerful vision-language-action (VLA) models, which can directly control a robot by combining VLM pre-training with robotic data.
With two instantiations of VLAs based on PaLM-E and PaLI-X, RT-2 results in highly-improved robotic policies, and, more importantly, leads to significantly better generalisation performance and emergent capabilities, inherited from web-scale vision-language pre-training.
RT-2 is not only a simple and effective modification over existing VLM models, but also shows the promise of building a general-purpose physical robot that can reason, problem solve, and interpret information for performing a diverse range of tasks in the real-world.
Acknowledgements
We would like to thank the co-authors of this work: Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar, Xi Chen, Krzysztof Choromanski, Tianli Ding, Danny Driess, Avinava Dubey, Chelsea Finn, Pete Florence, Chuyuan Fu, Montse Gonzalez Arenas, Keerthana Gopalakrishnan, Kehang Han, Karol Hausman, Alexander Herzog, Jasmine Hsu, Brian Ichter, Alex Irpan, Nikhil Joshi, Ryan Julian, Dmitry Kalashnikov, Yuheng Kuang, Isabel Leal, Lisa Lee, Tsang-Wei Edward Lee, Sergey Levine, Yao Lu, Henryk Michalewski, Igor Mordatch, Karl Pertsch, Kanishka Rao, Krista Reymann, Michael Ryoo, Grecia Salazar, Pannag Sanketi, Pierre Sermanet, Jaspiar Singh, Anikait Singh, Radu Soricut, Huong Tran, Vincent Vanhoucke, Quan Vuong, Ayzaan Wahid, Stefan Welker, Paul Wohlhart, Jialin Wu, Fei Xia, Ted Xiao, Peng Xu, Sichun Xu, Tianhe Yu and Brianna Zitkovich for their contributions to the project and Fred Alcober, Jodi Lynn Andres, Carolina Parada, Joseph Dabis, Rochelle Dela Cruz, Jessica Gomez, Gavin Gonzalez, John Guilyard, Tomas Jackson, Jie Tan, Scott Lehrer, Dee M, Utsav Malla, Sarah Nguyen, Jane Park, Emily Perez, Elio Prado, Jornell Quiambao, Clayton Tan, Jodexty Therlonge, Eleanor Tomlinson, Wenxuan Zhou, and the greater Google DeepMind team for their help and feedback.