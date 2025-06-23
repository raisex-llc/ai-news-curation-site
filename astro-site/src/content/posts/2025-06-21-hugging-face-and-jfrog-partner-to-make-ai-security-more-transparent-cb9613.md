---
title: "Hugging Face and JFrog partner to make AI Security more transparent"
description: ""
summary: ""
pubDate: "Tue, 04 Mar 2025 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/jfrog"
thumbnail: ""
---

Hugging Face and JFrog partner to make AI Security more transparent
We are pleased to announce our partnership with JFrog, creators of the JFrog Software Supply Chain Platform, as part of our long-standing commitment to provide a safe and reliable platform for the ML community.
We have decided to add JFrog's scanner to our platform to continue improving security on the Hugging Face Hub. JFrog's scanner brings new functionality to scanning, aimed at reducing false positives on the Hub. Indeed, what we currently observe is that model weights can contain code that is executed upon deserialization and sometimes at inference time, depending on the format. This code is oftentimes a non harmful practicality for the developer. As our picklescan scanner only performs pattern matching on module names, we cannot always confirm that usage of a given function or module is malicious. JFrog goes a step deeper and will parse and analyze code it finds in models weights to check for potential malicious usage.
Interested in joining our security partnership / providing scanning information on the Hub? Please get in touch with us over at security@huggingface.co.
Model security refresher
To share models, we serialize weights, configs and other data structures we use to interact with the models, in order to facilitate storage and transport. Some serialization formats are vulnerable to nasty exploits, such as arbitrary code execution (looking at you pickle), making shared models that use those formats potentially dangerous.
As Hugging Face has become a popular platform for model sharing, we’d like to help protect the community from this, hence why we have developed tools like picklescan and why we are integrating JFrog in our scanner suite.
Pickle is not the only exploitable format out there, see for reference how one can exploit Keras Lambda layers to achieve arbitrary code execution. The good news is that JFrog catches both of these exploits and more in additional file formats – see their Model Threats page for up to date scanner information.
Read all our documentation on security here: https://huggingface.co/docs/hub/security 🔥
Integration
There's nothing you have to do to benefit from this! All public model repositories will be scanned by JFrog automatically as soon as you push your files to the Hub. Here is an example repository you can check out to see the feature in action: mcpotato/42-eicar-street.
`mcpotato/42-eicar-street`'s' `danger.dat` scan resultsNote that you might not see a scan for your model as of today, as we have millions of model repos. It may take us some time to catch up 😅.
In total, we have already scanned hundreds of millions of files, because we believe that empowering the community to share models in a safe and frictionless manner will lead to growth for the whole field.