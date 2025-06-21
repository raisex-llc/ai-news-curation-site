---
title: Welcome Fireworks.ai on the Hub 🎆
description: ''
summary: ''
pubDate: Fri, 14 Feb 2025 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/fireworks-ai
---

Welcome Fireworks.ai on the Hub 🎆
Following our recent announcement on Inference Providers on the Hub, we're thrilled to share that Fireworks.ai is now a supported Inference Provider on HF Hub!
Fireworks.ai delivers blazing-fast serverless inference directly on model pages, as well as throughout the whole HF ecosystem of libraries and tools, making it easier than ever to run inference on your favorite models.
Among others, starting now, you can run serverless inference to the following models via Fireworks.ai:
- deepseek-ai/DeepSeek-R1
- deepseek-ai/DeepSeek-V3
- mistralai/Mistral-Small-24B-Instruct-2501
- Qwen/Qwen2.5-Coder-32B-Instruct
- meta-llama/Llama-3.2-90B-Vision-Instruct
and many more, you can find the full list here.
Light up your projects with Fireworks.ai today!
How it works
In the website UI
Search for all models supported by Fireworks on HF here.
From the client SDKs
from Python, using huggingface_hub
The following example shows how to use DeepSeek-R1 using Fireworks.ai as your inference provider. You can use a Hugging Face token for automatic routing through Hugging Face, or your own Fireworks.ai API key if you have one.
Install huggingface_hub
from source:
pip install git+https://github.com/huggingface/huggingface_hub
Use the huggingface_hub
python library to call Fireworks.ai endpoints by defining the provider
parameter.
from huggingface_hub import InferenceClient
client = InferenceClient(
provider="fireworks-ai",
api_key="xxxxxxxxxxxxxxxxxxxxxxxx"
)
messages = [
{
"role": "user",
"content": "What is the capital of France?"
}
]
completion = client.chat.completions.create(
model="deepseek-ai/DeepSeek-R1",
messages=messages,
max_tokens=500
)
print(completion.choices[0].message)
from JS using @huggingface/inference
import { HfInference } from "@huggingface/inference";
const client = new HfInference("xxxxxxxxxxxxxxxxxxxxxxxx");
const chatCompletion = await client.chatCompletion({
model: "deepseek-ai/DeepSeek-R1",
messages: [
{
role: "user",
content: "How to make extremely spicy Mayonnaise?"
}
],
provider: "fireworks-ai",
max_tokens: 500
});
console.log(chatCompletion.choices[0].message);
From HTTP calls
Here's how you can call Llama-3.3-70B-Instruct using Fireworks.ai as the inference provider via cURL.
curl 'https://router.huggingface.co/fireworks-ai/v1/chat/completions' \
-H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxx' \
-H 'Content-Type: application/json' \
--data '{
"model": "accounts/fireworks/models/llama-v3p3-70b-instruct",
"messages": [
{
"role": "user",
"content": "What is the meaning of life if you were a dog?"
}
],
"max_tokens": 500,
"stream": false
}'
Billing
For direct requests, i.e. when you use a Fireworks key, you are billed directly on your Fireworks account.
For routed requests, i.e. when you authenticate via the hub, you'll only pay the standard Fireworks API rates. There's no additional markup from us, we just pass through the provider costs directly. (In the future, we may establish revenue-sharing agreements with our provider partners.)
Important Note ‼️ PRO users get $2 worth of Inference credits every month. You can use them across providers. 🔥
Subscribe to the Hugging Face PRO plan to get access to Inference credits, ZeroGPU, Spaces Dev Mode, 20x higher limits, and more.