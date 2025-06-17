---
title: Introducing Gemma 3
description: The most capable model you can run on a single GPU or TPU.
pubDate: Wed, 12 Mar 2025 08:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/introducing-gemma-3/
---

Introducing Gemma 3: The most capable model you can run on a single GPU or TPU
The Gemma family of open models is foundational to our commitment to making useful AI technology accessible. Last month, we celebrated Gemma's first birthday, a milestone marked by incredible adoption — over 100 million downloads — and a vibrant community that has created more than 60,000 Gemma variants. This Gemmaverse continues to inspire us.
Today, we're introducing Gemma 3, a collection of lightweight, state-of-the-art open models built from the same research and technology that powers our Gemini 2.0 models. These are our most advanced, portable and responsibly developed open models yet. They are designed to run fast, directly on devices — from phones and laptops to workstations — helping developers create AI applications, wherever people need them. Gemma 3 comes in a range of sizes (1B, 4B, 12B and 27B), allowing you to choose the best model for your specific hardware and performance needs.
In this post, we'll explore Gemma 3's capabilities, introduce ShieldGemma 2, and share how you can join the expanding Gemmaverse.
New capabilities developers can use with Gemma 3
- Build with the world's best single-accelerator model: Gemma 3 delivers state-of-the-art performance for its size, outperforming Llama3-405B, DeepSeek-V3 and o3-mini in preliminary human preference evaluations on LMArena’s leaderboard. This helps you to create engaging user experiences that can fit on a single GPU or TPU host.
- Go global in 140 languages: Build applications that speak your customers' language. Gemma 3 offers out-of-the-box support for over 35 languages and pretrained support for over 140 languages.
- Create AI with advanced text and visual reasoning capabilities: Easily build applications that analyze images, text, and short videos, opening up new possibilities for interactive and intelligent applications 1 .
- Handle complex tasks with an expanded context window: Gemma 3 offers a 128k-token context window to let your applications process and understand vast amounts of information.
- Create AI-driven workflows using function calling: Gemma 3 supports function calling and structured output to help you automate tasks and build agentic experiences.
- High performance delivered faster with quantized models: Gemma 3 introduces official quantized versions, reducing model size and computational requirements while maintaining high accuracy.
This chart ranks AI models by Chatbot Arena Elo scores; higher scores (top numbers) indicate greater user preference. Dots show estimated NVIDIA H100 GPU requirements. Gemma 3 27B ranks highly, requiring only a single GPU despite others needing up to 32.
For a deeper dive into the technical details behind these capabilities, as well as a comprehensive overview of our approach to responsible development, refer to the Gemma 3 technical report.
Rigorous safety protocols to build Gemma 3 responsibly
We believe open models require careful risk assessment, and our approach balances innovation with safety – tailoring testing intensity to model capabilities. Gemma 3's development included extensive data governance, alignment with our safety policies via fine-tuning and robust benchmark evaluations. While thorough testing of more capable models often informs our assessment of less capable ones, Gemma 3's enhanced STEM performance prompted specific evaluations focused on its potential for misuse in creating harmful substances; their results indicate a low risk level.
As industry develops more powerful models, it will be critical to collectively develop risk-proportionate approaches to safety. We will continue to learn and refine our safety practices for open models over time.
Built-in safety for image applications with ShieldGemma 2
Alongside Gemma 3, we're also launching ShieldGemma 2, a powerful 4B image safety checker built on the Gemma 3 foundation. ShieldGemma 2 provides a ready-made solution for image safety, outputting safety labels across three safety categories: dangerous content, sexually explicit and violence. Developers can further customize ShieldGemma for their safety needs and users. ShieldGemma 2 is open and built to give flexibility and control, leveraging the performance and efficiency of the Gemma 3 architecture to promote responsible AI development.
Ready to integrate with the tools you already use
Gemma 3 and ShieldGemma 2 integrate seamlessly into your existing workflows:
- Develop with your favorite tools: With support for Hugging Face Transformers, Ollama, JAX, Keras, PyTorch, Google AI Edge, UnSloth, vLLM and Gemma.cpp, you have the flexibility to choose the best tools for your project.
- Start experimenting in seconds: Get instant access to Gemma 3 and begin building right away. Explore its full potential in Google AI Studio, or download the models through Kaggle or Hugging Face.
- Customize Gemma 3 to your specific needs: Gemma 3 ships with a revamped codebase that includes recipes for efficient fine-tuning and inference. Train and adapt the model using your preferred platform, like Google Colab, Vertex AI or even your gaming GPU.
- Deploy your way: Gemma 3 offers multiple deployment options, including Vertex AI, Cloud Run, the Google GenAI API, Iocal environments and other platforms, giving you the flexibility to choose the best fit for your application and infrastructure.
- Experience optimized performance on NVIDIA GPUs: NVIDIA has directly optimized Gemma 3 models to ensure that you get maximum performance on GPUs of any size, from Jetson Nano to the latest Blackwell chips. Gemma 3 is now featured on the NVIDIA API Catalog, enabling rapid prototyping with just an API call.
- Accelerate your AI development across many hardware platforms: Gemma 3 is also optimized for Google Cloud TPUs and integrates with AMD GPUs via the open-source ROCm™ stack. For CPU execution, Gemma.cpp offers a direct solution.
A “Gemmaverse” of models and tools
The Gemmaverse is a vast ecosystem of community-created Gemma models and tools, ready to power and inspire your innovation. For example, AI Singapore's SEA-LION v3 breaks down language barriers and fosters communication across Southeast Asia; INSAIT's BgGPT is a pioneering Bulgarian-first large language model that demonstrates the power of Gemma to support diverse languages; and Nexa AI's OmniAudio showcases the potential of on-device AI, bringing advanced audio processing capabilities to everyday devices.
To further promote academic research breakthroughs, we're launching the Gemma 3 Academic Program. Academic researchers can apply for Google Cloud credits (worth $10,000 per award) to accelerate their Gemma 3-based research. The application form opens today, and will remain open for four weeks. Apply on our website.
Get started with Gemma 3
As part of our ongoing commitment to democratizing access to high-quality AI, Gemma 3 represents the next step. Ready to explore Gemma 3? Here's where to start:
Instant exploration:
- Try Gemma 3 at full precision directly in your browser – no setup needed – with Google AI Studio.
- Get an API key directly from Google AI Studio and use Gemma 3 with the Google GenAI SDK.
Customize and build:
- Download Gemma 3 models from Hugging Face, Ollama, or Kaggle.
- Easily fine-tune and adapt the model to your unique requirements with Hugging Face’s Transformers library, or your preferred development environment.
Deploy and scale:
- Bring your custom Gemma 3 creations to market at scale with Vertex AI.
- Run inference on Cloud Run with Ollama.
- Get started with NVIDIA NIMs in the NVIDIA API Catalog.