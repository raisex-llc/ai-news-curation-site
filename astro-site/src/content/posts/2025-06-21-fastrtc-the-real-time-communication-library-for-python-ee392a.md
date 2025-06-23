---
title: "FastRTC: The Real-Time Communication Library for Python"
description: ""
summary: ""
pubDate: "Tue, 25 Feb 2025 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/fastrtc"
thumbnail: ""
---

FastRTC: The Real-Time Communication Library for Python
In the last few months, many new real-time speech models have been released and entire companies have been founded around both open and closed source models. To name a few milestones:
- OpenAI and Google released their live multimodal APIs for ChatGPT and Gemini. OpenAI even went so far as to release a 1-800-ChatGPT phone number!
- Kyutai released Moshi, a fully open-source audio-to-audio LLM. Alibaba released Qwen2-Audio and Fixie.ai released Ultravox - two open-source LLMs that natively understand audio.
- ElevenLabs raised $180m in their Series C.
Despite the explosion on the model and funding side, it's still difficult to build real-time AI applications that stream audio and video, especially in Python.
- ML engineers may not have experience with the technologies needed to build real-time applications, such as WebRTC.
- Even code assistant tools like Cursor and Copilot struggle to write Python code that supports real-time audio/video applications. I know from experience!
That's why we're excited to announce FastRTC
, the real-time communication library for Python. The library is designed to make it super easy to build real-time audio and video AI applications entirely in Python!
In this blog post, we'll walk through the basics of FastRTC
by building real-time audio applications. At the end, you'll understand the core features of FastRTC
:
- 🗣️ Automatic Voice Detection and Turn Taking built-in, so you only need to worry about the logic for responding to the user.
- 💻 Automatic UI - Built-in WebRTC-enabled Gradio UI for testing (or deploying to production!).
- 📞 Call via Phone - Use fastphone() to get a FREE phone number to call into your audio stream (HF Token required. Increased limits for PRO accounts).
- ⚡️ WebRTC and Websocket support.
- 💪 Customizable - You can mount the stream to any FastAPI app so you can serve a custom UI or deploy beyond Gradio.
- 🧰 Lots of utilities for text-to-speech, speech-to-text, stop word detection to get you started.
Let's dive in.
Getting Started
We'll start by building the "hello world" of real-time audio: echoing back what the user says. In FastRTC
, this is as simple as:
from fastrtc import Stream, ReplyOnPause
import numpy as np
def echo(audio: tuple[int, np.ndarray]) -> tuple[int, np.ndarray]:
yield audio
stream = Stream(ReplyOnPause(echo), modality="audio", mode="send-receive")
stream.ui.launch()
Let's break it down:
- The
ReplyOnPause
will handle the voice detection and turn taking for you. You just have to worry about the logic for responding to the user. Any generator that returns a tuple of audio, (represented as(sample_rate, audio_data)
) will work. - The
Stream
class will build a Gradio UI for you to quickly test out your stream. Once you have finished prototyping, you can deploy your Stream as a production-ready FastAPI app in a single line of code -stream.mount(app)
. Whereapp
is a FastAPI app.
Here it is in action:
Leveling-Up: LLM Voice Chat
The next level is to use an LLM to respond to the user. FastRTC
comes with built-in speech-to-text and text-to-speech capabilities, so working with LLMs is really easy. Let's change our echo
function accordingly:
import os
from fastrtc import (ReplyOnPause, Stream, get_stt_model, get_tts_model)
from openai import OpenAI
sambanova_client = OpenAI(
api_key=os.getenv("SAMBANOVA_API_KEY"), base_url="https://api.sambanova.ai/v1"
)
stt_model = get_stt_model()
tts_model = get_tts_model()
def echo(audio):
prompt = stt_model.stt(audio)
response = sambanova_client.chat.completions.create(
model="Meta-Llama-3.2-3B-Instruct",
messages=[{"role": "user", "content": prompt}],
max_tokens=200,
)
prompt = response.choices[0].message.content
for audio_chunk in tts_model.stream_tts_sync(prompt):
yield audio_chunk
stream = Stream(ReplyOnPause(echo), modality="audio", mode="send-receive")
stream.ui.launch()
We're using the SambaNova API since it's fast. The get_stt_model()
will fetch Moonshine Base and get_tts_model()
will fetch Kokoro from the Hub, both of which have been further optimized for on-device CPU inference. But you can use any LLM/text-to-speech/speech-to-text API or even a speech-to-speech model. Bring the tools you love - FastRTC
just handles the real-time communication layer.
Bonus: Call via Phone
If instead of stream.ui.launch()
, you call stream.fastphone()
, you'll get a free phone number to call into your stream. Note, a Hugging Face token is required. Increased limits for PRO accounts.
You'll see something like this in your terminal:
INFO: Your FastPhone is now live! Call +1 877-713-4471 and use code 530574 to connect to your stream.
INFO: You have 30:00 minutes remaining in your quota (Resetting on 2025-03-23)
You can then call the number and it will connect you to your stream!
Next Steps
- Read the docs to learn more about the basics of
FastRTC
. - The best way to start building is by checking out the cookbook. Find out how to integrate with popular LLM providers (including OpenAI and Gemini's real-time APIs), integrate your stream with a FastAPI app and do a custom deployment, return additional data from your handler, do video processing, and more!
- ⭐️ Star the repo and file bug and issue requests!
- Follow the FastRTC Org on HuggingFace for updates and check out deployed examples!
Thank you for checking out FastRTC
!