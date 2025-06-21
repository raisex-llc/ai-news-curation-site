---
title: Deploy Livebook notebooks as apps to Hugging Face Spaces
description: ''
summary: ''
pubDate: Thu, 15 Jun 2023 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/livebook-app-deployment
---

Deploy Livebook notebooks as apps to Hugging Face Spaces
The Elixir community has been making great strides towards Machine Learning and Hugging Face is playing an important role on making it possible. To showcase what you can already achieve with Elixir and Machine Learning today, we use Livebook to build a Whisper-based chat app and then deploy it to Hugging Face Spaces. All under 15 minutes, check it out:
In this chat app, users can communicate only by sending audio messages, which are then automatically converted to text by the Whisper Machine Learning model.
This app showcases a few interesting features from Livebook and the Machine Learning ecosystem in Elixir:
- integration with Hugging Face Models
- multiplayer Machine Learning apps
- concurrent Machine Learning model serving (bonus point: you can also distribute model servings over a cluster just as easily)
If you don't know Livebook yet, it is an open-source tool for writing interactive code notebooks in Elixir, and it's part of the growing collection of Elixir tools for numerical computing, data science, and Machine Learning.
Hugging Face and Elixir
The Elixir community leverages the Hugging Face platform and its open source projects throughout its machine learning landscape. Here are some examples.
The first positive impact Hugging Face had was in the Bumblebee library, which brought pre-trained neural network models from Hugging Face to the Elixir community and was inspired by Hugging Face Transformers. Besides the inspiration, Bumblebee also uses the Hugging Face Hub to download parameters for its models.
Another example is the tokenizers library, which is an Elixir binding for Hugging Face Tokenizers.
And last but not least, Livebook can run inside Hugging Face Spaces with just a few clicks as one of their Space Docker templates. So, not only can you deploy Livebook apps to Hugging Face, but you can also use it to run Livebook for free to write and experiment with your own notebooks.
Your turn
We hope this new integration between Livebook and Hugging Face empowers even more people to use Machine Learning and show their work to the world.
Go ahead and install Livebook on Hugging Face Spaces, and follow our video tutorial to build and deploy your first Livebook ML app to Hugging Face.