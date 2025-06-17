---
title: Making sense of this mess
description: ''
pubDate: Fri, 07 Jun 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/transformers-docs-redesign
---

Making sense of this mess
When I joined Hugging Face nearly 3 years ago, the Transformers documentation was very different from its current form today. It focused on text models and how to train or use them for inference on natural language tasks (text classification, summarization, language modeling, etc.).
The main version of the Transformers documentation today compared to version 4.10.0 from nearly 3 years ago.
As transformer models increasingly became the default way to approach AI, the documentation expanded significantly to include new models and new usage patterns. But new content was added incrementally without really considering how the audience and the Transformers library have evolved.
I think that's the reason why the documentation experience (DocX) feels disjointed, difficult to navigate, and outdated. Basically, a mess.
This is why a Transformers documentation redesign is necessary to make sense of this mess. The goal is to:
- Write for developers interested in building products with AI.
- Allow organic documentation structure and growth that scales naturally, instead of rigidly adhering to a predefined structure.
- Create a more unified documentation experience by integrating content rather than amending it to the existing documentation.
A new audience
IMO companies that will understand that AI is not just APIs to integrate but a new paradigm to build all tech and who develop this muscle internally (aka build, train their own models) will be able to build 100x better than others and get the differentiation and long-term value
— clem 🤗 (@ClementDelangue) March 3, 2023
The Transformers documentation was initially written for machine learning engineers and researchers, model tinkerers.
Now that AI is more mainstream and mature, and not just a fad, developers are growing interested in learning how to build AI into products. This means realizing developers interact with documentation differently than machine learning engineers and researchers do.
Two key distinctions are:
- Developers typically start with code examples and are searching for a solution to something they're trying to solve.
- Developers who aren't familiar with AI can be overwhelmed by Transformers. The value of code examples are reduced, or worse, useless, if you don't understand the context in which they're used.
With the redesign, the Transformers documentation will be more code-first and solution-oriented. Code and explanation of beginner machine learning concepts will be tightly coupled to provide a more complete and beginner-friendly onboarding experience.
Once developers have a basic understanding, they can progressively level up their Transformers knowledge.
Toward a more organic structure
One of my first projects at Hugging Face was to align the Transformers documentation with Diátaxis, a documentation approach based on user needs (learning, solving, understanding, reference).
A new name, new content, a new look and a new address.https://t.co/PlmtSMQDNX
— Daniele Procida (@evildmp) April 8, 2021
It’s probably the best documentation authoring system in the world! pic.twitter.com/LTCnIZmRwJ
But somewhere along the way, I started using Diátaxis as a plan instead of a guide. I tried to force content to fit neatly into one of the 4 prescribed categories.
Rigidity prevented naturally occurring content structures from emerging and prevented the documentation from adapting and scaling. Documentation about one topic soon spanned several sections, because it was what the structure dictated, not because it made sense.
It's okay if the structure is complex, but it's not okay if it's complex and not easy to find your way around.
The redesign will replace rigidity with flexibility to enable the documentation to grow and evolve.
Integration versus amendment
Tree rings provide a climatological record of the past (drought, flood, wildfire, etc.). In a way, the Transformers documentation also has its own tree rings or eras that capture its evolution:
- Not just text era: Transformer models are used across other modalities like computer vision, audio, multimodal, and not just text.
- Large language model (LLM) era: Transformer models are scaled to billions of parameters, leading to new ways of interacting with them, such as prompting and chat. You start to see a lot more documentation about how to efficiently train LLMs, like using parameter efficient finetuning (PEFT) methods, distributed training, and data parallelism.
- Optimization era: Running LLMs for inference or training can be a challenge unless you are GPU Rich, so now there is a ton of interest in how to democratize LLMs for the GPU Poor. There is more documentation about methods like quantization, FlashAttention, optimizing the key-value cache, Low-Rank Adaptation (LoRA), and more.
Each era incrementally added new content to the documentation, unbalancing and obscuring its previous parts. Content is sprawled over a greater surface, navigation is more complex.
In the tree ring model, new content is layered progressively over the previous content. Whereas in the integrated model, content coexists together as a part of the overall documentation.
A redesign will help rebalance the overall documentation experience. Content will feel native and integrated rather than added on.
Next steps
This post explored the reason and motivation behind our quest to redesign the Transformers documentation.
Stay tuned for the next post which identifies the mess in more detail and answers important questions such as, who are the intended users and stakeholders, what is the current state of the content, and how is it being interpreted.
Shout out to [@evilpingwin](https://x.com/evilpingwin) for the feedback and motivation to redesign the docs.