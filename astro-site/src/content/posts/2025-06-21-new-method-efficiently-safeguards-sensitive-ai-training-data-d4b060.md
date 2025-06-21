---
title: New method efficiently safeguards sensitive AI training data
description: The approach maintains an AI model’s accuracy while ensuring attackers
  can’t extract secret information.
summary: The approach maintains an AI model’s accuracy while ensuring attackers can’t
  extract secret information.
pubDate: Fri, 11 Apr 2025 00:00:00 -0400
source: MIT
tags:
- mit
- ai
url: https://news.mit.edu/2025/new-method-efficiently-safeguards-sensitive-ai-training-data-0411
---

Audio
Data privacy comes with a cost. There are security techniques that protect sensitive user data, like customer addresses, from attackers who may attempt to extract them from AI models — but they often make those models less accurate.
MIT researchers recently developed a framework, based on a new privacy metric called PAC Privacy, that could maintain the performance of an AI model while ensuring sensitive data, such as medical images or financial records, remain safe from attackers. Now, they’ve taken this work a step further by making their technique more computationally efficient, improving the tradeoff between accuracy and privacy, and creating a formal template that can be used to privatize virtually any algorithm without needing access to that algorithm’s inner workings.
The team utilized their new version of PAC Privacy to privatize several classic algorithms for data analysis and machine-learning tasks.
They also demonstrated that more “stable” algorithms are easier to privatize with their method. A stable algorithm’s predictions remain consistent even when its training data are slightly modified. Greater stability helps an algorithm make more accurate predictions on previously unseen data.
The researchers say the increased efficiency of the new PAC Privacy framework, and the four-step template one can follow to implement it, would make the technique easier to deploy in real-world situations.
“We tend to consider robustness and privacy as unrelated to, or perhaps even in conflict with, constructing a high-performance algorithm. First, we make a working algorithm, then we make it robust, and then private. We’ve shown that is not always the right framing. If you make your algorithm perform better in a variety of settings, you can essentially get privacy for free,” says Mayuri Sridhar, an MIT graduate student and lead author of a paper on this privacy framework.
She is joined in the paper by Hanshen Xiao PhD ’24, who will start as an assistant professor at Purdue University in the fall; and senior author Srini Devadas, the Edwin Sibley Webster Professor of Electrical Engineering at MIT. The research will be presented at the IEEE Symposium on Security and Privacy.
Estimating noise
To protect sensitive data that were used to train an AI model, engineers often add noise, or generic randomness, to the model so it becomes harder for an adversary to guess the original training data. This noise reduces a model’s accuracy, so the less noise one can add, the better.
PAC Privacy automatically estimates the smallest amount of noise one needs to add to an algorithm to achieve a desired level of privacy.
The original PAC Privacy algorithm runs a user’s AI model many times on different samples of a dataset. It measures the variance as well as correlations among these many outputs and uses this information to estimate how much noise needs to be added to protect the data.
This new variant of PAC Privacy works the same way but does not need to represent the entire matrix of data correlations across the outputs; it just needs the output variances.
“Because the thing you are estimating is much, much smaller than the entire covariance matrix, you can do it much, much faster,” Sridhar explains. This means that one can scale up to much larger datasets.
Adding noise can hurt the utility of the results, and it is important to minimize utility loss. Due to computational cost, the original PAC Privacy algorithm was limited to adding isotropic noise, which is added uniformly in all directions. Because the new variant estimates anisotropic noise, which is tailored to specific characteristics of the training data, a user could add less overall noise to achieve the same level of privacy, boosting the accuracy of the privatized algorithm.
Privacy and stability
As she studied PAC Privacy, Sridhar hypothesized that more stable algorithms would be easier to privatize with this technique. She used the more efficient variant of PAC Privacy to test this theory on several classical algorithms.
Algorithms that are more stable have less variance in their outputs when their training data change slightly. PAC Privacy breaks a dataset into chunks, runs the algorithm on each chunk of data, and measures the variance among outputs. The greater the variance, the more noise must be added to privatize the algorithm.
Employing stability techniques to decrease the variance in an algorithm’s outputs would also reduce the amount of noise that needs to be added to privatize it, she explains.
“In the best cases, we can get these win-win scenarios,” she says.
The team showed that these privacy guarantees remained strong despite the algorithm they tested, and that the new variant of PAC Privacy required an order of magnitude fewer trials to estimate the noise. They also tested the method in attack simulations, demonstrating that its privacy guarantees could withstand state-of-the-art attacks.
“We want to explore how algorithms could be co-designed with PAC Privacy, so the algorithm is more stable, secure, and robust from the beginning,” Devadas says. The researchers also want to test their method with more complex algorithms and further explore the privacy-utility tradeoff.
“The question now is: When do these win-win situations happen, and how can we make them happen more often?” Sridhar says.
“I think the key advantage PAC Privacy has in this setting over other privacy definitions is that it is a black box — you don’t need to manually analyze each individual query to privatize the results. It can be done completely automatically. We are actively building a PAC-enabled database by extending existing SQL engines to support practical, automated, and efficient private data analytics,” says Xiangyao Yu, an assistant professor in the computer sciences department at the University of Wisconsin at Madison, who was not involved with this study.
This research is supported, in part, by Cisco Systems, Capital One, the U.S. Department of Defense, and a MathWorks Fellowship.