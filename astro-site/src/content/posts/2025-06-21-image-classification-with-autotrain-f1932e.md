---
title: "Image Classification with AutoTrain"
description: ""
summary: ""
pubDate: "Wed, 28 Sep 2022 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/autotrain-image-classification"
thumbnail: ""
---

Image Classification with AutoTrain
So you’ve heard all about the cool things that are happening in the machine learning world, and you want to join in. There’s just one problem – you don’t know how to code! 😱 Or maybe you’re a seasoned software engineer who wants to add some ML to your side-project, but you don’t have the time to pick up a whole new tech stack! For many people, the technical barriers to picking up machine learning feel insurmountable. That’s why Hugging Face created AutoTrain, and with the latest feature we’ve just added, we’re making “no-code” machine learning better than ever. Best of all, you can create your first project for ✨ free! ✨
Hugging Face AutoTrain lets you train models with zero configuration needed. Just choose your task (translation? how about question answering?), upload your data, and let Hugging Face do the rest of the work! By letting AutoTrain experiment with number of different models, there's even a good chance that you'll end up with a model that performs better than a model that's been hand-trained by an engineer 🤯 We’ve been expanding the number of tasks that we support, and we’re proud to announce that you can now use AutoTrain for Computer Vision! Image Classification is the latest task we’ve added, with more on the way. But what does this mean for you?
Image Classification models learn to categorize images, meaning that you can train one of these models to label any image. Do you want a model that can recognize signatures? Distinguish bird species? Identify plant diseases? As long as you can find an appropriate dataset, an image classification model has you covered.
How can you train your own image classifier?
If you haven’t created a Hugging Face account yet, now’s the time! Following that, make your way over to the AutoTrain homepage and click on “Create new project” to get started. You’ll be asked to fill in some basic info about your project. In the screenshot below you’ll see that I created a project named butterflies-classification
, and I chose the “Image Classification” task. I’ve also chosen the “Automatic” model option, since I want to let AutoTrain do the work of finding the best model architectures for my project.
Once AutoTrain creates your project, you just need to connect your data. If you have the data locally, you can drag and drop the folder into the window. Since we can also use any of the image classification datasets on the Hugging Face Hub, in this example I’ve decided to use the NimaBoscarino/butterflies dataset. You can select separate training and validation datasets if available, or you can ask AutoTrain to split the data for you.
Once the data has been added, simply choose the number of model candidates that you’d like AutoModel to try out, review the expected training cost (training with 5 candidate models and less than 500 images is free 🤩), and start training!
In the screenshots above you can see that my project started 5 different models, which each reached different accuracy scores. One of them wasn’t performing very well at all, so AutoTrain went ahead and stopped it so that it wouldn’t waste resources. The very best model hit 84% accuracy, with effectively zero effort on my end 😍 To wrap it all up, you can visit your freshly trained models on the Hub and play around with them through the integrated inference widget. For example, check out my butterfly classifier model over at NimaBoscarino/butterflies 🦋
We’re so excited to see what you build with AutoTrain! Don’t forget to join the community over at hf.co/join/discord, and reach out to us if you need any help 🤗