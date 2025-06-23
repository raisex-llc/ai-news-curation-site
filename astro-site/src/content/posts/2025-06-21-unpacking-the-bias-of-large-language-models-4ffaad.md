---
title: "Unpacking the bias of large language models"
description: "In a new study, researchers discover the root cause of a type of bias in LLMs, paving the way for more accurate and reliable AI systems."
summary: "In a new study, researchers discover the root cause of a type of bias in LLMs, paving the way for more accurate and reli"
pubDate: "Tue, 17 Jun 2025 16:00:00 -0400"
source: "MIT"
url: "https://news.mit.edu/2025/unpacking-large-language-model-bias-0617"
thumbnail: ""
---

Research has shown that large language models (LLMs) tend to overemphasize information at the beginning and end of a document or conversation, while neglecting the middle.
This “position bias” means that, if a lawyer is using an LLM-powered virtual assistant to retrieve a certain phrase in a 30-page affidavit, the LLM is more likely to find the right text if it is on the initial or final pages.
MIT researchers have discovered the mechanism behind this phenomenon.
They created a theoretical framework to study how information flows through the machine-learning architecture that forms the backbone of LLMs. They found that certain design choices which control how the model processes input data can cause position bias.
Their experiments revealed that model architectures, particularly those affecting how information is spread across input words within the model, can give rise to or intensify position bias, and that training data also contribute to the problem.
In addition to pinpointing the origins of position bias, their framework can be used to diagnose and correct it in future model designs.
This could lead to more reliable chatbots that stay on topic during long conversations, medical AI systems that reason more fairly when handling a trove of patient data, and code assistants that pay closer attention to all parts of a program.
“These models are black boxes, so as an LLM user, you probably don’t know that position bias can cause your model to be inconsistent. You just feed it your documents in whatever order you want and expect it to work. But by understanding the underlying mechanism of these black-box models better, we can improve them by addressing these limitations,” says Xinyi Wu, a graduate student in the MIT Institute for Data, Systems, and Society (IDSS) and the Laboratory for Information and Decision Systems (LIDS), and first author of a paper on this research.
Her co-authors include Yifei Wang, an MIT postdoc; and senior authors Stefanie Jegelka, an associate professor of electrical engineering and computer science (EECS) and a member of IDSS and the Computer Science and Artificial Intelligence Laboratory (CSAIL); and Ali Jadbabaie, professor and head of the Department of Civil and Environmental Engineering, a core faculty member of IDSS, and a principal investigator in LIDS. The research will be presented at the International Conference on Machine Learning.
Analyzing attention
LLMs like Claude, Llama, and GPT-4 are powered by a type of neural network architecture known as a transformer. Transformers are designed to process sequential data, encoding a sentence into chunks called tokens and then learning the relationships between tokens to predict what words comes next.
These models have gotten very good at this because of the attention mechanism, which uses interconnected layers of data processing nodes to make sense of context by allowing tokens to selectively focus on, or attend to, related tokens.
But if every token can attend to every other token in a 30-page document, that quickly becomes computationally intractable. So, when engineers build transformer models, they often employ attention masking techniques which limit the words a token can attend to.
For instance, a causal mask only allows words to attend to those that came before it.
Engineers also use positional encodings to help the model understand the location of each word in a sentence, improving performance.
The MIT researchers built a graph-based theoretical framework to explore how these modeling choices, attention masks and positional encodings, could affect position bias.
“Everything is coupled and tangled within the attention mechanism, so it is very hard to study. Graphs are a flexible language to describe the dependent relationship among words within the attention mechanism and trace them across multiple layers,” Wu says.
Their theoretical analysis suggested that causal masking gives the model an inherent bias toward the beginning of an input, even when that bias doesn’t exist in the data.
If the earlier words are relatively unimportant for a sentence’s meaning, causal masking can cause the transformer to pay more attention to its beginning anyway.
“While it is often true that earlier words and later words in a sentence are more important, if an LLM is used on a task that is not natural language generation, like ranking or information retrieval, these biases can be extremely harmful,” Wu says.
As a model grows, with additional layers of attention mechanism, this bias is amplified because earlier parts of the input are used more frequently in the model’s reasoning process.
They also found that using positional encodings to link words more strongly to nearby words can mitigate position bias. The technique refocuses the model’s attention in the right place, but its effect can be diluted in models with more attention layers.
And these design choices are only one cause of position bias — some can come from training data the model uses to learn how to prioritize words in a sequence.
“If you know your data are biased in a certain way, then you should also finetune your model on top of adjusting your modeling choices,” Wu says.
Lost in the middle
After they’d established a theoretical framework, the researchers performed experiments in which they systematically varied the position of the correct answer in text sequences for an information retrieval task.
The experiments showed a “lost-in-the-middle” phenomenon, where retrieval accuracy followed a U-shaped pattern. Models performed best if the right answer was located at the beginning of the sequence. Performance declined the closer it got to the middle before rebounding a bit if the correct answer was near the end.
Ultimately, their work suggests that using a different masking technique, removing extra layers from the attention mechanism, or strategically employing positional encodings could reduce position bias and improve a model’s accuracy.
“By doing a combination of theory and experiments, we were able to look at the consequences of model design choices that weren’t clear at the time. If you want to use a model in high-stakes applications, you must know when it will work, when it won’t, and why,” Jadbabaie says.
In the future, the researchers want to further explore the effects of positional encodings and study how position bias could be strategically exploited in certain applications.
“These researchers offer a rare theoretical lens into the attention mechanism at the heart of the transformer model. They provide a compelling analysis that clarifies longstanding quirks in transformer behavior, showing that attention mechanisms, especially with causal masks, inherently bias models toward the beginning of sequences. The paper achieves the best of both worlds — mathematical clarity paired with insights that reach into the guts of real-world systems,” says Amin Saberi, professor and director of the Stanford University Center for Computational Market Design, who was not involved with this work.
This research is supported, in part, by the U.S. Office of Naval Research, the National Science Foundation, and an Alexander von Humboldt Professorship.