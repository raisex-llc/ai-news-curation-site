---
title: Introducing the Synthetic Data Generator - Build Datasets with Natural Language
description: ''
pubDate: Mon, 16 Dec 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/synthetic-data-generator
---

Introducing the Synthetic Data Generator - Build Datasets with Natural Language
Introducing the Synthetic Data Generator, a user-friendly application that takes a no-code approach to creating custom datasets with Large Language Models (LLMs). The best part: A simple step-by-step process, making dataset creation a non-technical breeze, allowing anyone to create datasets and models in minutes and without any code.
A short demo video
What is synthetic data and why is it useful?
Synthetic data is artificially generated information that mimics real-world data. It allows overcoming data limitations by expanding or enhancing datasets.
From Prompt to dataset to model
The synthetic data generator takes a description of the data you want (your custom prompt) and returns a dataset for your use case, using a synthetic data pipeline. In the background, this is powered by distilabel and the free Hugging Face text-generation API but we don’t need to worry about these complexities and we can focus on using the UI.
Supported Tasks
The tool currently supports text classification and chat datasets. These tasks will determine the type of dataset you will generate, classification requires categories, while chat data requires a conversation. Based on demand, we will add tasks like evaluation and RAG over time.
Text Classification
Text classification is common for categorizing text like customer reviews, social media posts, or news articles. Generating a classification dataset relies on two different steps that we address with LLMs. We first generate diverse texts, and then we add labels to them. A good example of a synthetic text classification dataset is argilla/synthetic-text-classification-news, which classifies synthetic news articles into 8 different classes.
Chat datasets
This type of dataset can be used for supervised fine-tuning (SFT), which is the technique that allows LLMs to work with conversational data, allowing the user to interact with LLMs via a chat interface. A good example of a synthetic chat dataset is argilla/synthetic-sft-customer-support-single-turn, which highlights an example of an LLM designed to handle customer support. In this example, the customer support topic is the synthetic data generator itself.
Generally, we can generate 50 and 20 samples per minute for text classification and chat, respectively. All of this is powered by the free Hugging Face API, but you can scale this up by using your own account and choosing custom models, api providers or generation configurations. We will get back to this later but let's dive into the basics first.
Let’s generate our first dataset
We will create a basic chat dataset. When you visit the generator, you have to login to allow the tool access to the organisations for which you want to generate datasets. This will allow the tool to upload the generated datasets. In case of a failed authentication, you can always reset the connection.
After the login, the UI guides you through a straightforward three-step process:
1. Describe Your Dataset
Start by providing a description of the dataset you want to create, including example use cases to help the generator understand your needs. Make sure to describe the goal and type of assistant in as much detail as possible. When you hit the “Create” button, a sample dataset will be created, and you can continue with step 2.
2. Configure and Refine
Refine your generated sample dataset by adjusting the system prompt
, which has been generated based on your description and by adjusting the task-specific settings. This will help you get to the specific results you're after. You can iterate on these configurations by hitting the “Save” button and regenerating your sample dataset. When you are satisfied with the config, continue to step 3.
3. Generate and Push
Fill out general information about the dataset name and organisation. Additionally, you can define the number of samples to generate and the temperature to use for the generation. This temperature represents the creativity of the generations. Let’s hit the “Generate” button to start a full generation. The output will be saved directly to Argilla and the Hugging Face Hub.
We can now click the “Open in Argilla” button and directly dive into our generated dataset.
Reviewing the Dataset
Even when dealing with synthetic data, it is important to understand and look at your data, which is why we created a direct integration with Argilla, a collaboration tool for AI engineers and domain experts to build high-quality datasets. This allows you to effectively explore and evaluate the synthetic dataset through powerful features like semantic search and composable filters. You can learn more about them in this guide. Afterwards, we can export the curated dataset to the Hugging Face Hub, and continue to fine-tune a model with it.
Training a Model
Don’t worry; even creating powerful AI models can be done without code nowadays using AutoTrain. To understand AutoTrain, you can look at its documentation. Here, we will create our own AutoTrain deployment and log in as we’ve done before for the synthetic data generator.
Remember the argilla/synthetic-text-classification-news dataset from the beginning? Let’s train a model that can correctly classify these examples. We need to select the task “Text Classification” and provide the correct “Dataset source”. Then, choose a nice project name and press play! The pop-up that warns about costs can be ignored because we are still working on the free Hugging Face CPU hardware, which is more than enough hardware for this text classification example.
Et voilà, after a couple of minutes, we’ve got our very own model! All that remains is to deploy it as a live service or to use it as a text-classification pipeline with some minimal Python code.
Advanced Features
Even though you can go from prompts to dedicated models without knowing anything about coding, some people might like the option to customize and scale their deployment with some more advanced technical features.
Improving Speed and Accuracy
You can improve speed and accuracy by creating the own deployment of the tool and configuring it to use different parameters or models. First, you must duplicate the synthetic data generator. Make sure you create is as a private Space to ensure nobody else can access it. Next, you can change the default values of some environment variables. Let's go over some scenarios:
- Use a different free Hugging Face model. You can do so by changing the
MODEL
from the default value ofmeta-llama/Llama-3.1-8B-Instruct
to a different model, likemeta-llama/Llama-3.1-70B-Instruct
. - Use an OpenAI model. You can do so by setting the
BASE_URL
tohttps://api.openai.com/v1/
andMODEL
togpt-4o
. - Increase the batch size, which will generate more samples per minute. You can do so by changing the
BATCH_SIZE
from the default value of5
to a higher value, like10
. Take into account that your API providers might have limits on the number of requests per minute. - Private Argilla instance. You can do so by setting the
ARGILLA_URL
andARGILLA_API_KEY
to the URL and API key of your free Argilla instance.
Local Deployment
Besides hosting the tool on Hugging Face Spaces, we also offer it as an open-source tool under an Apache 2 license, which means you can go to GitHub and use, modify, and adapt it however you need. You can install it as a Python package through a simple pip install synthetic-dataset-generator
. Make sure to configure the right environment variables when creatin
Customising Pipelines
Each synthetic data pipeline is based on distilabel, the framework for synthetic data and AI feedback. distilabel is open source; the cool thing about the pipeline code is that it is sharable and reproducible. You can, for example, find the pipeline for the argilla/synthetic-text-classification-news dataset within the repository on the Hub. Alternatively, you can find many other distilabel datasets along with their pipelines.
What’s Next?
The Synthetic Data Generator already offers many cool features that make it useful for any data or model lover. Still, we have some interesting directions for improvements on our GitHub, and we invite you to contribute, leave a star, and open issues too! Some things we are working on are:
- Retrieval Augmented Generation (RAG)
- Custom evals with LLMs as a Judge