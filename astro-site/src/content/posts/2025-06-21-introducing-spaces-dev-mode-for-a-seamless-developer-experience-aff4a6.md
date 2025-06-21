---
title: Introducing Spaces Dev Mode for a seamless developer experience
description: ''
summary: ''
pubDate: Tue, 21 May 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/spaces-dev-mode
---

Introducing Spaces Dev Mode for a seamless developer experience
Hugging Face Spaces makes it easy for you to create and deploy AI-powered demos in minutes. Over 500,000 Spaces have been created by the Hugging Face community and it keeps growing! As part of Hugging Face Spaces, we recently released support for “Dev Mode”, to make your experience of building Spaces even more seamless.
Spaces Dev Mode lets you connect with VS Code or SSH directly to your Space. In a click, you can connect to your Space, and start editing your code, removing the need to push your local changes to the Space repository using git. Let's see how to setup this feature in your Space’s settings 🔥
Enable Dev Mode
Spaces Dev Mode is currently in beta, and available to PRO subscribers. To learn more about Spaces Dev Mode, check out the documentation. After creating your space, navigate to Settings.
Scroll down in the Settings and click on “Enable Dev Mode”. Your Space will automatically Restart.
Connect to VS Code
Once your Space is in a Running state, you can connect to VS Code locally or in your browser in one click! You can also use SSH to set up the connection to your Space in another IDE.
For example, let’s change the color theme of this Gradio Space. After editing the code, no need to push your changes and rebuild the Space container to test it. Go directly in your Space and click “Refresh”.
That’s it! Once you’re satisfied with your changes, you can commit and merge to persist them.
Go build your first Spaces here!