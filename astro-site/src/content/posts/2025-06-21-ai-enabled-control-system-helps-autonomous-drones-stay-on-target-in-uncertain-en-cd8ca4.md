---
title: AI-enabled control system helps autonomous drones stay on target in uncertain
  environments
description: The system automatically learns to adapt to unknown disturbances such
  as gusting winds.
summary: The system automatically learns to adapt to unknown disturbances such as
  gusting winds.
pubDate: Mon, 09 Jun 2025 16:40:00 -0400
source: MIT
tags:
- mit
- ai
url: https://news.mit.edu/2025/ai-enabled-control-system-helps-autonomous-drones-uncertain-environments-0609
---

An autonomous drone carrying water to help extinguish a wildfire in the Sierra Nevada might encounter swirling Santa Ana winds that threaten to push it off course. Rapidly adapting to these unknown disturbances inflight presents an enormous challenge for the drone’s flight control system.
To help such a drone stay on target, MIT researchers developed a new, machine learning-based adaptive control algorithm that could minimize its deviation from its intended trajectory in the face of unpredictable forces like gusty winds.
Unlike standard approaches, the new technique does not require the person programming the autonomous drone to know anything in advance about the structure of these uncertain disturbances. Instead, the control system’s artificial intelligence model learns all it needs to know from a small amount of observational data collected from 15 minutes of flight time.
Importantly, the technique automatically determines which optimization algorithm it should use to adapt to the disturbances, which improves tracking performance. It chooses the algorithm that best suits the geometry of specific disturbances this drone is facing.
The researchers train their control system to do both things simultaneously using a technique called meta-learning, which teaches the system how to adapt to different types of disturbances.
Taken together, these ingredients enable their adaptive control system to achieve 50 percent less trajectory tracking error than baseline methods in simulations and perform better with new wind speeds it didn’t see during training.
In the future, this adaptive control system could help autonomous drones more efficiently deliver heavy parcels despite strong winds or monitor fire-prone areas of a national park.
“The concurrent learning of these components is what gives our method its strength. By leveraging meta-learning, our controller can automatically make choices that will be best for quick adaptation,” says Navid Azizan, who is the Esther and Harold E. Edgerton Assistant Professor in the MIT Department of Mechanical Engineering and the Institute for Data, Systems, and Society (IDSS), a principal investigator of the Laboratory for Information and Decision Systems (LIDS), and the senior author of a paper on this control system.
Azizan is joined on the paper by lead author Sunbochen Tang, a graduate student in the Department of Aeronautics and Astronautics, and Haoyuan Sun, a graduate student in the Department of Electrical Engineering and Computer Science. The research was recently presented at the Learning for Dynamics and Control Conference.
Finding the right algorithm
Typically, a control system incorporates a function that models the drone and its environment, and includes some existing information on the structure of potential disturbances. But in a real world filled with uncertain conditions, it is often impossible to hand-design this structure in advance.
Many control systems use an adaptation method based on a popular optimization algorithm, known as gradient descent, to estimate the unknown parts of the problem and determine how to keep the drone as close as possible to its target trajectory during flight. However, gradient descent is only one algorithm in a larger family of algorithms available to choose, known as mirror descent.
“Mirror descent is a general family of algorithms, and for any given problem, one of these algorithms can be more suitable than others. The name of the game is how to choose the particular algorithm that is right for your problem. In our method, we automate this choice,” Azizan says.
In their control system, the researchers replaced the function that contains some structure of potential disturbances with a neural network model that learns to approximate them from data. In this way, they don’t need to have an a priori structure of the wind speeds this drone could encounter in advance.
Their method also uses an algorithm to automatically select the right mirror-descent function while learning the neural network model from data, rather than assuming a user has the ideal function picked out already. The researchers give this algorithm a range of functions to pick from, and it finds the one that best fits the problem at hand.
“Choosing a good distance-generating function to construct the right mirror-descent adaptation matters a lot in getting the right algorithm to reduce the tracking error,” Tang adds.
Learning to adapt
While the wind speeds the drone may encounter could change every time it takes flight, the controller’s neural network and mirror function should stay the same so they don’t need to be recomputed each time.
To make their controller more flexible, the researchers use meta-learning, teaching it to adapt by showing it a range of wind speed families during training.
“Our method can cope with different objectives because, using meta-learning, we can learn a shared representation through different scenarios efficiently from data,” Tang explains.
In the end, the user feeds the control system a target trajectory and it continuously recalculates, in real-time, how the drone should produce thrust to keep it as close as possible to that trajectory while accommodating the uncertain disturbance it encounters.
In both simulations and real-world experiments, the researchers showed that their method led to significantly less trajectory tracking error than baseline approaches with every wind speed they tested.
“Even if the wind disturbances are much stronger than we had seen during training, our technique shows that it can still handle them successfully,” Azizan adds.
In addition, the margin by which their method outperformed the baselines grew as the wind speeds intensified, showing that it can adapt to challenging environments.
The team is now performing hardware experiments to test their control system on real drones with varying wind conditions and other disturbances.
They also want to extend their method so it can handle disturbances from multiple sources at once. For instance, changing wind speeds could cause the weight of a parcel the drone is carrying to shift in flight, especially when the drone is carrying sloshing payloads.
They also want to explore continual learning, so the drone could adapt to new disturbances without the need to also be retrained on the data it has seen so far.
“Navid and his collaborators have developed breakthrough work that combines meta-learning with conventional adaptive control to learn nonlinear features and the suitable adaptation law from data. Key to their approach is the use of mirror descent techniques that exploit the underlying geometry of the problem and do so automatically. Their work can contribute significantly to the design of autonomous systems that need to operate in complex and uncertain environments,” says Babak Hassibi, the Mose and Lillian S. Bohn Professor of Electrical Engineering and Computing and Mathematical Sciences at Caltech, who was not involved with this work.
This research was supported, in part, by MathWorks, the MIT-IBM Watson AI Lab, the MIT-Amazon Science Hub, and the MIT-Google Program for Computing Innovation.