---
title: Fine-Tune W2V2-Bert for low-resource ASR with 🤗 Transformers
description: ''
pubDate: Fri, 19 Jan 2024 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/fine-tune-w2v2-bert
---

Fine-Tune W2V2-Bert for low-resource ASR with 🤗 Transformers
New (01/2024): This blog post is strongly inspired by "Fine-tuning XLS-R on Multi-Lingual ASR" and "Fine-tuning MMS Adapter Models for Multi-Lingual ASR".
Introduction
Last month, MetaAI released Wav2Vec2-BERT, as a building block of their Seamless Communication, a family of AI translation models.
Wav2Vec2-BERT is the result of a series of improvements based on an original model: Wav2Vec2, a pre-trained model for Automatic Speech Recognition (ASR) released in September 2020 by Alexei Baevski, Michael Auli, and Alex Conneau. With as little as 10 minutes of labeled audio data, Wav2Vec2 could be fine-tuned to achieve 5% word-error rate performance on the LibriSpeech dataset, demonstrating for the first time low-resource transfer learning for ASR.
Following a series of multilingual improvements (XLSR, XLS-R and MMS), Wav2Vec2-BERT is a 580M-parameters versatile audio model that has been pre-trained on 4.5M hours of unlabeled audio data covering more than 143 languages. For comparison, XLS-R used almost half a million hours of audio data in 128 languages and MMS checkpoints were pre-trained on more than half a million hours of audio in over 1,400 languages. Boosting to millions of hours enables Wav2Vec2-BERT to achieve even more competitive results in speech-related tasks, whatever the language.
To use it for ASR, Wav2Vec2-BERT can be fine-tuned using Connectionist Temporal Classification (CTC), which is an algorithm that is used to train neural networks for sequence-to-sequence problems, such as ASR and handwriting recognition. We highly recommend reading the well-written blog post Sequence Modeling with CTC (2017) by Awni Hannun, to learn more about the CTC algorithm.
The aim of this notebook is to give you all the elements you need to train Wav2Vec2-BERT model - more specifically the pre-trained checkpoint facebook/w2v-bert-2.0 - on ASR tasks, using open-source tools and models. It first presents the complete pre-processing pipeline, then performs a little fine-tuning of the W2V2-BERT. The final section gathers training tips from Hugging Face experts to scale-up CTC training.
For demonstration purposes, we fine-tune the model on the low resource Mongolian ASR dataset of Common Voice 16.0 that contains ca. 14h of validated training data.
Motivation
Whisper is a suite of ASR models, commonly accepted as the best performing models for the ASR task. It provides state-of-the-art performance for English ASR, while being well suited to multilingual fine-tuning from limited resources.
However, when it comes to "resource-poor" languages such as Mongolian, Whisper performs poorly, as seen in section D.2.2 of the Whisper paper - Mongolian or Malayalam achieved over 100% WER at every Whisper checkpoint. The checkpoint available also have a limited vocabulary and therefore cannot be fine-tuned on a language whose alphabet does not overlap with this vocabulary.
In addition, Whisper is a sequence-to-sequence model that performs ASR autoregressively, making it inherently "slow". Whisper's slowness is exacerbated for languages whose characteristics are infrequent in the training dataset. In this case, Whisper has to generate on average more tokens per word, and therefore takes longer.
Faced with limited resources - both in terms of training data availability and inference constraints - more "frugal" models are needed. In this case, Wav2Vec2-BERT is just the thing.
Wav2Vec2-BERT predicts ASR in a single pass, making it much faster than Whisper. As this notebook will show, it requires little data to achieve competitive performance, is easily adaptable to any alphabet, and is more resource-efficient.
In fact, it achieves similar WER performance on Mongolian ASR compared with Whisper-large-v3 after similar fine-tuning, while being over 10x to 30x faster and 2.5x more resource-efficient.
Note: The benchmark was carried out with a 16GB V100 on Google Colab, using batch sizes ranging from 1 to 8 on the Mongolian CV16 test set.
Notebook Setup
Before we start, let's install datasets
and transformers
. Also, we need accelerate
for training, torchaudio
to load audio files and jiwer
to evaluate our fine-tuned model using the word error rate (WER) metric.
%%capture
!pip install datasets
!pip install --upgrade transformers
!pip install torchaudio
!pip install jiwer
!pip install accelerate -U
We strongly suggest to upload your training checkpoints directly to the 🤗 Hub while training. The 🤗 Hub provides:
- Integrated version control: you can be sure that no model checkpoint is lost during training.
- Tensorboard logs: track important metrics over the course of training.
- Model cards: document what a model does and its intended use cases.
- Community: an easy way to share and collaborate with the community!
To do so, you have to store your authentication token from the Hugging Face website (sign up here if you haven't already!). This is done by entering your Hub authentication token when prompted below. Find your Hub authentication token here:
from huggingface_hub import notebook_login
notebook_login()
Prepare Data, Tokenizer, Feature Extractor
ASR models transcribe speech to text, which means that we both need a feature extractor that processes the speech signal to the model's input format, e.g. a feature vector, and a tokenizer that processes the model's output format to text.
In 🤗 Transformers, the Wav2Vec2-BERT model is thus accompanied by both a tokenizer, called Wav2Vec2CTCTokenizer, and a feature extractor, called SeamlessM4TFeatureExtractor that the model shares with the first and second versions of Seamless-M4T, as they all process audio in the same way.
Let's start by creating the tokenizer to decode the predicted output classes to the output transcription.
Create Wav2Vec2CTCTokenizer
Remember that Wav2Vec2-like models fine-tuned on CTC transcribe an audio file with a single forward pass by first processing the audio input into a sequence of processed context representations and then using the final vocabulary output layer to classify each context representation to a character that represents the transcription.
The output size of this layer corresponds to the number of tokens in the vocabulary, and therefore only on the labeled dataset used for fine-tuning. So in the first step, we will take a look at the chosen dataset of Common Voice and define a vocabulary based on the transcriptions.
For this notebook, we will use Common Voice's 16.0 dataset for Mongolian. Mongolian corresponds to the language code "mn"
.
Now we can use 🤗 Datasets' simple API to download the data. The dataset name is "mozilla-foundation/common_voice_16_0"
, the configuration name corresponds to the language code, which is "mn"
in our case.
Note: Before being able to download the dataset, you have to access it by logging into your Hugging Face account, going on the dataset repo page and clicking on "Agree and Access repository"
Common Voice has many different splits including invalidated
, which refers to data that was not rated as "clean enough" to be considered useful. In this notebook, we will only make use of the splits "train"
, "validation"
and "test"
.
Because the Mongolian dataset is so small, we will merge both the validation and training data into a training dataset and only use the test data for validation.
from datasets import load_dataset, load_metric, Audio
common_voice_train = load_dataset("mozilla-foundation/common_voice_16_0", "mn", split="train+validation", use_auth_token=True)
common_voice_test = load_dataset("mozilla-foundation/common_voice_16_0", "mn", split="test", use_auth_token=True)
Many ASR datasets only provide the target text, 'sentence'
for each audio array 'audio'
and file 'path'
. Common Voice actually provides much more information about each audio file, such as the 'accent'
, etc. Keeping the notebook as general as possible, we only consider the transcribed text for fine-tuning.
common_voice_train = common_voice_train.remove_columns(["accent", "age", "client_id", "down_votes", "gender", "locale", "segment", "up_votes"])
common_voice_test = common_voice_test.remove_columns(["accent", "age", "client_id", "down_votes", "gender", "locale", "segment", "up_votes"])
Let's write a short function to display some random samples of the dataset and run it a couple of times to get a feeling for the transcriptions.
from datasets import ClassLabel
import random
import pandas as pd
from IPython.display import display, HTML
def show_random_elements(dataset, num_examples=10):
assert num_examples <= len(dataset), "Can't pick more elements than there are in the dataset."
picks = []
for _ in range(num_examples):
pick = random.randint(0, len(dataset)-1)
while pick in picks:
pick = random.randint(0, len(dataset)-1)
picks.append(pick)
df = pd.DataFrame(dataset[picks])
display(HTML(df.to_html()))
show_random_elements(common_voice_train.remove_columns(["path", "audio"]), num_examples=10)
Alright! The transcriptions look fairly clean. Having translated the transcribed sentences, it seems that the language corresponds more to written-out text than noisy dialogue. This makes sense considering that Common Voice is a crowd-sourced read speech corpus.
We can see that the transcriptions contain some special characters, such as ,.?!;:
. Without a language model, it is much harder to classify speech chunks to such special characters because they don't really correspond to a characteristic sound unit. E.g., the letter "s"
has a more or less clear sound, whereas the special character "."
does not.
Also in order to understand the meaning of a speech signal, it is usually not necessary to include special characters in the transcription.
Let's simply remove all characters that don't contribute to the meaning of a word and cannot really be represented by an acoustic sound and normalize the text.
import re
chars_to_remove_regex = '[\,\?\.\!\-\;\:\"\“\%\‘\”\�\'\»\«]'
def remove_special_characters(batch):
# remove special characters
batch["sentence"] = re.sub(chars_to_remove_regex, '', batch["sentence"]).lower()
return batch
common_voice_train = common_voice_train.map(remove_special_characters)
common_voice_test = common_voice_test.map(remove_special_characters)
Let's look at the processed text labels again.
show_random_elements(common_voice_train.remove_columns(["path","audio"]))
Хойч үе юуны төлөө тэмцэлдэхийг би мэдэхгүй.
Тэр өвдгөн дээрээ толгойгоо тавиад сулхан гиншинэ.
Эхнэргүй ганц бие хүн гэсэн санагдана.
Дамиран хотод төрж өссөн хээнцэр залуусын нэг билээ.
Мөн судлаачид шинжлэх ухааны үндэстэй тайлбар хайдаг.
Судалгааны ажил нь бүтэлгүй болсонд л гутарч маргааш илүү ажиллах тухай бодсон бололтой.
Ийм зөрчлөөс гэтлэх гарц "Оноосон нэрийн сан"-г үүсгэснээр шийдвэрлэгдэнэ.
Үүлтэй тэнгэрийн доогуур үзүүртэй моддын дээгүүр дүүлэн нисэх сэн.
Та нар ямар юмаа ингэж булаацалдаа вэ?
Тэд амьд хэлтрээ болов уу яагаа бол гэхээс одоо ч дотор арзганан бачуурдаг юм.
In CTC, it is common to classify speech chunks into letters, so we will do the same here. Let's extract all distinct letters of the training and test data and build our vocabulary from this set of letters.
We write a mapping function that concatenates all transcriptions into one long transcription and then transforms the string into a set of chars.
It is important to pass the argument batched=True
to the map(...)
function so that the mapping function has access to all transcriptions at once.
def extract_all_chars(batch):
all_text = " ".join(batch["sentence"])
vocab = list(set(all_text))
return {"vocab": [vocab], "all_text": [all_text]}
vocab_train = common_voice_train.map(extract_all_chars, batched=True, batch_size=-1, keep_in_memory=True, remove_columns=common_voice_train.column_names)
vocab_test = common_voice_test.map(extract_all_chars, batched=True, batch_size=-1, keep_in_memory=True, remove_columns=common_voice_test.column_names)
Now, we create the union of all distinct letters in the training dataset and test dataset and convert the resulting list into an enumerated dictionary.
vocab_list = list(set(vocab_train["vocab"][0]) | set(vocab_test["vocab"][0]))
vocab_dict = {v: k for k, v in enumerate(sorted(vocab_list))}
vocab_dict
{' ': 0,
'a': 1,
'b': 2,
'c': 3,
'd': 4,
'e': 5,
'g': 6,
'h': 7,
'i': 8,
'l': 9,
'n': 10,
'o': 11,
'r': 12,
't': 13,
'x': 14,
'а': 15,
'б': 16,
'в': 17,
'г': 18,
'д': 19,
'е': 20,
'ж': 21,
'з': 22,
'и': 23,
'й': 24,
'к': 25,
'л': 26,
'м': 27,
'н': 28,
'о': 29,
'п': 30,
'р': 31,
'с': 32,
'т': 33,
'у': 34,
'ф': 35,
'х': 36,
'ц': 37,
'ч': 38,
'ш': 39,
'ъ': 40,
'ы': 41,
'ь': 42,
'э': 43,
'ю': 44,
'я': 45,
'ё': 46,
'ү': 47,
'ө': 48}
Cleaning up a dataset is a back-and-forth process that needs to be done with care.
Looking at the separate letters in the training and test datasets, we see a mix of Latin and Mongolian Cyrillic characters. After discussing with a native speaker of the target language (thanks Mishig for taking a look), we'll remove the Latin characters for two reasons:
- the CTC algorithm benefits from reduced vocabulary size, so it is recommended to remove redundant characters
- in this example, we are concentrating entirely on the Mongolian alphabet.
def remove_latin_characters(batch):
batch["sentence"] = re.sub(r'[a-z]+', '', batch["sentence"])
return batch
# remove latin characters
common_voice_train = common_voice_train.map(remove_latin_characters)
common_voice_test = common_voice_test.map(remove_latin_characters)
# extract unique characters again
vocab_train = common_voice_train.map(extract_all_chars, batched=True, batch_size=-1, keep_in_memory=True, remove_columns=common_voice_train.column_names)
vocab_test = common_voice_test.map(extract_all_chars, batched=True, batch_size=-1, keep_in_memory=True, remove_columns=common_voice_test.column_names)
vocab_list = list(set(vocab_train["vocab"][0]) | set(vocab_test["vocab"][0]))
vocab_dict = {v: k for k, v in enumerate(sorted(vocab_list))}
vocab_dict
{' ': 0,
'а': 1,
'б': 2,
'в': 3,
'г': 4,
'д': 5,
'е': 6,
'ж': 7,
'з': 8,
'и': 9,
'й': 10,
'к': 11,
'л': 12,
'м': 13,
'н': 14,
'о': 15,
'п': 16,
'р': 17,
'с': 18,
'т': 19,
'у': 20,
'ф': 21,
'х': 22,
'ц': 23,
'ч': 24,
'ш': 25,
'ъ': 26,
'ы': 27,
'ь': 28,
'э': 29,
'ю': 30,
'я': 31,
'ё': 32,
'ү': 33,
'ө': 34}
Cool, we see that all letters of the Mongolian alphabet occur in the dataset (which is not really surprising) and we also extracted the special character " "
. Note that we did not exclude this special character because:
the model has to learn to predict when a word is finished or else the model prediction would always be a sequence of chars which would make it impossible to separate words from each other.
One should always keep in mind that pre-processing is a very important step before training your model. E.g., we don't want our model to differentiate between a
and A
just because we forgot to normalize the data. The difference between a
and A
does not depend on the "sound" of the letter at all, but more on grammatical rules - e.g. use a capitalized letter at the beginning of the sentence. So it is sensible to remove the difference between capitalized and non-capitalized letters so that the model has an easier time learning to transcribe speech. You can read more about the effects of pre-processing on the ASR task in the Audio Transformers Course.
To make it clearer that " "
has its own token class, we give it a more visible character |
. In addition, we also add an "unknown" token so that the model can later deal with characters not encountered in Common Voice's training set.
vocab_dict["|"] = vocab_dict[" "]
del vocab_dict[" "]
Finally, we also add a padding token that corresponds to CTC's "blank token". The "blank token" is a core component of the CTC algorithm. For more information, please take a look at the "Alignment" section of this blog post.
vocab_dict["[UNK]"] = len(vocab_dict)
vocab_dict["[PAD]"] = len(vocab_dict)
len(vocab_dict)
37
Cool, now our vocabulary is complete and consists of 37 tokens, which means that the linear layer that we will add on top of the pre-trained Wav2Vec2-BERT checkpoint will have an output dimension of 37.
Let's now save the vocabulary as a json file.
import json
with open('vocab.json', 'w') as vocab_file:
json.dump(vocab_dict, vocab_file)
In a final step, we use the json file to load the vocabulary into an instance of the Wav2Vec2CTCTokenizer
class
from transformers import Wav2Vec2CTCTokenizer
tokenizer = Wav2Vec2CTCTokenizer.from_pretrained("./", unk_token="[UNK]", pad_token="[PAD]", word_delimiter_token="|")
If one wants to re-use the just created tokenizer with the fine-tuned model of this notebook, it is strongly advised to upload the tokenizer
to the 🤗 Hub. Let's call the repo to which we will upload the files
"w2v-bert-2.0-mongolian-colab-CV16.0"
:
repo_name = "w2v-bert-2.0-mongolian-colab-CV16.0"
and upload the tokenizer to the 🤗 Hub.
tokenizer.push_to_hub(repo_name)
Great, you can see the just created repository under https://huggingface.co/<your-username>/w2v-bert-2.0-mongolian-colab-CV16.0
Create SeamlessM4TFeatureExtractor
The role of the SeamlessM4TFeatureExtractor
is to prepare the raw audio input in a format that the model can "understand". It therefore maps the sequence of one-dimensional amplitude values (aka the raw audio input) to a two-dimensional matrix of log-mel spectrogram values. The latter encodes the signal frequency information as a function of time. See this section from the Audio Transformers course to learn more about spectrograms and why they are important.
Unlike the tokenizer, the feature extractor doesn't need to be "learned" from the data, so we can load it directly from the initial model checkpoint.
from transformers import SeamlessM4TFeatureExtractor
feature_extractor = SeamlessM4TFeatureExtractor.from_pretrained("facebook/w2v-bert-2.0")
Great, Wav2Vec2-BERT's feature extraction pipeline is thereby fully defined!
For improved user-friendliness, the feature extractor and tokenizer are wrapped into a single Wav2Vec2BertProcessor
class so that one only needs a model
and processor
object.
from transformers import Wav2Vec2BertProcessor
processor = Wav2Vec2BertProcessor(feature_extractor=feature_extractor, tokenizer=tokenizer)
processor.push_to_hub(repo_name)
Next, we can prepare the dataset.
Preprocess Data
So far, we have not looked at the actual values of the speech signal but just the transcription. In addition to sentence
, our datasets include two more column names path
and audio
. path
states the absolute path of the audio file. Let's take a look.
common_voice_train[0]["path"]
/root/.cache/huggingface/datasets/downloads/extracted/276aa682ce2b6a24934bc401b1f30e004c3fb178dd41d6295b273329f592844a/mn_train_0/common_voice_mn_18578097.mp3
Wav2Vec2-BERT expects the input in the format of a 1-dimensional array of 16 kHz. This means that the audio file has to be loaded and resampled.
Thankfully, datasets
does this automatically by calling the other column audio
. Let try it out.
common_voice_train[0]["audio"]
{'path': '/root/.cache/huggingface/datasets/downloads/extracted/276aa682ce2b6a24934bc401b1f30e004c3fb178dd41d6295b273329f592844a/mn_train_0/common_voice_mn_18578097.mp3',
'array': array([ 0.00000000e+00, -1.64773251e-14, 1.81765166e-13, ...,
-3.23167333e-05, 2.20304846e-05, 3.26883201e-05]),
'sampling_rate': 48000}
Great, we can see that the audio file has automatically been loaded. This is thanks to the new "Audio"
feature introduced in datasets == 4.13.3
, which loads and resamples audio files on-the-fly upon calling.
In the example above we can see that the audio data is loaded with a sampling rate of 48kHz whereas Wav2Vec2-BERT was pre-trained at a sampling rate of 16kHz. The sampling rate plays an important role in that it defines how many data points of the speech signal are measured per second. Therefore, sampling with a higher sampling rate results in a better approximation of the real speech signal but also necessitates more values per second.
A pre-trained checkpoint expects its input data to have been sampled more or less from the same distribution as the data it was trained on. The same speech signals sampled at two different rates have a very different distribution, e.g., doubling the sampling rate results in data points being twice as long. Thus, before fine-tuning a pre-trained checkpoint of an ASR model, it is crucial to verify that the sampling rate of the data that was used to pre-train the model matches the sampling rate of the dataset used to fine-tune the model.
Luckily, we can set the audio feature to the correct sampling rate by making use of cast_column
:
common_voice_train = common_voice_train.cast_column("audio", Audio(sampling_rate=16_000))
common_voice_test = common_voice_test.cast_column("audio", Audio(sampling_rate=16_000))
Let's take a look at "audio"
again:
common_voice_train[0]["audio"]
{'path': '/root/.cache/huggingface/datasets/downloads/extracted/276aa682ce2b6a24934bc401b1f30e004c3fb178dd41d6295b273329f592844a/mn_train_0/common_voice_mn_18578097.mp3',
'array': array([ 9.09494702e-12, -2.27373675e-13, 5.45696821e-12, ...,
-5.22854862e-06, -1.21556368e-05, -9.76262163e-06]),
'sampling_rate': 16000}
This seemed to have worked! Let's listen to a couple of audio files to better understand the dataset and verify that the audio was correctly loaded.
import IPython.display as ipd
import numpy as np
import random
rand_int = random.randint(0, len(common_voice_train)-1)
print(common_voice_train[rand_int]["sentence"])
ipd.Audio(data=common_voice_train[rand_int]["audio"]["array"], autoplay=True, rate=16000)
It seems like the data is now correctly loaded and resampled.
It can be heard, that the speakers change along with their speaking rate, accent, and background environment, etc. Overall, the recordings sound acceptably clear though, which is to be expected from a crowd-sourced read speech corpus.
Let's do a final check that the data is correctly prepared, by printing the shape of the speech input, its transcription, and the corresponding sampling rate.
rand_int = random.randint(0, len(common_voice_train)-1)
print("Target text:", common_voice_train[rand_int]["sentence"])
print("Input array shape:", common_voice_train[rand_int]["audio"]["array"].shape)
print("Sampling rate:", common_voice_train[rand_int]["audio"]["sampling_rate"])
Target text: энэ бол тэдний амжилтын бодит нууц
Input array shape: (74496,)
Sampling rate: 16000
Good! Everything looks fine - the data is a 1-dimensional array, the sampling rate always corresponds to 16kHz, and the target text is normalized.
Finally, we can leverage Wav2Vec2BertProcessor
to process the data to the format expected by Wav2Vec2BertForCTC
for training. To do so let's make use of Dataset's map(...)
function.
First, we load and resample the audio data, simply by calling batch["audio"]
.
Second, we extract the input_features
from the loaded audio file. In our case, the Wav2Vec2BertProcessor
creates a more complex representation as the raw waveform, known as Log-Mel feature extraction.
Third, we encode the transcriptions to label ids.
def prepare_dataset(batch):
audio = batch["audio"]
batch["input_features"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_features[0]
batch["input_length"] = len(batch["input_features"])
batch["labels"] = processor(text=batch["sentence"]).input_ids
return batch
Let's apply the data preparation function to all examples.
common_voice_train = common_voice_train.map(prepare_dataset, remove_columns=common_voice_train.column_names)
common_voice_test = common_voice_test.map(prepare_dataset, remove_columns=common_voice_test.column_names)
Note**: datasets
automatically takes care of audio loading and resampling. If you wish to implement your own costumized data loading/sampling, feel free to just make use of the "path"
column instead and disregard the "audio"
column.
Awesome, now we are ready to start training!
Training
The data is processed so that we are ready to start setting up the training pipeline. We will make use of 🤗 Transformer's Trainer class, for which we essentially need to do the following:
Define a data collator. In contrast to most NLP models, Wav2Vec2-BERT has a much larger input length than output length. Given the large input sizes, it is much more efficient to pad the training batches dynamically meaning that all training samples should only be padded to the longest sample in their batch and not the overall longest sample. Therefore, fine-tuning Wav2Vec2-BERT requires a special padding data collator, which we will define below.
Evaluation metric. During training, the model should be evaluated on the word error rate. We should define a
compute_metrics
function accordinglyLoad a pre-trained checkpoint. We need to load a pre-trained checkpoint and configure it correctly for training.
Define the training configuration.
After having fine-tuned the model, we will correctly evaluate it on the test data and verify that it has indeed learned to correctly transcribe speech.
Set-up Trainer
Let's start by defining the data collator. The code for the data collator was copied from this example.
Without going into too many details, in contrast to the common data collators, this data collator treats the input_features
and labels
differently and thus applies to separate padding functions on them. This is necessary because in speech input and output are of different modalities meaning that they should not be treated by the same padding function.
Analogous to the common data collators, the padding tokens in the labels with -100
so that those tokens are not taken into account when computing the loss.
import torch
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union
@dataclass
class DataCollatorCTCWithPadding:
processor: Wav2Vec2BertProcessor
padding: Union[bool, str] = True
def __call__(self, features: List[Dict[str, Union[List[int], torch.Tensor]]]) -> Dict[str, torch.Tensor]:
# split inputs and labels since they have to be of different lengths and need
# different padding methods
input_features = [{"input_features": feature["input_features"]} for feature in features]
label_features = [{"input_ids": feature["labels"]} for feature in features]
batch = self.processor.pad(
input_features,
padding=self.padding,
return_tensors="pt",
)
labels_batch = self.processor.pad(
labels=label_features,
padding=self.padding,
return_tensors="pt",
)
# replace padding with -100 to ignore loss correctly
labels = labels_batch["input_ids"].masked_fill(labels_batch.attention_mask.ne(1), -100)
batch["labels"] = labels
return batch
data_collator = DataCollatorCTCWithPadding(processor=processor, padding=True)
Next, the evaluation metric is defined. As mentioned earlier, the predominant metric in ASR is the word error rate (WER), hence we will use it in this notebook as well.
wer_metric = load_metric("wer")
The model will return a sequence of logit vectors: with and .
A logit vector contains the log-odds for each word in the vocabulary we defined earlier, thus config.vocab_size
. We are interested in the most likely prediction of the model and thus take the argmax(...)
of the logits. Also, we transform the encoded labels back to the original string by replacing -100
with the pad_token_id
and decoding the ids while making sure that consecutive tokens are not grouped to the same token in CTC style .
def compute_metrics(pred):
pred_logits = pred.predictions
pred_ids = np.argmax(pred_logits, axis=-1)
pred.label_ids[pred.label_ids == -100] = processor.tokenizer.pad_token_id
pred_str = processor.batch_decode(pred_ids)
# we do not want to group tokens when computing the metrics
label_str = processor.batch_decode(pred.label_ids, group_tokens=False)
wer = wer_metric.compute(predictions=pred_str, references=label_str)
return {"wer": wer}
Now, we can load the main pre-trained checkpoint. The tokenizer's pad_token_id
must be to define the model's pad_token_id
or in the case of Wav2Vec2BertForCTC
also CTC's blank token . To save GPU memory, we enable PyTorch's gradient checkpointing and also set the loss reduction to "mean".
Since, we're only training a small subset of weights, the model is not prone to overfitting. Therefore, we make sure to disable all dropout layers.
Note: When using this notebook to train Wav2Vec2-BERT on another language of Common Voice those hyper-parameter settings might not work very well. Feel free to adapt those depending on your use case.
from transformers import Wav2Vec2BertForCTC
model = Wav2Vec2BertForCTC.from_pretrained(
"facebook/w2v-bert-2.0",
attention_dropout=0.0,
hidden_dropout=0.0,
feat_proj_dropout=0.0,
mask_time_prob=0.0,
layerdrop=0.0,
ctc_loss_reduction="mean",
add_adapter=True,
pad_token_id=processor.tokenizer.pad_token_id,
vocab_size=len(processor.tokenizer),
)
In a final step, we define all parameters related to training. To give more explanation on some of the parameters:
group_by_length
makes training more efficient by grouping training samples of similar input length into one batch. This can significantly speed up training time by heavily reducing the overall number of useless padding tokens that are passed through the modellearning_rate
was heuristically tuned until fine-tuning has become stable. Note that those parameters strongly depend on the Common Voice dataset and might be suboptimal for other speech datasets.
For more explanations on other parameters, one can take a look at the docs.
During training, a checkpoint will be uploaded asynchronously to the hub every 600 training steps. It allows you to also play around with the demo widget even while your model is still training.
Note: If one does not want to upload the model checkpoints to the hub, simply set push_to_hub=False
.
from transformers import TrainingArguments
training_args = TrainingArguments(
output_dir=repo_name,
group_by_length=True,
per_device_train_batch_size=16,
gradient_accumulation_steps=2,
evaluation_strategy="steps",
num_train_epochs=10,
gradient_checkpointing=True,
fp16=True,
save_steps=600,
eval_steps=300,
logging_steps=300,
learning_rate=5e-5,
warmup_steps=500,
save_total_limit=2,
push_to_hub=True,
)
Now, all instances can be passed to Trainer and we are ready to start training!
from transformers import Trainer
trainer = Trainer(
model=model,
data_collator=data_collator,
args=training_args,
compute_metrics=compute_metrics,
train_dataset=common_voice_train,
eval_dataset=common_voice_test,
tokenizer=processor.feature_extractor,
)
To allow models to become independent of the speaker rate, in CTC, consecutive tokens that are identical are simply grouped as a single token. However, the encoded labels should not be grouped when decoding since they don't correspond to the predicted tokens of the model, which is why the group_tokens=False
parameter has to be passed. If we wouldn't pass this parameter a word like "hello"
would incorrectly be encoded, and decoded as "helo"
.
The blank token allows the model to predict a word, such as "hello"
by forcing it to insert the blank token between the two l's. A CTC-conform prediction of "hello"
of our model would be [PAD] [PAD] "h" "e" "e" "l" "l" [PAD] "l" "o" "o" [PAD]
.
Training
Training will take multiple hours depending on the GPU allocated to this notebook. While the trained model yields somewhat satisfying results on Common Voice's test data of Mongolian, it is by no means an optimally fine-tuned model. The purpose of this notebook is just to demonstrate how to fine-tune Wav2Vec2-BERT on an ASR dataset.
trainer.train()
| Step | Training Loss | Validation Loss | Wer |
|---|---|---|---|
| 300 | 1.712700 | 0.647740 | 0.517892 |
| 600 | 0.349300 | 0.615849 | 0.442027 |
| 900 | 0.180500 | 0.525088 | 0.367305 |
| 1200 | 0.075400 | 0.528768 | 0.324016 |
The training loss and validation WER go down nicely. In comparison, the same training with whisper-large-v3, the commonly recognized state-of-the-art ASR model from OpenAI, has a final WER of 33.3%. You can find the resulting Whisper checkpoint here. This shows that Wav2Vec2-Bert can achieve performance close to or equivalent to that of the state of the art in low-resource languages.
You can now upload the result of the training to the 🤗 Hub, just execute this instruction:
trainer.push_to_hub()
You can now share this model with all your friends, family, favorite pets: they can all load it with the identifier "your-username/the-name-you-picked" so for instance:
from transformers import AutoModelForCTC, Wav2Vec2BertProcessor
model = AutoModelForCTC.from_pretrained("ylacombe/w2v-bert-2.0-mongolian-colab-CV16.0")
processor = Wav2Vec2BertProcessor.from_pretrained("ylacombe/w2v-bert-2.0-mongolian-colab-CV16.0")
For more examples of how Wav2Vec2-BERT can be fine-tuned, please take a look at the official speech recognition examples.
Evaluation
As a final check, let's load the model and verify that it indeed has learned to transcribe Mongolian speech.
Let's first load the pre-trained checkpoint.
model = Wav2Vec2BertForCTC.from_pretrained(repo_name).to("cuda")
processor = Wav2Vec2BertProcessor.from_pretrained(repo_name)
Let's process the audio, run a forward pass and predict the ids.
sample = common_voice_test[0]
input_features = torch.tensor(sample["input_features"]).to("cuda").unsqueeze(0)
with torch.no_grad():
logits = model(input_features).logits
pred_ids = torch.argmax(logits, dim=-1)[0]
Finally, we can decode the example from the predicted tokens and compare it to the reference transcription:
print(processor.decode(pred_ids))
print(processor.decode(sample["labels"]).lower())
эрчүүдийн ганцаардлыг эмэхтэйчүүд ойлгох нь ховор юм
эрчүдийн ганцардлыг эмэгтэйчүд ойлгох нь ховор юм
Alright! The transcription can definitely be recognized from our prediction, but it is not perfect yet. Training the model a bit longer, spending more time on the data pre-processing, and especially using a language model for decoding would certainly improve the model's overall performance.
For a demonstration model on a low-resource language, the results are quite acceptable however 🤗.
Scaling-up the training
We've shown in this blogpost how Meta's w2v-bert-2.0
fine-tuning can give near state-of-the-art performance on low-resource languages.
To take things a step further, I've put together a set of tips and pointers given by my colleagues at Hugging Face on how to scale up training for this model. These tips came to light when I showed them this blog post training run, as well as other training attempts (here and here).
Many thanks to Patrick, Sanchit and Pablo for their valuable expertise and help 🤗
Note that Common Voice newest version (CV16) provides many more hours of data and for may languages and thus provides fertile ground for much more efficient models in many low-resource languages.
Datasets-related tips
CTC ASR is typically done with lower-case, un-punctuated transcriptions. This simplifies the CTC task since the model is considered as "acoustic only", meaning that it makes prediction largely based on the phonetics sounds of the audio, rather than any language modelling context of the spoken sentence.
Very low-frequency characters can significantly affect loss during learning by causing loss spikes via erroneous targets. By default, the CTC tokenizer created in this blog post would add them to the vocabulary even if their frequency is negligible compared to more frequent characters. We can treat these characters as "errors" in the dataset annotation, so that they can be removed from the vocabulary, and simply classified as "[UNK]"
during training.
It is therefore absolutely necessary to recheck the tokenizer vocabulary and remove all low-frequency characters, in much the same way as we removed Latin characters when creating the tokenizer.
Note that the Common Voice dataset is particularly prone to such "wrong" characters, for example characters from other languages (阪).
Training-related tips
Average duration seen by each CTC token: through experimentation, we found the ideal ratio of duration seen per CTC token is 10 to 35 ms. In other words, to be able to learn and predict correctly, the duration of the acoustic information a CTC token needs to see should be neither too low nor too high. In fact, it should more or less correspond to a fraction of the time it takes us humans to pronounce a phoneme.
One of my training runs had a loss curve initially going nicely downwards, as expected, but at some point it started to explode. I realized that I had been using a basic checkpoint with no architecture changes, and that each CTC token was seeing a piece of the signal for 30 to 60 ms. Adding an convolutional adapter layer to sub-sample the encoder hidden-states along the time dimension was enough to reduce the signal chunk sampling to the desired duration and to prevent this type of loss curve.
Under-training: My colleagues quickly noticed when looking at my training runs that the models was severely under-trained, something that could have been spotted by looking at the loss curve, which looks like it was stopped in the middle of a steep descent. This pointed out other issues as well, notably the loss curve not being smooth enough, a sign of wrong hyper-parameters settings.
Here are a few ways to solve under-training in our case:
- the warm-up rate might be too high, causing the learning rate to drop too quickly. A way to solve this would be keep the warmup ratio to 5 to 15% and scale up the number of epochs. The warm-up steps are essential to gradually bring the new language-model head weights into alignment with the pre-trained model.
- Loss curve lack of smoothness can be played around thanks to AdamW's which can typically set from 0.95 to 0.98 by default.
Related posts and additional links are listed here: