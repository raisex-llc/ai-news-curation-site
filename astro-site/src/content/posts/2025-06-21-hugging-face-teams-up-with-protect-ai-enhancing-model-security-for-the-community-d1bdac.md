---
title: 'Hugging Face Teams Up with Protect AI: Enhancing Model Security for the Community'
description: ''
summary: ''
pubDate: Tue, 22 Oct 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/protectai
---

Hugging Face Teams Up with Protect AI: Enhancing Model Security for the Community
We are pleased to announce our partnership with Protect AI, as part of our long-standing commitment to provide a safe and reliable platform for the ML community.
Protect AI is a company founded with a mission to create a safer AI-powered world. They are developing powerful tools, namely Guardian, to ensure that the rapid pace of AI innovation can continue without compromising security.
Our decision to partner with Protect AI stems from their community driven approach to security, active support of open source, and expertise in all things security x AI.
Interested in joining our security partnership / providing scanning information on the Hub? Please get in touch with us over at security@huggingface.co.
Model security refresher
To share models, we serialize weights, configs and other data structures we use to interact with the models, in order to facilitate storage and transport. Some serialization formats are vulnerable to nasty exploits, such as arbitrary code execution (looking at you pickle), making shared models that use those formats potentially dangerous.
As Hugging Face has become a popular platform for model sharing, we’d like to help protect the community from this, hence why we have developed tools like picklescan and why we are integrating Guardian in our scanner suite.
Pickle is not the only exploitable format out there, see for reference how one can exploit Keras Lambda layers to achieve arbitrary code execution. The good news is that Guardian catches both of these exploits and more in additional file formats – see their Knowledge Base for up to date scanner information.
Read all our documentation on security here: https://huggingface.co/docs/hub/security 🔥
Integration
While integrating Guardian as a third-party scanner, we have used this as an opportunity to revamp our frontend to display scan results. Here is what it now looks like:
As you can see here, an additional Pickle button is present when a pickle import scan occurredAs you can see from the screenshot, there's nothing you have to do to benefit from this! All public model repositories will be scanned by Guardian automatically as soon as you push your files to the Hub. Here is an example repository you can check out to see the feature in action: mcpotato/42-eicar-street.
Note that you might not see a scan for your model as of today, as we have over 1 million model repos. It may take us some time to catch up 😅.
In total, we have already scanned hundreds of millions of files, because we believe that empowering the community to share models in a safe and frictionless manner will lead to growth for the whole field.