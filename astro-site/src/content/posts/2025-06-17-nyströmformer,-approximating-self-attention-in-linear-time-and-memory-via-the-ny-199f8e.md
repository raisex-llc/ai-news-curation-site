---
title: Nyströmformer, Approximating self-attention in linear time and memory via the
  Nyström method
description: ''
pubDate: Tue, 02 Aug 2022 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/nystromformer
---

Nyströmformer: Approximating self-attention in linear time and memory via the Nyström method
Introduction
Transformers have exhibited remarkable performance on various Natural Language Processing and Computer Vision tasks. Their success can be attributed to the self-attention mechanism, which captures the pairwise interactions between all the tokens in an input. However, the standard self-attention mechanism has a time and memory complexity of (where is the length of the input sequence), making it expensive to train on long input sequences.
The Nyströmformer is one of many efficient Transformer models that approximates standard self-attention with complexity. Nyströmformer exhibits competitive performance on various downstream NLP and CV tasks while improving upon the efficiency of standard self-attention. The aim of this blog post is to give readers an overview of the Nyström method and how it can be adapted to approximate self-attention.
Nyström method for matrix approximation
At the heart of Nyströmformer is the Nyström method for matrix approximation. It allows us to approximate a matrix by sampling some of its rows and columns. Let's consider a matrix , which is expensive to compute in its entirety. So, instead, we approximate it using the Nyström method. We start by sampling rows and columns from . We can then arrange the sampled rows and columns as follows:
We now have four submatrices: and , with sizes and respectively. The sampled columns are contained in and , whereas the sampled rows are contained in and . So, the entries of and are known to us, and we will estimate . According to the Nyström method, is given by:
Here, denotes the Moore-Penrose inverse (or pseudoinverse). Thus, the Nyström approximation of can be written as:
As shown in the second line, can be expressed as a product of three matrices. The reason for doing so will become clear later.
Can we approximate self-attention with the Nyström method?
Our goal is to ultimately approximate the softmax matrix in standard self attention: S = softmax
Here, and denote the queries and keys respectively. Following the procedure discussed above, we would sample rows and columns from , form four submatrices, and obtain :
But, what does it mean to sample a column from ? It means we select one element from each row. Recall how S is calculated: the final operation is a row-wise softmax. To find a single entry in a row, we must access all other entries (for the denominator in softmax). So, sampling one column requires us to know all other columns in the matrix. Therefore, we cannot directly apply the Nyström method to approximate the softmax matrix.
How can we adapt the Nyström method to approximate self-attention?
Instead of sampling from , the authors propose to sample landmarks (or Nyström points) from queries and keys. We denote the query landmarks and key landmarks as and respectively. and can be used to construct three matrices corresponding to those in the Nyström approximation of . We define the following matrices:
The sizes of , , and and respectively. We replace the three matrices in the Nyström approximation of with the new matrices we have defined to obtain an alternative Nyström approximation:
This is the Nyström approximation of the softmax matrix in the self-attention mechanism. We multiply this matrix with the values ( ) to obtain a linear approximation of self-attention. Note that we never calculated the product , avoiding the complexity.
How do we select landmarks?
Instead of sampling rows from and , the authors propose to construct and using segment means. In this procedure, tokens are grouped into segments, and the mean of each segment is computed. Ideally, is much smaller than . According to experiments from the paper, selecting just or landmarks produces competetive performance compared to standard self-attention and other efficient attention mechanisms, even for long sequences lengths ( or ).
The overall algorithm is summarised by the following figure from the paper:
The three orange matrices above correspond to the three matrices we constructed using the key and query landmarks. Also, notice that there is a DConv box. This corresponds to a skip connection added to the values using a 1D depthwise convolution.
How is Nyströmformer implemented?
The original implementation of Nyströmformer can be found here and the HuggingFace implementation can be found here. Let's take a look at a few lines of code (with some comments added) from the HuggingFace implementation. Note that some details such as normalization, attention masking, and depthwise convolution are avoided for simplicity.
key_layer = self.transpose_for_scores(self.key(hidden_states)) # K
value_layer = self.transpose_for_scores(self.value(hidden_states)) # V
query_layer = self.transpose_for_scores(mixed_query_layer) # Q
q_landmarks = query_layer.reshape(
-1,
self.num_attention_heads,
self.num_landmarks,
self.seq_len // self.num_landmarks,
self.attention_head_size,
).mean(dim=-2) # \tilde{Q}
k_landmarks = key_layer.reshape(
-1,
self.num_attention_heads,
self.num_landmarks,
self.seq_len // self.num_landmarks,
self.attention_head_size,
).mean(dim=-2) # \tilde{K}
kernel_1 = torch.nn.functional.softmax(torch.matmul(query_layer, k_landmarks.transpose(-1, -2)), dim=-1) # \tilde{F}
kernel_2 = torch.nn.functional.softmax(torch.matmul(q_landmarks, k_landmarks.transpose(-1, -2)), dim=-1) # \tilde{A} before pseudo-inverse
attention_scores = torch.matmul(q_landmarks, key_layer.transpose(-1, -2)) # \tilde{B} before softmax
kernel_3 = nn.functional.softmax(attention_scores, dim=-1) # \tilde{B}
attention_probs = torch.matmul(kernel_1, self.iterative_inv(kernel_2)) # \tilde{F} * \tilde{A}
new_value_layer = torch.matmul(kernel_3, value_layer) # \tilde{B} * V
context_layer = torch.matmul(attention_probs, new_value_layer) # \tilde{F} * \tilde{A} * \tilde{B} * V
Using Nyströmformer with HuggingFace
Nyströmformer for Masked Language Modeling (MLM) is available on HuggingFace. Currently, there are 4 checkpoints, corresponding to various sequence lengths: nystromformer-512
, nystromformer-1024
, nystromformer-2048
, and nystromformer-4096
. The number of landmarks, , can be controlled using the num_landmarks
parameter in the NystromformerConfig
. Let's take a look at a minimal example of Nyströmformer for MLM:
from transformers import AutoTokenizer, NystromformerForMaskedLM
import torch
tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForMaskedLM.from_pretrained("uw-madison/nystromformer-512")
inputs = tokenizer("Paris is the [MASK] of France.", return_tensors="pt")
with torch.no_grad():
logits = model(**inputs).logits
# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
Output:
----------------------------------------------------------------------------------------------------
capital
Alternatively, we can use the pipeline API (which handles all the complexity for us):
from transformers import pipeline
unmasker = pipeline('fill-mask', model='uw-madison/nystromformer-512')
unmasker("Paris is the [MASK] of France.")
Output:
----------------------------------------------------------------------------------------------------
[{'score': 0.829957902431488,
'token': 1030,
'token_str': 'capital',
'sequence': 'paris is the capital of france.'},
{'score': 0.022157637402415276,
'token': 16081,
'token_str': 'birthplace',
'sequence': 'paris is the birthplace of france.'},
{'score': 0.01904447190463543,
'token': 197,
'token_str': 'name',
'sequence': 'paris is the name of france.'},
{'score': 0.017583081498742104,
'token': 1107,
'token_str': 'kingdom',
'sequence': 'paris is the kingdom of france.'},
{'score': 0.005948934704065323,
'token': 148,
'token_str': 'city',
'sequence': 'paris is the city of france.'}]
Conclusion
Nyströmformer offers an efficient approximation to the standard self-attention mechanism, while outperforming other linear self-attention schemes. In this blog post, we went over a high-level overview of the Nyström method and how it can be leveraged for self-attention. Readers interested in deploying or fine-tuning Nyströmformer for downstream tasks can find the HuggingFace documentation here.