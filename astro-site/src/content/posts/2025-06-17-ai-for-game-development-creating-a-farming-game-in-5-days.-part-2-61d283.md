---
title: 'AI for Game Development: Creating a Farming Game in 5 Days. Part 2'
description: ''
pubDate: Mon, 09 Jan 2023 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/ml-for-games-2
---

AI for Game Development: Creating a Farming Game in 5 Days. Part 2
Welcome to AI for Game Development! In this series, we'll be using AI tools to create a fully functional farming game in just 5 days. By the end of this series, you will have learned how you can incorporate a variety of AI tools into your game development workflow. I will show you how you can use AI tools for:
- Art Style
- Game Design
- 3D Assets
- 2D Assets
- Story
Want the quick video version? You can watch it here. Otherwise, if you want the technical details, keep reading!
Note: This tutorial is intended for readers who are familiar with Unity development and C#. If you're new to these technologies, check out the Unity for Beginners series before continuing.
Day 2: Game Design
In Part 1 of this tutorial series, we used AI for Art Style. More specifically, we used Stable Diffusion to generate concept art and develop the visual style of our game.
In this part, we'll be using AI for Game Design. In The Short Version, I'll talk about how I used ChatGPT as a tool to help develop game ideas. But more importantly, what is actually going on here? Keep reading for background on Language Models and their broader Uses in Game Development.
The Short Version
The short version is straightforward: ask ChatGPT for advice, and follow its advice at your own discretion. In the case of the farming game, I asked ChatGPT:
You are a professional game designer, designing a simple farming game. What features are most important to making the farming game fun and engaging?
The answer given includes (summarized):
- Variety of crops
- A challenging and rewarding progression system
- Dynamic and interactive environments
- Social and multiplayer features
- A strong and immersive story or theme
Given that I only have 5 days, I decided to gray-box the first two points. You can play the result here, and view the source code here.
I'm not going to go into detail on how I implemented these mechanics, since the focus of this series is how to use AI tools in your own game development process, not how to implement a farming game. Instead, I'll talk about what ChatGPT is (a language model), how these models actually work, and what this means for game development.
Language Models
ChatGPT, despite being a major breakthrough in adoption, is an iteration on tech that has existed for a while: language models.
Language models are a type of AI that are trained to predict the likelihood of a sequence of words. For example, if I were to write "The cat chases the ____", a language model would be trained to predict "mouse". This training process can then be applied to a wide variety of tasks. For example, translation: "the French word for cat is ____". This setup, while successful at some natural language tasks, wasn't anywhere near the level of performance seen today. This is, until the introduction of transformers.
Transformers, introduced in 2017, are a neural network architecture that use a self-attention mechanism to predict the entire sequence all at once. This is the tech behind modern language models like ChatGPT. Want to learn more about how they work? Check out our Introduction to Transformers course, available free here on Hugging Face.
So why is ChatGPT so successful compared to previous language models? It's impossible to answer this in its entirety, since ChatGPT is not open source. However, one of the reasons is Reinforcement Learning from Human Feedback (RLHF), where human feedback is used to improve the language model. Check out this blog post for more information on RLHF: how it works, open-source tools for doing it, and its future.
This area of AI is constantly changing, and likely to see an explosion of creativity as it becomes part of the open source community, including in uses for game development. If you're reading this, you're probably ahead of the curve already.
Uses in Game Development
In The Short Version, I talked about how I used ChatGPT to help develop game ideas. There is a lot more you can do with it though, like using it to code an entire game. You can use it for pretty much anything you can think of. Something that might be a bit more helpful is to talk about what it can't do.
Limitations
ChatGPT often sounds very convincing, while being wrong. Here is an archive of ChatGPT failures. The reason for these is that ChatGPT doesn't know what it's talking about the way a human does. It's a very large Language Model that predicts likely outputs, but doesn't really understand what it's saying. One of my personal favorite examples of these failures (especially relevant to game development) is this explanation of quaternions from Reddit:
This explanation, while sounding excellent, is completely wrong. This is a great example of why ChatGPT, while very useful, shouldn't be used as a definitive knowledge base.
Suggestions
If ChatGPT fails a lot, should you use it? I would argue that it's still extremely useful as a tool, rather than as a replacement. In the example of Game Design, I could have followed up on ChatGPT's answer, and asked it to implement all of its suggestions for me. As I mentioned before, others have done this, and it somewhat works. However, I would suggest using ChatGPT more as a tool for brainstorming and acceleration, rather than as a complete replacement for steps in the development process.
Click here to read Part 3, where we use AI for 3D Assets.