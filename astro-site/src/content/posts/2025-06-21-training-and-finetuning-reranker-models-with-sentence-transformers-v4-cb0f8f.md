---
title: "Training and Finetuning Reranker Models with Sentence Transformers v4"
description: ""
summary: ""
pubDate: "Wed, 26 Mar 2025 00:00:00 GMT"
source: "Hugging Face Blog"
url: "https://huggingface.co/blog/train-reranker"
thumbnail: ""
---

Training and Finetuning Reranker Models with Sentence Transformers v4
Sentence Transformers is a Python library for using and training embedding and reranker models for a wide range of applications, such as retrieval augmented generation, semantic search, semantic textual similarity, paraphrase mining, and more. Its v4.0 update introduces a new training approach for rerankers, also known as cross-encoder models, similar to what the v3.0 update introduced for embedding models. In this blogpost, I'll show you how to use it to finetune a reranker model that beats all existing options on exactly your data. This method can also train extremely strong new reranker models from scratch.
Finetuning reranker models involves several components: datasets, loss functions, training arguments, evaluators, and the trainer class itself. I'll have a look at each of these components, accompanied by practical examples of how they can be used for finetuning strong reranker models.
Lastly, in the Evaluation section, I'll show you that my small finetuned tomaarsen/reranker-ModernBERT-base-gooaq-bce reranker model that I trained alongside this blogpost easily outperforms the 13 most commonly used public reranker models on my evaluation dataset. It even beats models that are 4x bigger.
Repeating the recipe with a bigger base model results in tomaarsen/reranker-ModernBERT-large-gooaq-bce, a reranker model that blows all existing general-purpose reranker models out of the water on my data.
If you're interested in finetuning embedding models instead, then consider reading through my prior Training and Finetuning Embedding Models with Sentence Transformers v3 blogpost as well.
Table of Contents
- What are Reranker models?
- Why Finetune?
- Training Components
- Dataset
- Loss Function
- Training Arguments
- Evaluator
- Trainer
- Training Tips
- Evaluation
- Additional Resources
What are Reranker models?
Reranker models, often implemented using Cross Encoder architectures, are designed to evaluate the relevance between pairs of texts (e.g., a query and a document, or two sentences). Unlike Sentence Transformers (a.k.a. bi-encoders, embedding models), which independently embed each text into vectors and compute similarity via a distance metric, Cross Encoder process the paired texts together through a shared neural network, resulting in one output score. By letting the two texts attend to each other, Cross Encoder models can outperform embedding models.
However, this strength comes with a trade-off: Cross Encoder models are slower as they process every possible pair of texts (e.g., 10 queries with 500 candidate documents requires 5,000 computations instead of 510 for embedding models). This makes them less efficient for large-scale initial retrieval but ideal for reranking: refining the top-k results first identified by faster Sentence Transformer models. The strongest search systems commonly use this 2-stage "retrieve and rerank" approach.
Throughout this blogpost, I'll use "reranker model" and "Cross Encoder model" interchangeably.
Why Finetune?
Reranker models are often tasked with a challenging problem:
Which of these highly-related documents answers the query the best?
General-purpose reranker models are trained to perform adequately on this exact question in a wide range of domains and topics, preventing them from reaching their maximum potential in your specific domain. Through finetuning, the model can learn to focus exclusively on the domain and/or language that matters to you.
In the Evaluation section end of this blogpost, I'll show that training a model on your domain can outperform any general-purpose reranker model, even if those baselines are much bigger. Don't underestimate the power of finetuning on your domain!
Training Components
Training reranker models involves the following components:
- Dataset: The data used for training and/or evaluation.
- Loss Function: A function that measures the model's performance and guides the optimization process.
- Training Arguments (optional): Parameters that impact training performance, tracking, and debugging.
- Evaluator (optional): A class for evaluating the model before, during, or after training.
- Trainer: Brings together all training components.
Let's take a closer look at each component.
Dataset
The CrossEncoderTrainer
uses datasets.Dataset
or datasets.DatasetDict
instances for training and evaluation. You can load data from the Hugging Face Datasets Hub or use your local data in whatever format you prefer (e.g. CSV, JSON, Parquet, Arrow, or SQL).
Note: Lots of public datasets that work out of the box with Sentence Transformers have been tagged with sentence-transformers
on the Hugging Face Hub, so you can easily find them on https://huggingface.co/datasets?other=sentence-transformers. Consider browsing through these to find ready-to-go datasets that might be useful for your tasks, domains, or languages.
Data on the Hugging Face Hub
You can use the load_dataset
function to load data from datasets in the Hugging Face Hub
from datasets import load_dataset
train_dataset = load_dataset("sentence-transformers/natural-questions", split="train")
print(train_dataset)
"""
Dataset({
features: ['query', 'answer'],
num_rows: 100231
})
"""
Some datasets, like nthakur/swim-ir-monolingual
, have multiple subsets with different data formats. You need to specify the subset name along with the dataset name, e.g. dataset = load_dataset("nthakur/swim-ir-monolingual", "de", split="train")
.
Local Data (CSV, JSON, Parquet, Arrow, SQL)
You can also use load_dataset
for loading local data in certain file formats:
from datasets import load_dataset
dataset = load_dataset("csv", data_files="my_file.csv")
# or
dataset = load_dataset("json", data_files="my_file.json")
Local Data that requires pre-processing
You can use datasets.Dataset.from_dict
if your local data requires pre-processing. This allows you to initialize your dataset with a dictionary of lists:
from datasets import Dataset
queries = []
documents = []
# Open a file, perform preprocessing, filtering, cleaning, etc.
# and append to the lists
dataset = Dataset.from_dict({
"query": queries,
"document": documents,
})
Each key in the dictionary becomes a column in the resulting dataset.
Dataset Format
It is important that your dataset format matches your loss function (or that you choose a loss function that matches your dataset format and model). Verifying whether a dataset format and model work with a loss function involves three steps:
- All columns not named "label", "labels", "score", or "scores" are considered Inputs according to the Loss Overview table. The number of remaining columns must match the number of valid inputs for your chosen loss.
- If your loss function requires a Label according to the Loss Overview table, then your dataset must have a column named "label", "labels", "score", or "scores". This column is automatically taken as the label.
- The number of model output labels matches what is required for the loss according to Loss Overview table.
For example, given a dataset with columns ["text1", "text2", "label"]
where the "label" column has float similarity score ranging from 0 to 1 and a model outputting 1 label, we can use it with BinaryCrossEntropyLoss
because:
- the dataset has a "label" column as is required for this loss function.
- the dataset has 2 non-label columns, exactly the amount required by this loss functions.
- the model has 1 output label, exactly as required by this loss function.
Be sure to re-order your dataset columns with Dataset.select_columns
if your columns are not ordered correctly. For example, if your dataset has ["good_answer", "bad_answer", "question"]
as columns, then this dataset can technically be used with a loss that requires (anchor, positive, negative) triplets, but the good_answer
column will be taken as the anchor, bad_answer
as the positive, and question
as the negative.
Additionally, if your dataset has extraneous columns (e.g. sample_id, metadata, source, type), you should remove these with Dataset.remove_columns
as they will be used as inputs otherwise. You can also use Dataset.select_columns
to keep only the desired columns.
Hard Negatives Mining
The success of training reranker models often depends on the quality of the negatives, i.e. the passages for which the query-negative score should be low. Negatives can be divided into two types:
- Soft negatives: passages that are completely unrelated. Also called easy negatives.
- Hard negatives: passages that seem like they might be relevant for the query, but are not.
A concise example is:
- Query: Where was Apple founded?
- Soft Negative: The Cache River Bridge is a Parker pony truss that spans the Cache River between Walnut Ridge and Paragould, Arkansas.
- Hard Negative: The Fuji apple is an apple cultivar developed in the late 1930s, and brought to market in 1962.
The strongest CrossEncoder models are generally trained to recognize hard negatives, and so it's valuable to be able to "mine" hard negatives to train with. Sentence Transformers supports a strong mine_hard_negatives
function that can assist, given a dataset of query-answer pairs:
from datasets import load_dataset
from sentence_transformers import SentenceTransformer
from sentence_transformers.util import mine_hard_negatives
# Load the GooAQ dataset: https://huggingface.co/datasets/sentence-transformers/gooaq
train_dataset = load_dataset("sentence-transformers/gooaq", split="train").select(range(100_000))
print(train_dataset)
# Mine hard negatives using a very efficient embedding model
embedding_model = SentenceTransformer("sentence-transformers/static-retrieval-mrl-en-v1", device="cpu")
hard_train_dataset = mine_hard_negatives(
train_dataset,
embedding_model,
num_negatives=5, # How many negatives per question-answer pair
range_min=10, # Skip the x most similar samples
range_max=100, # Consider only the x most similar samples
max_score=0.8, # Only consider samples with a similarity score of at most x
margin=0.1, # Similarity between query and negative samples should be x lower than query-positive similarity
sampling_strategy="top", # Randomly sample negatives from the range
batch_size=4096, # Use a batch size of 4096 for the embedding model
output_format="labeled-pair", # The output format is (query, passage, label), as required by BinaryCrossEntropyLoss
use_faiss=True, # Using FAISS is recommended to keep memory usage low (pip install faiss-gpu or pip install faiss-cpu)
)
print(hard_train_dataset)
print(hard_train_dataset[1])
Click to see the outputs of this script.
Dataset({
features: ['question', 'answer'],
num_rows: 100000
})
Batches: 100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 22/22 [00:01<00:00, 13.74it/s]
Batches: 100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 25/25 [00:00<00:00, 36.49it/s]
Querying FAISS index: 100%|█████████████████████████████████████████████████████████████████████████████████████████████████████████| 7/7 [00:19<00:00, 2.80s/it]
Metric Positive Negative Difference
Count 100,000 436,925
Mean 0.5882 0.4040 0.2157
Median 0.5989 0.4024 0.1836
Std 0.1425 0.0905 0.1013
Min -0.0514 0.1405 0.1014
25% 0.4993 0.3377 0.1352
50% 0.5989 0.4024 0.1836
75% 0.6888 0.4681 0.2699
Max 0.9748 0.7486 0.7545
Skipped 2420871 potential negatives (23.97%) due to the margin of 0.1.
Skipped 43 potential negatives (0.00%) due to the maximum score of 0.8.
Could not find enough negatives for 63075 samples (12.62%). Consider adjusting the range_max, range_min, margin and max_score parameters if you'd like to find more valid negatives.
Dataset({
features: ['question', 'answer', 'label'],
num_rows: 536925
})
{
'question': 'how to transfer bookmarks from one laptop to another?',
'answer': 'Using an External Drive Just about any external drive, including a USB thumb drive, or an SD card can be used to transfer your files from one laptop to another. Connect the drive to your old laptop; drag your files to the drive, then disconnect it and transfer the drive contents onto your new laptop.',
'label': 0
}
Loss Function
Loss functions help evaluate a model's performance on a set of data and direct the training process. The right loss function for your task depends on the data you have and what you're trying to achieve. You can find a full list of available loss functions in the Loss Overview.
Most loss functions are easy to set up - you just need to provide the CrossEncoder
model you're training:
from datasets import load_dataset
from sentence_transformers import CrossEncoder
from sentence_transformers.cross_encoder.losses import CachedMultipleNegativesRankingLoss
# Load a model to train/finetune
model = CrossEncoder("xlm-roberta-base", num_labels=1) # num_labels=1 is for rerankers
# Initialize the CachedMultipleNegativesRankingLoss, which requires pairs of
# related texts or triplets
loss = CachedMultipleNegativesRankingLoss(model)
# Load an example training dataset that works with our loss function:
train_dataset = load_dataset("sentence-transformers/gooaq", split="train")
...
Training Arguments
You can customize the training process using the CrossEncoderTrainingArguments
class. This class lets you adjust parameters that can impact training speed and help you understand what's happening during training.
For more information on the most useful training arguments, check out the Cross Encoder > Training Overview > Training Arguments. It's worth reading to get the most out of your training.
Here's an example of how to set up CrossEncoderTrainingArguments
:
from sentence_transformers.cross_encoder import CrossEncoderTrainingArguments
args = CrossEncoderTrainingArguments(
# Required parameter:
output_dir="models/reranker-MiniLM-msmarco-v1",
# Optional training parameters:
num_train_epochs=1,
per_device_train_batch_size=16,
per_device_eval_batch_size=16,
learning_rate=2e-5,
warmup_ratio=0.1,
fp16=True, # Set to False if you get an error that your GPU can't run on FP16
bf16=False, # Set to True if you have a GPU that supports BF16
batch_sampler=BatchSamplers.NO_DUPLICATES, # losses that use "in-batch negatives" benefit from no duplicates
# Optional tracking/debugging parameters:
eval_strategy="steps",
eval_steps=100,
save_strategy="steps",
save_steps=100,
save_total_limit=2,
logging_steps=100,
run_name="reranker-MiniLM-msmarco-v1", # Will be used in W&B if `wandb` is installed
)
Evaluator
To track your model's performance during training, you can pass an eval_dataset
to the CrossEncoderTrainer
. However, you might want more detailed metrics beyond just the evaluation loss. That's where evaluators can help you assess your model's performance using specific metrics at various stages of training. You can use an evaluation dataset, an evaluator, both, or neither, depending on your needs. The evaluation strategy and frequency are controlled by the eval_strategy
and eval_steps
Training Arguments.
Sentence Transformers includes the following built-in evaluators:
| Evaluator | Required Data |
|---|---|
CrossEncoderClassificationEvaluator |
Pairs with class labels (binary or multiclass) |
CrossEncoderCorrelationEvaluator |
Pairs with similarity scores |
CrossEncoderNanoBEIREvaluator |
No data required |
CrossEncoderRerankingEvaluator |
List of {'query': '...', 'positive': [...], 'negative': [...]} dictionaries. Negatives can be mined with mine_hard_negatives |
You can also use SequentialEvaluator
to join multiple evaluators into one, which can then be passed to the CrossEncoderTrainer
. You can also just pass a list of evaluators to the trainer.
Sometimes you don't have the required evaluation data to prepare one of these evaluators on your own, but you still want to track how well the model performs on some common benchmarks. In that case, you can use these evaluators with data from Hugging Face.
CrossEncoderCorrelationEvaluator with STSb
The STS Benchmark (a.k.a. STSb) is a commonly used benchmarking dataset to measure the model's understanding of semantic textual similarity of short texts like "A man is feeding a mouse to a snake.".
Feel free to browse the sentence-transformers/stsb dataset on Hugging Face.
from datasets import load_dataset
from sentence_transformers import CrossEncoder
from sentence_transformers.cross_encoder.evaluation import CrossEncoderCorrelationEvaluator
# Load a model
model = CrossEncoder("cross-encoder/stsb-TinyBERT-L4")
# Load the STSB dataset (https://huggingface.co/datasets/sentence-transformers/stsb)
eval_dataset = load_dataset("sentence-transformers/stsb", split="validation")
pairs = list(zip(eval_dataset["sentence1"], eval_dataset["sentence2"]))
# Initialize the evaluator
dev_evaluator = CrossEncoderCorrelationEvaluator(
sentence_pairs=pairs,
scores=eval_dataset["score"],
name="sts_dev",
)
# You can run evaluation like so:
# results = dev_evaluator(model)
# Later, you can provide this evaluator to the trainer to get results during training
CrossEncoderRerankingEvaluator with GooAQ mined negatives
Preparing data for CrossEncoderRerankingEvaluator
can be difficult as you need negatives in addition to your query-positive data.
The mine_hard_negatives
function has a convenient include_positives
parameter, which can be set to True
to also mine for the positive texts. When supplied as documents
(which have to be 1. ranked and 2. contain positives) to CrossEncoderRerankingEvaluator
, the evaluator will not just evaluate the reranking performance of the CrossEncoder, but also the original rankings by the embedding model used for mining.
For example:
CrossEncoderRerankingEvaluator: Evaluating the model on the gooaq-dev dataset:
Queries: 1000 Positives: Min 1.0, Mean 1.0, Max 1.0 Negatives: Min 49.0, Mean 49.1, Max 50.0
Base -> Reranked
MAP: 53.28 -> 67.28
MRR@10: 52.40 -> 66.65
NDCG@10: 59.12 -> 71.35
Note that by default, if you are using CrossEncoderRerankingEvaluator
with documents
, the evaluator will rerank with all positives, even if they are not in the documents. This is useful for getting a stronger signal out of your evaluator, but does give a slightly unrealistic performance. After all, the maximum performance is now 100, whereas normally its bounded by whether the first-stage retriever actually retrieved the positives.
You can enable the realistic behaviour by setting always_rerank_positives=False
when initializing CrossEncoderRerankingEvaluator
. Repeating the same script with this realistic two-stage performance results in::
CrossEncoderRerankingEvaluator: Evaluating the model on the gooaq-dev dataset:
Queries: 1000 Positives: Min 1.0, Mean 1.0, Max 1.0 Negatives: Min 49.0, Mean 49.1, Max 50.0
Base -> Reranked
MAP: 53.28 -> 66.12
MRR@10: 52.40 -> 65.61
NDCG@10: 59.12 -> 70.10
from datasets import load_dataset
from sentence_transformers import SentenceTransformer
from sentence_transformers.cross_encoder import CrossEncoder
from sentence_transformers.cross_encoder.evaluation import CrossEncoderRerankingEvaluator
from sentence_transformers.util import mine_hard_negatives
# Load a model
model = CrossEncoder("cross-encoder/ms-marco-MiniLM-L6-v2")
# Load the GooAQ dataset: https://huggingface.co/datasets/sentence-transformers/gooaq
full_dataset = load_dataset("sentence-transformers/gooaq", split=f"train").select(range(100_000))
dataset_dict = full_dataset.train_test_split(test_size=1_000, seed=12)
train_dataset = dataset_dict["train"]
eval_dataset = dataset_dict["test"]
print(eval_dataset)
"""
Dataset({
features: ['question', 'answer'],
num_rows: 1000
})
"""
# Mine hard negatives using a very efficient embedding model
embedding_model = SentenceTransformer("sentence-transformers/static-retrieval-mrl-en-v1", device="cpu")
hard_eval_dataset = mine_hard_negatives(
eval_dataset,
embedding_model,
corpus=full_dataset["answer"], # Use the full dataset as the corpus
num_negatives=50, # How many negatives per question-answer pair
batch_size=4096, # Use a batch size of 4096 for the embedding model
output_format="n-tuple", # The output format is (query, positive, negative1, negative2, ...) for the evaluator
include_positives=True, # Key: Include the positive answer in the list of negatives
use_faiss=True, # Using FAISS is recommended to keep memory usage low (pip install faiss-gpu or pip install faiss-cpu)
)
print(hard_eval_dataset)
"""
Dataset({
features: ['question', 'answer', 'negative_1', 'negative_2', 'negative_3', 'negative_4', 'negative_5', 'negative_6', 'negative_7', 'negative_8', 'negative_9', 'negative_10', 'negative_11', 'negative_12', 'negative_13', 'negative_14', 'negative_15', 'negative_16', 'negative_17', 'negative_18', 'negative_19', 'negative_20', 'negative_21', 'negative_22', 'negative_23', 'negative_24', 'negative_25', 'negative_26', 'negative_27', 'negative_28', 'negative_29', 'negative_30', 'negative_31', 'negative_32', 'negative_33', 'negative_34', 'negative_35', 'negative_36', 'negative_37', 'negative_38', 'negative_39', 'negative_40', 'negative_41', 'negative_42', 'negative_43', 'negative_44', 'negative_45', 'negative_46', 'negative_47', 'negative_48', 'negative_49', 'negative_50'],
num_rows: 1000
})
"""
reranking_evaluator = CrossEncoderRerankingEvaluator(
samples=[
{
"query": sample["question"],
"positive": [sample["answer"]],
"documents": [sample[column_name] for column_name in hard_eval_dataset.column_names[2:]],
}
for sample in hard_eval_dataset
],
batch_size=32,
name="gooaq-dev",
)
# You can run evaluation like so
results = reranking_evaluator(model)
"""
CrossEncoderRerankingEvaluator: Evaluating the model on the gooaq-dev dataset:
Queries: 1000 Positives: Min 1.0, Mean 1.0, Max 1.0 Negatives: Min 49.0, Mean 49.1, Max 50.0
Base -> Reranked
MAP: 53.28 -> 67.28
MRR@10: 52.40 -> 66.65
NDCG@10: 59.12 -> 71.35
"""
# {'gooaq-dev_map': 0.6728370126462222, 'gooaq-dev_mrr@10': 0.6665190476190477, 'gooaq-dev_ndcg@10': 0.7135068904582963, 'gooaq-dev_base_map': 0.5327714512001362, 'gooaq-dev_base_mrr@10': 0.5239674603174603, 'gooaq-dev_base_ndcg@10': 0.5912299141913905}
Trainer
The CrossEncoderTrainer
is where all previous components come together. We only have to specify the trainer with the model, training arguments (optional), training dataset, evaluation dataset (optional), loss function, evaluator (optional) and we can start training. Let’s have a look at a script where all of these components come together:
import logging
import traceback
import torch
from datasets import load_dataset
from sentence_transformers import SentenceTransformer
from sentence_transformers.cross_encoder import (
CrossEncoder,
CrossEncoderModelCardData,
CrossEncoderTrainer,
CrossEncoderTrainingArguments,
)
from sentence_transformers.cross_encoder.evaluation import (
CrossEncoderNanoBEIREvaluator,
CrossEncoderRerankingEvaluator,
)
from sentence_transformers.cross_encoder.losses.BinaryCrossEntropyLoss import BinaryCrossEntropyLoss
from sentence_transformers.evaluation.SequentialEvaluator import SequentialEvaluator
from sentence_transformers.util import mine_hard_negatives
# Set the log level to INFO to get more information
logging.basicConfig(format="%(asctime)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S", level=logging.INFO)
def main():
model_name = "answerdotai/ModernBERT-base"
train_batch_size = 16
num_epochs = 1
num_hard_negatives = 5 # How many hard negatives should be mined for each question-answer pair
# 1a. Load a model to finetune with 1b. (Optional) model card data
model = CrossEncoder(
model_name,
model_card_data=CrossEncoderModelCardData(
language="en",
license="apache-2.0",
model_name="ModernBERT-base trained on GooAQ",
),
)
print("Model max length:", model.max_length)
print("Model num labels:", model.num_labels)
# 2a. Load the GooAQ dataset: https://huggingface.co/datasets/sentence-transformers/gooaq
logging.info("Read the gooaq training dataset")
full_dataset = load_dataset("sentence-transformers/gooaq", split="train").select(range(100_000))
dataset_dict = full_dataset.train_test_split(test_size=1_000, seed=12)
train_dataset = dataset_dict["train"]
eval_dataset = dataset_dict["test"]
logging.info(train_dataset)
logging.info(eval_dataset)
# 2b. Modify our training dataset to include hard negatives using a very efficient embedding model
embedding_model = SentenceTransformer("sentence-transformers/static-retrieval-mrl-en-v1", device="cpu")
hard_train_dataset = mine_hard_negatives(
train_dataset,
embedding_model,
num_negatives=num_hard_negatives, # How many negatives per question-answer pair
margin=0, # Similarity between query and negative samples should be x lower than query-positive similarity
range_min=0, # Skip the x most similar samples
range_max=100, # Consider only the x most similar samples
sampling_strategy="top", # Sample the top negatives from the range
batch_size=4096, # Use a batch size of 4096 for the embedding model
output_format="labeled-pair", # The output format is (query, passage, label), as required by BinaryCrossEntropyLoss
use_faiss=True,
)
logging.info(hard_train_dataset)
# 2c. (Optionally) Save the hard training dataset to disk
# hard_train_dataset.save_to_disk("gooaq-hard-train")
# Load again with:
# hard_train_dataset = load_from_disk("gooaq-hard-train")
# 3. Define our training loss.
# pos_weight is recommended to be set as the ratio between positives to negatives, a.k.a. `num_hard_negatives`
loss = BinaryCrossEntropyLoss(model=model, pos_weight=torch.tensor(num_hard_negatives))
# 4a. Define evaluators. We use the CrossEncoderNanoBEIREvaluator, which is a light-weight evaluator for English reranking
nano_beir_evaluator = CrossEncoderNanoBEIREvaluator(
dataset_names=["msmarco", "nfcorpus", "nq"],
batch_size=train_batch_size,
)
# 4b. Define a reranking evaluator by mining hard negatives given query-answer pairs
# We include the positive answer in the list of negatives, so the evaluator can use the performance of the
# embedding model as a baseline.
hard_eval_dataset = mine_hard_negatives(
eval_dataset,
embedding_model,
corpus=full_dataset["answer"], # Use the full dataset as the corpus
num_negatives=30, # How many documents to rerank
batch_size=4096,
include_positives=True,
output_format="n-tuple",
use_faiss=True,
)
logging.info(hard_eval_dataset)
reranking_evaluator = CrossEncoderRerankingEvaluator(
samples=[
{
"query": sample["question"],
"positive": [sample["answer"]],
"documents": [sample[column_name] for column_name in hard_eval_dataset.column_names[2:]],
}
for sample in hard_eval_dataset
],
batch_size=train_batch_size,
name="gooaq-dev",
always_rerank_positives=False,
)
# 4c. Combine the evaluators & run the base model on them
evaluator = SequentialEvaluator([reranking_evaluator, nano_beir_evaluator])
evaluator(model)
# 5. Define the training arguments
short_model_name = model_name if "/" not in model_name else model_name.split("/")[-1]
run_name = f"reranker-{short_model_name}-gooaq-bce"
args = CrossEncoderTrainingArguments(
# Required parameter:
output_dir=f"models/{run_name}",
# Optional training parameters:
num_train_epochs=num_epochs,
per_device_train_batch_size=train_batch_size,
per_device_eval_batch_size=train_batch_size,
learning_rate=2e-5,
warmup_ratio=0.1,
fp16=False, # Set to False if you get an error that your GPU can't run on FP16
bf16=True, # Set to True if you have a GPU that supports BF16
dataloader_num_workers=4,
load_best_model_at_end=True,
metric_for_best_model="eval_gooaq-dev_ndcg@10",
# Optional tracking/debugging parameters:
eval_strategy="steps",
eval_steps=4000,
save_strategy="steps",
save_steps=4000,
save_total_limit=2,
logging_steps=1000,
logging_first_step=True,
run_name=run_name, # Will be used in W&B if `wandb` is installed
seed=12,
)
# 6. Create the trainer & start training
trainer = CrossEncoderTrainer(
model=model,
args=args,
train_dataset=hard_train_dataset,
loss=loss,
evaluator=evaluator,
)
trainer.train()
# 7. Evaluate the final model, useful to include these in the model card
evaluator(model)
# 8. Save the final model
final_output_dir = f"models/{run_name}/final"
model.save_pretrained(final_output_dir)
# 9. (Optional) save the model to the Hugging Face Hub!
# It is recommended to run `huggingface-cli login` to log into your Hugging Face account first
try:
model.push_to_hub(run_name)
except Exception:
logging.error(
f"Error uploading model to the Hugging Face Hub:\n{traceback.format_exc()}To upload it manually, you can run "
f"`huggingface-cli login`, followed by loading the model using `model = CrossEncoder({final_output_dir!r})` "
f"and saving it using `model.push_to_hub('{run_name}')`."
)
if __name__ == "__main__":
main()
In this example I'm finetuning from answerdotai/ModernBERT-base
, a base model that is not yet a Cross Encoder model. This generally requires more training data than finetuning an existing reranker model like Alibaba-NLP/gte-multilingual-reranker-base
. I'm using 99k query-answer pairs from the GooAQ dataset, after which I mine hard negatives using the sentence-transformers/static-retrieval-mrl-en-v1 embedding model. This results in 578k labeled pairs: 99k positive pairs (i.e. label=1) and 479k negative pairs (i.e. label=0).
I use the BinaryCrossEntropyLoss
, which is well suited for these labeled pairs. I also set up 2 forms of evaluation: CrossEncoderNanoBEIREvaluator
which evaluates against the NanoBEIR benchmark and CrossEncoderRerankingEvaluator
which evaluates the performance of reranking the top 30 results from the aforementioned static embedding model. Afterwards, I define a fairly standard set of hyperparameters, including learning rates, warmup ratios, bf16, loading the best model at the end, and some debugging parameters. Lastly, I run the trainer, perform post-training evaluation, and save the model both locally and on the Hugging Face Hub.
After running this script, the tomaarsen/reranker-ModernBERT-base-gooaq-bce model was uploaded for me. See the upcoming Evaluation section with evidence that this model outperformed 13 commonly used open-source alternatives, including much bigger models. I also ran the model with answerdotai/ModernBERT-large
as the base model, resulting in tomaarsen/reranker-ModernBERT-large-gooaq-bce.
Evaluation results are automatically stored in the generated model card upon saving a model, alongside the base model, language, license, evaluation results, training & evaluation dataset info, hyperparameters, training logs, and more. Without any effort, your uploaded models should contain all the information that your potential users would need to determine whether your model is suitable for them.
Callbacks
The CrossEncoder trainer supports various transformers.TrainerCallback
subclasses, including:
WandbCallback
for logging training metrics to W&B ifwandb
is installedTensorBoardCallback
for logging training metrics to TensorBoard iftensorboard
is accessibleCodeCarbonCallback
for tracking carbon emissions during training ifcodecarbon
is installed
These are automatically used without you having to specify anything, as long as the required dependency is installed.
Refer to the Transformers Callbacks documentation for more information on these callbacks and how to create your own.
Multi-Dataset Training
Typically, top-performing general-purpose models are trained on multiple datasets simultaneously. However, this approach can be challenging due to the varying formats of each dataset. Fortunately, the CrossEncoderTrainer
allows you to train on multiple datasets without requiring a uniform format. Additionally, it provides the flexibility to apply different loss functions to each dataset. Here are the steps to train with multiple datasets at once:
- Use a dictionary of
datasets.Dataset
instances (or adatasets.DatasetDict
) as thetrain_dataset
(and optionally alsoeval_dataset
). - (Optional) Use a dictionary of loss functions mapping dataset names to losses. Only required if you wish to use different loss function for different datasets.
Each training/evaluation batch will only contain samples from one of the datasets. The order in which batches are sampled from the multiple datasets is defined by the MultiDatasetBatchSamplers
enum, which can be passed to the CrossEncoderTrainingArguments
via multi_dataset_batch_sampler
. Valid options are:
MultiDatasetBatchSamplers.ROUND_ROBIN
: Round-robin sampling from each dataset until one is exhausted. With this strategy, it’s likely that not all samples from each dataset are used, but each dataset is sampled from equally.MultiDatasetBatchSamplers.PROPORTIONAL
(default): Sample from each dataset in proportion to its size. With this strategy, all samples from each dataset are used and larger datasets are sampled from more frequently.
Training Tips
Cross Encoder models have their own unique quirks, so here’s some tips to help you out:
CrossEncoder models overfit rather quickly, so it’s recommended to use an evaluator like
CrossEncoderNanoBEIREvaluator
orCrossEncoderRerankingEvaluator
together with theload_best_model_at_end
andmetric_for_best_model
training arguments to load the model with the best evaluation performance after training.CrossEncoders are particularly receptive to strong hard negatives (
mine_hard_negatives
). They teach the model to be very strict, useful e.g. when distinguishing between passages that answer a question or passages that relate to a question.- Note that if you only use hard negatives, your model may unexpectedly perform worse for easier tasks. This can mean that reranking the top 200 results from a first-stage retrieval system (e.g. with a SentenceTransformer model) can actually give worse top-10 results than reranking the top 100. Training using random negatives alongside hard negatives can mitigate this.
Don’t underestimate
BinaryCrossEntropyLoss
, it remains a very strong option despite being simpler than learning-to-rank (LambdaLoss, ListNetLoss) or in-batch negatives (CachedMultipleNegativesRankingLoss, MultipleNegativesRankingLoss) losses, and its data is easy to prepare, especially usingmine_hard_negatives
.
Evaluation
I ran a reranking evaluation of my model from the Trainer section against several baselines on the GooAQ development set with both always_rerank_positives=False
and with always_rerank_positives=True
in the reranking evaluator. These represent the realistic (only rerank what the retriever found) and evaluation (rerank all positives, even if the retriever didn't find it) formats, respectively.
As a reminder, I used the extremely efficient sentence-transformers/static-retrieval-mrl-en-v1
static embedding model to retrieve the top 30 for reranking.
| Model | Model Parameters | GooAQ NDCG@10 after reranking top 30 | GooAQ NDCG@10 after reranking top 30 + all positives |
|---|---|---|---|
| No reranking, retriever only | - | 59.12 | 59.12 |
| cross-encoder/ms-marco-MiniLM-L6-v2 | 22.7M | 69.56 | 72.09 |
| jinaai/jina-reranker-v1-tiny-en | 33M | 66.83 | 69.54 |
| jinaai/jina-reranker-v1-turbo-en | 37.8M | 72.01 | 76.10 |
| jinaai/jina-reranker-v2-base-multilingual | 278M | 74.87 | 78.88 |
| BAAI/bge-reranker-base | 278M | 70.98 | 74.31 |
| BAAI/bge-reranker-large | 560M | 73.20 | 77.46 |
| BAAI/bge-reranker-v2-m3 | 568M | 73.56 | 77.55 |
| mixedbread-ai/mxbai-rerank-xsmall-v1 | 70.8M | 66.63 | 69.41 |
| mixedbread-ai/mxbai-rerank-base-v1 | 184M | 70.43 | 74.39 |
| mixedbread-ai/mxbai-rerank-large-v1 | 435M | 74.03 | 78.66 |
| mixedbread-ai/mxbai-rerank-base-v2 | 494M | 73.03 | 76.76 |
| mixedbread-ai/mxbai-rerank-large-v2 | 1.54B | 75.40 | 80.04 |
| Alibaba-NLP/gte-reranker-modernbert-base | 150M | 73.18 | 77.49 |
| tomaarsen/reranker-ModernBERT-base-gooaq-bce | 150M | 77.14 | 83.51 |
| tomaarsen/reranker-ModernBERT-large-gooaq-bce | 396M | 79.42 | 85.81 |
Click to see the Evaluation Script & datasets
Here is the evaluation script:
import logging
from pprint import pprint
from datasets import load_dataset
from sentence_transformers.cross_encoder import CrossEncoder
from sentence_transformers.cross_encoder.evaluation import CrossEncoderRerankingEvaluator
# Set the log level to INFO to get more information
logging.basicConfig(format="%(asctime)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S", level=logging.INFO)
def main():
model_name = "tomaarsen/reranker-ModernBERT-base-gooaq-bce"
eval_batch_size = 64
# 1. Load a model to evaluate
model = CrossEncoder(model_name)
# 2. Load the GooAQ dataset: https://huggingface.co/datasets/tomaarsen/gooaq-reranker-blogpost-datasets
logging.info("Read the gooaq reranking dataset")
hard_eval_dataset = load_dataset("tomaarsen/gooaq-reranker-blogpost-datasets", "rerank", split="eval")
# 4. Create reranking evaluators. We use `always_rerank_positives=False` for a realistic evaluation
# where only all top 30 documents are reranked, and `always_rerank_positives=True` for an evaluation
# where the positive answer is always reranked as well.
samples = [
{
"query": sample["question"],
"positive": [sample["answer"]],
"documents": [sample[column_name] for column_name in hard_eval_dataset.column_names[2:]],
}
for sample in hard_eval_dataset
]
reranking_evaluator = CrossEncoderRerankingEvaluator(
samples=samples,
batch_size=eval_batch_size,
name="gooaq-dev-realistic",
always_rerank_positives=False,
)
realistic_results = reranking_evaluator(model)
pprint(realistic_results)
reranking_evaluator = CrossEncoderRerankingEvaluator(
samples=samples,
batch_size=eval_batch_size,
name="gooaq-dev-evaluation",
always_rerank_positives=True,
)
evaluation_results = reranking_evaluator(model)
pprint(evaluation_results)
if __name__ == "__main__":
main()
Which uses the rerank
subset from my tomaarsen/gooaq-reranker-blogpost-datasets
dataset. This dataset contains:
pair
subset,train
split: 99k training samples taken directly from GooAQ. This is not directly used for training, but for preparing thehard-labeled-pair
subset, which is used in training.pair
subset,eval
split: 1k training samples taken directly from GooAQ, no overlap with the previous 99k. This is not directly used for evaluation, but used to prepare thererank
subset, which is used in evaluation.hard-labeled-pair
subset,train
split: 578k labeled pairs used for training, by mining with sentence-transformers/static-retrieval-mrl-en-v1 using the 99k samples from thepair
subset &train
split. This dataset is used in training.rerank
subset,eval
split: 1k samples with question, answer, and exactly 30 documents as retrieved by sentence-transformers/static-retrieval-mrl-en-v1 using the full 100k train and evaluation answers from my subset of GooAQ. This ranking already has an NDCG@10 of 59.12.
With just 99k out of 3 million training pairs from the gooaq dataset and just 30 minutes of training on my RTX 3090, my small 150M tomaarsen/reranker-ModernBERT-base-gooaq-bce was able to handily outperform every single <1B parameter general-purpose reranker. The larger tomaarsen/reranker-ModernBERT-large-gooaq-bce took less than an hour to train, and is in a league of its own with a massive 79.42 NDCG@10 in the realistic setting. The GooAQ training and evaluation dataset aligns very well with what these baselines were trained for, so the difference should be even larger when training for a more niche domain.
Note that this does not mean that tomaarsen/reranker-ModernBERT-large-gooaq-bce is the strongest model here on all domains: It's simply the strongest in our domain. This is totally fine, as we just need this reranker to work well on our data.
Don't underestimate the power of finetuning reranker models on your domain. You can improve both the search performance and the latency of your search stack by finetuning a (small) reranker!
Additional Resources
Training Examples
These pages have training examples with explanations as well as links to training scripts code. You can use them to get familiar with the reranker training loop:
- Semantic Textual Similarity
- Natural Language Inference
- Quora Duplicate Questions
- MS MARCO
- Rerankers
- Model Distillation
Documentation
For further learning, you may also want to explore the following resources on Sentence Transformers:
- Installation
- Quickstart
- Migration guide
- Usage
- Pretrained Models
- Training Overview (This blogpost is a distillation of the Training Overiew documentation)
- Loss Overview
- API Reference
And here is an advanced page that might interest you: