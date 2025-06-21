---
title: Welcome spaCy to the 🤗 Hub
description: ''
summary: ''
pubDate: Tue, 13 Jul 2021 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/spacy
---

Welcome spaCy to the Hugging Face Hub
spaCy is a popular library for advanced Natural Language Processing used widely across industry. spaCy makes it easy to use and train pipelines for tasks like named entity recognition, text classification, part of speech tagging and more, and lets you build powerful applications to process and analyze large volumes of text.
Hugging Face makes it really easy to share your spaCy pipelines with the community! With a single command, you can upload any pipeline package, with a pretty model card and all required metadata auto-generated for you. The inference API currently supports NER out-of-the-box, and you can try out your pipeline interactively in your browser. You'll also get a live URL for your package that you can pip install
from anywhere for a smooth path from prototype all the way to production!
Finding models
Over 60 canonical models can be found in the spaCy org. These models are from the latest 3.1 release, so you can try the latest realesed models right now! On top of this, you can find all spaCy models from the community here https://huggingface.co/models?filter=spacy.
Widgets
This integration includes support for NER widgets, so all models with a NER component will have this out of the box! Coming soon there will be support for text classification and POS.
Using existing models
All models from the Hub can be directly installed using pip install
.
pip install https://huggingface.co/spacy/en_core_web_sm/resolve/main/en_core_web_sm-any-py3-none-any.whl
# Using spacy.load().
import spacy
nlp = spacy.load("en_core_web_sm")
# Importing as module.
import en_core_web_sm
nlp = en_core_web_sm.load()
When you open a repository, you can click Use in spaCy
and you will be given a working snippet that you can use to install and load the model!
You can even make HTTP requests to call the models from the Inference API, which is useful in production settings. Here is an example of a simple request:
curl -X POST --data '{"inputs": "Hello, this is Omar"}' https://api-inference.huggingface.co/models/spacy/en_core_web_sm
>>> [{"entity_group":"PERSON","word":"Omar","start":15,"end":19,"score":1.0}]
And for larger-scale use cases, you can click "Deploy > Accelerated Inference" and see how to do this with Python.
Sharing your models
But probably the coolest feature is that now you can very easily share your models with the spacy-huggingface-hub
library, which extends the spaCy
CLI with a new command, huggingface-hub push
.
huggingface-cli login
python -m spacy package ./en_ner_fashion ./output --build wheel
cd ./output/en_ner_fashion-0.0.0/dist
python -m spacy huggingface-hub push en_ner_fashion-0.0.0-py3-none-any.whl
In just a minute, you can get your packaged model in the Hub, try it out directly in the browser, and share it with the rest of the community. All the required metadata will be uploaded for you and you even get a cool model card.
Try it out and share your models with the community!
Would you like to integrate your library to the Hub?
This integration is possible thanks to the huggingface_hub
library which has all our widgets and the API for all our supported libraries. If you would like to integrate your library to the Hub, we have a guide for you!