---
title: "“Periodic table of machine learning” could fuel AI discovery"
description: "Researchers have created a unifying framework that can help scientists combine existing ideas to improve AI models or create new ones."
summary: "Researchers have created a unifying framework that can help scientists combine existing ideas to improve AI models or cr"
pubDate: "Wed, 23 Apr 2025 00:00:00 -0400"
source: "MIT"
url: "https://news.mit.edu/2025/machine-learning-periodic-table-could-fuel-ai-discovery-0423"
thumbnail: ""
---

MIT researchers have created a periodic table that shows how more than 20 classical machine-learning algorithms are connected. The new framework sheds light on how scientists could fuse strategies from different methods to improve existing AI models or come up with new ones.
For instance, the researchers used their framework to combine elements of two different algorithms to create a new image-classification algorithm that performed 8 percent better than current state-of-the-art approaches.
The periodic table stems from one key idea: All these algorithms learn a specific kind of relationship between data points. While each algorithm may accomplish that in a slightly different way, the core mathematics behind each approach is the same.
Building on these insights, the researchers identified a unifying equation that underlies many classical AI algorithms. They used that equation to reframe popular methods and arrange them into a table, categorizing each based on the approximate relationships it learns.
Just like the periodic table of chemical elements, which initially contained blank squares that were later filled in by scientists, the periodic table of machine learning also has empty spaces. These spaces predict where algorithms should exist, but which haven’t been discovered yet.
The table gives researchers a toolkit to design new algorithms without the need to rediscover ideas from prior approaches, says Shaden Alshammari, an MIT graduate student and lead author of a paper on this new framework.
“It’s not just a metaphor,” adds Alshammari. “We’re starting to see machine learning as a system with structure that is a space we can explore rather than just guess our way through.”
She is joined on the paper by John Hershey, a researcher at Google AI Perception; Axel Feldmann, an MIT graduate student; William Freeman, the Thomas and Gerd Perkins Professor of Electrical Engineering and Computer Science and a member of the Computer Science and Artificial Intelligence Laboratory (CSAIL); and senior author Mark Hamilton, an MIT graduate student and senior engineering manager at Microsoft. The research will be presented at the International Conference on Learning Representations.
An accidental equation
The researchers didn’t set out to create a periodic table of machine learning.
After joining the Freeman Lab, Alshammari began studying clustering, a machine-learning technique that classifies images by learning to organize similar images into nearby clusters.
She realized the clustering algorithm she was studying was similar to another classical machine-learning algorithm, called contrastive learning, and began digging deeper into the mathematics. Alshammari found that these two disparate algorithms could be reframed using the same underlying equation.
“We almost got to this unifying equation by accident. Once Shaden discovered that it connects two methods, we just started dreaming up new methods to bring into this framework. Almost every single one we tried could be added in,” Hamilton says.
The framework they created, information contrastive learning (I-Con), shows how a variety of algorithms can be viewed through the lens of this unifying equation. It includes everything from classification algorithms that can detect spam to the deep learning algorithms that power LLMs.
The equation describes how such algorithms find connections between real data points and then approximate those connections internally.
Each algorithm aims to minimize the amount of deviation between the connections it learns to approximate and the real connections in its training data.
They decided to organize I-Con into a periodic table to categorize algorithms based on how points are connected in real datasets and the primary ways algorithms can approximate those connections.
“The work went gradually, but once we had identified the general structure of this equation, it was easier to add more methods to our framework,” Alshammari says.
A tool for discovery
As they arranged the table, the researchers began to see gaps where algorithms could exist, but which hadn’t been invented yet.
The researchers filled in one gap by borrowing ideas from a machine-learning technique called contrastive learning and applying them to image clustering. This resulted in a new algorithm that could classify unlabeled images 8 percent better than another state-of-the-art approach.
They also used I-Con to show how a data debiasing technique developed for contrastive learning could be used to boost the accuracy of clustering algorithms.
In addition, the flexible periodic table allows researchers to add new rows and columns to represent additional types of datapoint connections.
Ultimately, having I-Con as a guide could help machine learning scientists think outside the box, encouraging them to combine ideas in ways they wouldn’t necessarily have thought of otherwise, says Hamilton.
“We’ve shown that just one very elegant equation, rooted in the science of information, gives you rich algorithms spanning 100 years of research in machine learning. This opens up many new avenues for discovery,” he adds.
“Perhaps the most challenging aspect of being a machine-learning researcher these days is the seemingly unlimited number of papers that appear each year. In this context, papers that unify and connect existing algorithms are of great importance, yet they are extremely rare. I-Con provides an excellent example of such a unifying approach and will hopefully inspire others to apply a similar approach to other domains of machine learning,” says Yair Weiss, a professor in the School of Computer Science and Engineering at the Hebrew University of Jerusalem, who was not involved in this research.
This research was funded, in part, by the Air Force Artificial Intelligence Accelerator, the National Science Foundation AI Institute for Artificial Intelligence and Fundamental Interactions, and Quanta Computer.