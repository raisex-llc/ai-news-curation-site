---
title: "From GPT2 to Stable Diffusion: Hugging Face arrives to the Elixir community"
description: ""
summary: ""
pubDate: "Fri, 09 Dec 2022 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/elixir-bumblebee"
thumbnail: ""
---

From GPT2 to Stable Diffusion: Hugging Face arrives to the Elixir community
The Elixir community is glad to announce the arrival of several Neural Networks models, from GPT2 to Stable Diffusion, to Elixir. This is possible thanks to the just announced Bumblebee library, which is an implementation of Hugging Face Transformers in pure Elixir.
To help anyone get started with those models, the team behind Livebook - a computational notebook platform for Elixir - created a collection of "Smart cells" that allows developers to scaffold different Neural Network tasks in only 3 clicks. You can watch my video announcement to learn more:
Thanks to the concurrency and distribution support in the Erlang Virtual Machine, which Elixir runs on, developers can embed and serve these models as part of their existing Phoenix web applications, integrate into their data processing pipelines with Broadway, and deploy them alongside their Nerves embedded systems - without a need for 3rd-party dependencies. In all scenarios, Bumblebee models compile to both CPU and GPU.
Background
The efforts to bring Machine Learning to Elixir started almost 2 years ago with the Numerical Elixir (Nx) project. The Nx project implements multi-dimensional tensors alongside "numerical definitions", a subset of Elixir which can be compiled to the CPU/GPU. Instead of reinventing the wheel, Nx uses bindings for Google XLA (EXLA) and Libtorch (Torchx) for CPU/GPU compilation.
Several other projects were born from the Nx initiative. Axon brings functional composable Neural Networks to Elixir, taking inspiration from projects such as Flax and PyTorch Ignite. The Explorer project borrows from dplyr and Rust's Polars to provide expressive and performant dataframes to the Elixir community.
Bumblebee and Tokenizers are our most recent releases. We are thankful to Hugging Face for enabling collaborative Machine Learning across communities and tools, which played an essential role in bringing the Elixir ecosystem up to speed.
Next, we plan to focus on training and transfer learning of Neural Networks in Elixir, allowing developers to augment and specialize pre-trained models according to the needs of their businesses and applications. We also hope to publish more on our development of traditional Machine Learning algorithms.
Your turn
If you want to give Bumblebee a try, you can:
Download Livebook v0.8 and automatically generate "Neural Networks tasks" from the "+ Smart" cell menu inside your notebooks. We are currently working on running Livebook on additional platforms and Spaces (stay tuned! 😉).
We have also written single-file Phoenix applications as examples of Bumblebee models inside your Phoenix (+ LiveView) apps. Those should provide the necessary building blocks to integrate them as part of your production app.
For a more hands on approach, read some of our notebooks.
If you want to help us build the Machine Learning ecosystem for Elixir, check out the projects above, and give them a try. There are many interesting areas, from compiler development to model building. For instance, pull requests that bring more models and architectures to Bumblebee are certainly welcome. The future is concurrent, distributed, and fun!