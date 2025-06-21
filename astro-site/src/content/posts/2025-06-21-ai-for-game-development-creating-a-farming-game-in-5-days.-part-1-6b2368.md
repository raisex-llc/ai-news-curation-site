---
title: 'AI for Game Development: Creating a Farming Game in 5 Days. Part 1'
description: ''
summary: ''
pubDate: Mon, 02 Jan 2023 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/ml-for-games-1
---

AI for Game Development: Creating a Farming Game in 5 Days. Part 1
Welcome to AI for Game Development! In this series, we'll be using AI tools to create a fully functional farming game in just 5 days. By the end of this series, you will have learned how you can incorporate a variety of AI tools into your game development workflow. I will show you how you can use AI tools for:
- Art Style
- Game Design
- 3D Assets
- 2D Assets
- Story
Want the quick video version? You can watch it here. Otherwise, if you want the technical details, keep reading!
Note: This tutorial is intended for readers who are familiar with Unity development and C#. If you're new to these technologies, check out the Unity for Beginners series before continuing.
Day 1: Art Style
The first step in our game development process is deciding on the art style. To decide on the art style for our farming game, we'll be using a tool called Stable Diffusion. Stable Diffusion is an open-source model that generates images based on text descriptions. We'll use this tool to create a visual style for our game.
Setting up Stable Diffusion
There are a couple options for running Stable Diffusion: locally or online. If you're on a desktop with a decent GPU and want the fully-featured toolset, I recommend locally. Otherwise, you can run an online solution.
Locally
We'll be running Stable Diffusion locally using the Automatic1111 WebUI. This is a popular solution for running Stable Diffusion locally, but it does require some technical knowledge to set up. If you're on Windows and have an Nvidia GPU with at least 8 gigabytes in memory, continue with the instructions below. Otherwise, you can find instructions for other platforms on the GitHub repository README, or may opt instead for an online solution.
Installation on Windows:
Requirements: An Nvidia GPU with at least 8 gigabytes of memory.
- Install Python 3.10.6. Be sure to check "Add Python to PATH" during installation.
- Install git.
- Clone the repository by typing the following in the Command Prompt:
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
- Download the Stable Diffusion 1.5 weights. Place them in the
models
directory of the cloned repository. - Run the WebUI by running
webui-user.bat
in the cloned repository. - Navigate to
localhost://7860
to use the WebUI. If everything is working correctly, it should look something like this:
Online
If you don't meet the requirements to run Stable Diffusion locally, or prefer a more streamlined solution, there are many ways to run Stable Diffusion online.
Free solutions include many spaces here on 🤗 Hugging Face, such as the Stable Diffusion 2.1 Demo or the camemduru webui. You can find a list of additional online services here. You can even use 🤗 Diffusers to write your own free solution! You can find a simple code example to get started here.
Note: Parts of this series will use advanced features such as image2image, which may not be available on all online services.
Generating Concept Art
Let's generate some concept art. The steps are simple:
- Type what you want.
- Click generate.
But, how do you get the results you actually want? Prompting can be an art by itself, so it's ok if the first images you generate are not great. There are many amazing resources out there to improve your prompting. I made a 20-second video on the topic. You can also find this more extensive written guide.
The shared point of emphasis of these is to use a source such as lexica.art to see what others have generated with Stable Diffusion. Look for images that are similar to the style you want, and get inspired. There is no right or wrong answer here, but here are some tips when generating concept art with Stable Diffusion 1.5:
- Constrain the form of the output with words like isometric, simple, solid shapes. This produces styles that are easier to reproduce in-game.
- Some keywords, like low poly, while on-topic, tend to produce lower-quality results. Try to find alternate keywords that don't degrade results.
- Using names of specific artists is a powerful way to guide the model toward specific styles with higher-quality results.
I settled on the prompt: isometric render of a farm by a river, simple, solid shapes, james gilleard, atey ghailan. Here's the result:
Bringing it to Unity
Now, how do we make this concept art into a game? We'll be using Unity, a popular game engine, to bring our game to life.
- Create a Unity project using Unity 2021.9.3f1 with the Universal Render Pipeline.
- Block out the scene using basic shapes. For example, to add a cube, Right Click -> 3D Object -> Cube.
- Set up your Materials, using the concept art as a reference. I'm using the basic built-in materials.
- Set up your Lighting. I'm using a warm sun (#FFE08C, intensity 1.25) with soft ambient lighting (#B3AF91).
- Set up your Camera using an orthographic projection to match the projection of the concept art.
- Add some water. I'm using the Stylized Water Shader from the Unity asset store.
- Finally, set up Post-processing. I'm using ACES tonemapping and +0.2 exposure.
That's it! A simple but appealing scene, made in less than a day! Have questions? Want to get more involved? Join the Hugging Face Discord!
Click here to read Part 2, where we use AI for Game Design.