---
title: Sentence Transformers in the 🤗 Hub
description: ''
pubDate: Mon, 28 Jun 2021 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/sentence-transformers-in-the-hub
---

Sentence Transformers in the Hugging Face Hub
Over the past few weeks, we've built collaborations with many Open Source frameworks in the machine learning ecosystem. One that gets us particularly excited is Sentence Transformers.
Sentence Transformers is a framework for sentence, paragraph and image embeddings. This allows to derive semantically meaningful embeddings (1) which is useful for applications such as semantic search or multi-lingual zero shot classification. As part of Sentence Transformers v2 release, there are a lot of cool new features:
- Sharing your models in the Hub easily.
- Widgets and Inference API for sentence embeddings and sentence similarity.
- Better sentence-embeddings models available (benchmark and models in the Hub).
With over 90 pretrained Sentence Transformers models for more than 100 languages in the Hub, anyone can benefit from them and easily use them. Pre-trained models can be loaded and used directly with few lines of code:
from sentence_transformers import SentenceTransformer
sentences = ["Hello World", "Hallo Welt"]
model = SentenceTransformer('sentence-transformers/paraphrase-MiniLM-L6-v2')
embeddings = model.encode(sentences)
print(embeddings)
But not only this. People will probably want to either demo their models or play with other models easily, so we're happy to announce the release of two new widgets in the Hub! The first one is the feature-extraction
widget which shows the sentence embedding.
sentence-transformers/distilbert-base-nli-max-tokens
But seeing a bunch of numbers might not be very useful to you (unless you're able to understand the embeddings from a quick look, which would be impressive!). We're also introducing a new widget for a common use case of Sentence Transformers: computing sentence similarity.
Of course, on top of the widgets, we also provide API endpoints in our Inference API that you can use to programmatically call your models!
import json
import requests
API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/paraphrase-MiniLM-L6-v2"
headers = {"Authorization": "Bearer YOUR_TOKEN"}
def query(payload):
response = requests.post(API_URL, headers=headers, json=payload)
return response.json()
data = query(
{
"inputs": {
"source_sentence": "That is a happy person",
"sentences": [
"That is a happy dog",
"That is a very happy person",
"Today is a sunny day"
]
}
}
)
Unleashing the Power of Sharing
So why is this powerful? In a matter of minutes, you can share your trained models with the whole community.
from sentence_transformers import SentenceTransformer
# Load or train a model
model.save_to_hub("my_new_model")
Now you will have a repository in the Hub which hosts your model. A model card was automatically created. It describes the architecture by listing the layers and shows how to use the model with both Sentence Transformers
and 🤗 Transformers
. You can also try out the widget and use the Inference API straight away!
If this was not exciting enough, your models will also be easily discoverable by filtering for all Sentence Transformers
models.
What's next?
Moving forward, we want to make this integration even more useful. In our roadmap, we expect training and evaluation data to be included in the automatically created model card, like is the case in transformers
from version v4.8
.
And what's next for you? We're very excited to see your contributions! If you already have a Sentence Transformer
repo in the Hub, you can now enable the widget and Inference API by changing the model card metadata.
---
tags:
- sentence-transformers
- sentence-similarity # Or feature-extraction!
---
If you don't have any model in the Hub and want to learn more about Sentence Transformers, head to www.SBERT.net!
Would you like to integrate your library to the Hub?
This integration is possible thanks to the huggingface_hub
library which has all our widgets and the API for all our supported libraries. If you would like to integrate your library to the Hub, we have a guide for you!
References
- Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks. https://arxiv.org/abs/1908.10084