---
title: "Introducing NPC-Playground, a 3D playground to interact with LLM-powered NPCs"
description: ""
summary: ""
pubDate: "Wed, 05 Jun 2024 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/npc-gigax-cubzh"
thumbnail: ""
---

Introducing NPC-Playground, a 3D playground to interact with LLM-powered NPCs
AI-powered NPCs (Non-Playable Characters) are one of the most important breakthroughs brought about by the use of LLMs in games.
LLMs, or Large Language Models, make it possible to design "intelligent" in-game characters that can engage in realistic conversations with the player, perform complex actions and follow instructions, dramatically enhancing the player's experience. AI-powered NPCs represent a huge advancement vs rule-based and heuristics systems.
Today, we are excited to introduce NPC-Playground, a demo created by Cubzh and Gigax where you can interact with LLM-powered NPCs and see for yourself what the future holds!
You can play with the demo directly on your browser 👉 here
In this 3D demo, you can interact with the NPCs and teach them new skills with just a few lines of Lua scripting!
The Tech Stack
To create this, the teams used three main tools:
Cubzh: the cross-platform UGC (User Generated Content) game engine.
Gigax: the engine for smart NPCs.
Hugging Face Spaces: the most convenient online environment to host and iterate on game concepts in an open-source fashion.
What is Cubzh?
Cubzh is a cross-platform UGC game engine, that aims to provide an open-source alternative to Roblox.
It offers a rich gaming environment where users can create their own game experiences and play with friends.
In Cubzh, you can:
Create your own world items and avatars.
Build fast, using community-made voxel items (+25K so far in the library) and open-source Lua modules.
Code games using a simple yet powerful Lua scripting API.
Cubzh is in public Alpha. You can download and play Cubzh for free on Desktop via Steam, Epic Game Store, or on Mobile via Apple's App Store, Google Play Store or even play directly from your browser.
In this demo, Cubzh serves as the game engine running directly within a Hugging Face Space. You can easily clone it to experiment with custom scripts and NPC personas!
What is Gigax?
Gigax is the platform game developers use to run LLM-powered NPCs at scale.
Gigax has fine-tuned (trained) large language models for NPC interactions, using the "function calling" principle.
It's easier to think about this in terms of input/output flow:
On input, the model reads a text description (prompt) of a 3D scene, alongside a description of recent events and a list of actions available for the NPCs (e.g.,
<say>
,<jump>
,<attack>
, etc.).The model then outputs one of these actions using parameters that refer to 3D entities that exist in the scene, e.g.
say NPC1 "Hello, Captain!"
.
Gigax has open-sourced their stack! You can clone their inference stack on Github.
For this demo, their models are hosted in the cloud, but you can download them yourself on the 🤗 Hub:
The NPC-Playground Demo
Interact with LLM-powered NPCs in our 3D Playground, in your browser: huggingface.co/spaces/cubzh/ai-npcs.
Just clone the repository and modify cubzh.lua
to teach NPCs new skills with a few lines of Lua scripting!
Make your own demo 🔥
Playing with the demo is just the first step! If you're interested in customizing it, check out our comprehensive ML for Games Course tutorial for step-by-step instructions and resources.
The tutorial 👉 here
In addition, you can check the documentation to learn more on how to tweak NPC behavior and teach NPCs new skills.
We can't wait to see the amazing demos you're going to make 🔥. Share your demo on LinkedIn and X, and tag us @cubzh_ @gigax @huggingface we'll repost it 🤗.
--
The collaboration between Cubzh and Gigax has demonstrated how advanced AI can transform NPC interactions, making them more engaging and lifelike.
If you want to dive more into Cubzh and Gigax don’t hesitate to join their communities:
And to stay updated on the latest updates on Machine Learning for Games, don't forget to join the 🤗 Discord