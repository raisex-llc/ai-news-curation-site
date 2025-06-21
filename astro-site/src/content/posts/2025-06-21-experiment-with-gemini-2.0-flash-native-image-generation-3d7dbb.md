---
title: Experiment with Gemini 2.0 Flash native image generation
description: Native image output is available in Gemini 2.0 Flash for developers to
  experiment with in Google AI Studio and the Gemini API.
summary: Native image output is available in Gemini 2.0 Flash for developers to experiment
  with in Google AI Studio and the Gemin
pubDate: Wed, 12 Mar 2025 14:58:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/experiment-with-gemini-20-flash-native-image-generation/
thumbnail: https://lh3.googleusercontent.com/3YfTGZst3RNar_7vzz6PhJ8L0508dMqxLq9XLl9u2k1HXTsdn-vifGNLHfF9Kel_VVJPtaxrueirXVf9RiZmGRsnqO7TNLDfaLKiy6t6qFytX6dZ=w528-h297-n-nu-rw
---

In December we first introduced native image output in Gemini 2.0 Flash to trusted testers. Today, we're making it available for developer experimentation across all regions currently supported by Google AI Studio. You can test this new capability using an experimental version of Gemini 2.0 Flash (gemini-2.0-flash-exp) in Google AI Studio and via the Gemini API.
Gemini 2.0 Flash combines multimodal input, enhanced reasoning, and natural language understanding to create images.
Here are some examples of where 2.0 Flash’s multimodal outputs shine:
Use Gemini 2.0 Flash to tell a story and it will illustrate it with pictures, keeping the characters and settings consistent throughout. Give it feedback and the model will retell the story or change the style of its drawings.
Gemini 2.0 Flash helps you edit images through many turns of a natural language dialogue, great for iterating towards a perfect image, or to explore different ideas together.
Unlike many other image generation models, Gemini 2.0 Flash leverages world knowledge and enhanced reasoning to create the right image. This makes it perfect for creating detailed imagery that’s realistic–like illustrating a recipe. While it strives for accuracy, like all language models, its knowledge is broad and general, not absolute or complete.
Most image generation models struggle to accurately render long sequences of text, often resulting in poorly formatted or illegible characters, or misspellings. Internal benchmarks show that 2.0 Flash has stronger rendering compared to leading competitive models, and great for creating advertisements, social posts, or even invitations.
Get started with Gemini 2.0 Flash via the Gemini API. Read more about image generation in our docs.
from google import genai
from google.genai import types
client = genai.Client(api_key="GEMINI_API_KEY")
response = client.models.generate_content(
model="gemini-2.0-flash-exp",
contents=(
"Generate a story about a cute baby turtle in a 3d digital art style. "
"For each scene, generate an image."
),
config=types.GenerateContentConfig(
response_modalities=["Text", "Image"]
),
)
Whether you are building AI agents, developing apps with beautiful visuals like illustrated interactive stories, or brainstorming visual ideas in conversation, Gemini 2.0 Flash allows you to add text and image generation with just a single model. We're eager to see what developers create with native image output and your feedback will help us finalize a production-ready version soon.