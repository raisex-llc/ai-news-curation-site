---
title: "How to Install and Use the Hugging Face Unity API"
description: ""
summary: ""
pubDate: "Mon, 01 May 2023 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/unity-api"
thumbnail: ""
---

How to Install and Use the Hugging Face Unity API
The Hugging Face Unity API is an easy-to-use integration of the Hugging Face Inference API, allowing developers to access and use Hugging Face AI models in their Unity projects. In this blog post, we'll walk through the steps to install and use the Hugging Face Unity API.
Installation
- Open your Unity project
- Go to
Window
->Package Manager
- Click
+
and selectAdd Package from git URL
- Enter
https://github.com/huggingface/unity-api.git
- Once installed, the Unity API wizard should pop up. If not, go to
Window
->Hugging Face API Wizard
- Enter your API key. Your API key can be created in your Hugging Face account settings.
- Test the API key by clicking
Test API key
in the API Wizard. - Optionally, change the model endpoints to change which model to use. The model endpoint for any model that supports the inference API can be found by going to the model on the Hugging Face website, clicking
Deploy
->Inference API
, and copying the url from theAPI_URL
field. - Configure advanced settings if desired. For up-to-date information, visit the project repository at
https://github.com/huggingface/unity-api
- To see examples of how to use the API, click
Install Examples
. You can now close the API Wizard.
Now that the API is set up, you can make calls from your scripts to the API. Let's look at an example of performing a Sentence Similarity task:
using HuggingFace.API;
/* other code */
// Make a call to the API
void Query() {
string inputText = "I'm on my way to the forest.";
string[] candidates = {
"The player is going to the city",
"The player is going to the wilderness",
"The player is wandering aimlessly"
};
HuggingFaceAPI.SentenceSimilarity(inputText, OnSuccess, OnError, candidates);
}
// If successful, handle the result
void OnSuccess(float[] result) {
foreach(float value in result) {
Debug.Log(value);
}
}
// Otherwise, handle the error
void OnError(string error) {
Debug.LogError(error);
}
/* other code */
Supported Tasks and Custom Models
The Hugging Face Unity API also currently supports the following tasks:
- Conversation
- Text Generation
- Text to Image
- Text Classification
- Question Answering
- Translation
- Summarization
- Speech Recognition
Use the corresponding methods provided by the HuggingFaceAPI
class to perform these tasks.
To use your own custom model hosted on Hugging Face, change the model endpoint in the API Wizard.
Usage Tips
- Keep in mind that the API makes calls asynchronously, and returns a response or error via callbacks.
- Address slow response times or performance issues by changing model endpoints to lower resource models.
Conclusion
The Hugging Face Unity API offers a simple way to integrate AI models into your Unity projects. We hope you found this tutorial helpful. If you have any questions or would like to get more involved in using Hugging Face for Games, join the Hugging Face Discord!