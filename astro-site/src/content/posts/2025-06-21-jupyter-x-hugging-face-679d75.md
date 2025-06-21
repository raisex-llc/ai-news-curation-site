---
title: Jupyter X Hugging Face
description: ''
summary: ''
pubDate: Thu, 23 Mar 2023 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/notebooks-hub
---

Jupyter X Hugging Face
We’re excited to announce improved support for Jupyter notebooks hosted on the Hugging Face Hub!
From serving as an essential learning resource to being a key tool used for model development, Jupyter notebooks have become a key component across many areas of machine learning. Notebooks' interactive and visual nature lets you get feedback quickly as you develop models, datasets, and demos. For many, their first exposure to training machine learning models is via a Jupyter notebook, and many practitioners use notebooks as a critical tool for developing and communicating their work.
Hugging Face is a collaborative Machine Learning platform in which the community has shared over 150,000 models, 25,000 datasets, and 30,000 ML apps. The Hub has model and dataset versioning tools, including model cards and client-side libraries to automate the versioning process. However, only including a model card with hyperparameters is not enough to provide the best reproducibility; this is where notebooks can help. Alongside these models, datasets, and demos, the Hub hosts over 7,000 notebooks. These notebooks often document the development process of a model or a dataset and can provide guidance and tutorials showing how others can use these resources. We’re therefore excited about our improved support for notebook hosting on the Hub.
What have we changed?
Under the hood, Jupyter notebook files (usually shared with an ipynb
extension) are JSON files. While viewing these files directly is possible, it's not a format intended to be read by humans. We have now added rendering support for notebooks hosted on the Hub. This means that notebooks will now be displayed in a human-readable format.
Why are we excited to host more notebooks on the Hub?
- Notebooks help document how people can use your models and datasets; sharing notebooks in the same place as your models and datasets makes it easier for others to use the resources you have created and shared on the Hub.
- Many people use the Hub to develop a Machine Learning portfolio. You can now supplement this portfolio with Jupyter Notebooks too.
- Support for one-click direct opening notebooks hosted on the Hub in Google Colab, making notebooks on the Hub an even more powerful experience. Look out for future announcements!