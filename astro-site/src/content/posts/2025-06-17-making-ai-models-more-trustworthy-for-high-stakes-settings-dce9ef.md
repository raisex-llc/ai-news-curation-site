---
title: Making AI models more trustworthy for high-stakes settings
description: A new method helps convey uncertainty more precisely, which could give
  researchers and medical clinicians better information to make decisions.
pubDate: Thu, 01 May 2025 00:00:00 -0400
source: MIT
tags:
- mit
- ai
url: https://news.mit.edu/2025/making-ai-models-more-trustworthy-high-stakes-settings-0501
---

The ambiguity in medical imaging can present major challenges for clinicians who are trying to identify disease. For instance, in a chest X-ray, pleural effusion, an abnormal buildup of fluid in the lungs, can look very much like pulmonary infiltrates, which are accumulations of pus or blood.
An artificial intelligence model could assist the clinician in X-ray analysis by helping to identify subtle details and boosting the efficiency of the diagnosis process. But because so many possible conditions could be present in one image, the clinician would likely want to consider a set of possibilities, rather than only having one AI prediction to evaluate.
One promising way to produce a set of possibilities, called conformal classification, is convenient because it can be readily implemented on top of an existing machine-learning model. However, it can produce sets that are impractically large.
MIT researchers have now developed a simple and effective improvement that can reduce the size of prediction sets by up to 30 percent while also making predictions more reliable.
Having a smaller prediction set may help a clinician zero in on the right diagnosis more efficiently, which could improve and streamline treatment for patients. This method could be useful across a range of classification tasks — say, for identifying the species of an animal in an image from a wildlife park — as it provides a smaller but more accurate set of options.
“With fewer classes to consider, the sets of predictions are naturally more informative in that you are choosing between fewer options. In a sense, you are not really sacrificing anything in terms of accuracy for something that is more informative,” says Divya Shanmugam PhD ’24, a postdoc at Cornell Tech who conducted this research while she was an MIT graduate student.
Shanmugam is joined on the paper by Helen Lu ’24; Swami Sankaranarayanan, a former MIT postdoc who is now a research scientist at Lilia Biosciences; and senior author John Guttag, the Dugald C. Jackson Professor of Computer Science and Electrical Engineering at MIT and a member of the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL). The research will be presented at the Conference on Computer Vision and Pattern Recognition in June.
Prediction guarantees
AI assistants deployed for high-stakes tasks, like classifying diseases in medical images, are typically designed to produce a probability score along with each prediction so a user can gauge the model’s confidence. For instance, a model might predict that there is a 20 percent chance an image corresponds to a particular diagnosis, like pleurisy.
But it is difficult to trust a model’s predicted confidence because much prior research has shown that these probabilities can be inaccurate. With conformal classification, the model’s prediction is replaced by a set of the most probable diagnoses along with a guarantee that the correct diagnosis is somewhere in the set.
But the inherent uncertainty in AI predictions often causes the model to output sets that are far too large to be useful.
For instance, if a model is classifying an animal in an image as one of 10,000 potential species, it might output a set of 200 predictions so it can offer a strong guarantee.
“That is quite a few classes for someone to sift through to figure out what the right class is,” Shanmugam says.
The technique can also be unreliable because tiny changes to inputs, like slightly rotating an image, can yield entirely different sets of predictions.
To make conformal classification more useful, the researchers applied a technique developed to improve the accuracy of computer vision models called test-time augmentation (TTA).
TTA creates multiple augmentations of a single image in a dataset, perhaps by cropping the image, flipping it, zooming in, etc. Then it applies a computer vision model to each version of the same image and aggregates its predictions.
“In this way, you get multiple predictions from a single example. Aggregating predictions in this way improves predictions in terms of accuracy and robustness,” Shanmugam explains.
Maximizing accuracy
To apply TTA, the researchers hold out some labeled image data used for the conformal classification process. They learn to aggregate the augmentations on these held-out data, automatically augmenting the images in a way that maximizes the accuracy of the underlying model’s predictions.
Then they run conformal classification on the model’s new, TTA-transformed predictions. The conformal classifier outputs a smaller set of probable predictions for the same confidence guarantee.
“Combining test-time augmentation with conformal prediction is simple to implement, effective in practice, and requires no model retraining,” Shanmugam says.
Compared to prior work in conformal prediction across several standard image classification benchmarks, their TTA-augmented method reduced prediction set sizes across experiments, from 10 to 30 percent.
Importantly, the technique achieves this reduction in prediction set size while maintaining the probability guarantee.
The researchers also found that, even though they are sacrificing some labeled data that would normally be used for the conformal classification procedure, TTA boosts accuracy enough to outweigh the cost of losing those data.
“It raises interesting questions about how we used labeled data after model training. The allocation of labeled data between different post-training steps is an important direction for future work,” Shanmugam says.
In the future, the researchers want to validate the effectiveness of such an approach in the context of models that classify text instead of images. To further improve the work, the researchers are also considering ways to reduce the amount of computation required for TTA.
This research is funded, in part, by the Wistron Corporation.