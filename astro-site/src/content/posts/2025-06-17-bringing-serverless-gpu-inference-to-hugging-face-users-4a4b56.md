---
title: Bringing serverless GPU inference to Hugging Face users
description: ''
pubDate: Tue, 02 Apr 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/cloudflare-workers-ai
---

Bringing serverless GPU inference to Hugging Face users
Today, we are thrilled to announce the launch of Deploy on Cloudflare Workers AI, a new integration on the Hugging Face Hub. Deploy on Cloudflare Workers AI makes using open models as a serverless API easy, powered by state-of-the-art GPUs deployed in Cloudflare edge data centers. Starting today, we are integrating some of the most popular open models on Hugging Face into Cloudflare Workers AI, powered by our production solutions, like Text Generation Inference.
With Deploy on Cloudflare Workers AI, developers can build robust Generative AI applications without managing GPU infrastructure and servers and at a very low operating cost: only pay for the compute you use, not for idle capacity.
Generative AI for Developers
This new experience expands upon the strategic partnership we announced last year to simplify the access and deployment of open Generative AI models. One of the main problems developers and organizations face is the scarcity of GPU availability and the fixed costs of deploying servers to start building. Deploy on Cloudflare Workers AI offers an easy, low-cost solution to these challenges, providing serverless access to popular Hugging Face Models with a pay-per-request pricing model.
Let's take a look at a concrete example. Imagine you develop an RAG Application that gets ~1000 requests per day, with an input of 1k tokens and an output of 100 tokens using Meta Llama 2 7B. The LLM inference production costs would amount to about $1 a day.
"We're excited to bring this integration to life so quickly. Putting the power of Cloudflare's global network of serverless GPUs into the hands of developers, paired with the most popular open source models on Hugging Face, will open the doors to lots of exciting innovation by our community around the world," said John Graham-Cumming, CTO, Cloudflare
How it works
Using Hugging Face Models on Cloudflare Workers AI is super easy. Below, you will find step-by-step instructions on how to use Hermes 2 Pro on Mistral 7B, the newest model from Nous Research.
You can find all available models in this Cloudflare Collection.
Note: You need access to a Cloudflare Account and API Token.
You can find the Deploy on Cloudflare option on all available model pages, including models like Llama, Gemma or Mistral.
Open the “Deploy” menu, and select “Cloudflare Workers AI” - this will open an interface that includes instructions on how to use this model and send requests.
Note: If the model you want to use does not have a “Cloudflare Workers AI” option, it is currently not supported. We are working on extending the availability of models together with Cloudflare. You can reach out to us at api-enterprise@huggingface.co with your request.
The integration can currently be used via two options: using the Workers AI REST API or directly in Workers with the Cloudflare AI SDK. Select your preferred option and copy the code into your environment. When using the REST API, you need to make sure the ACCOUNT_ID
and API_TOKEN
variables are defined.
That’s it! Now you can start sending requests to Hugging Face Models hosted on Cloudflare Workers AI. Make sure to use the correct prompt & template expected by the model.
We’re just getting started
We are excited to collaborate with Cloudflare to make AI more accessible to developers. We will work with the Cloudflare team to make more models and experiences available to you!