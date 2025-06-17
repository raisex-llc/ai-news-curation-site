---
title: 'Model Cards: Introducing HF Model documentation tools'
description: ''
pubDate: Tue, 20 Dec 2022 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/model-cards
---

Model Cards
Introduction
Model cards are an important documentation framework for understanding, sharing, and improving machine learning models. When done well, a model card can serve as a boundary object, a single artefact that is accessible to people with different backgrounds and goals in understanding models - including developers, students, policymakers, ethicists, and those impacted by machine learning models.
Today, we launch a model card creation tool and a model card Guide Book, which details how to fill out model cards, user studies, and state of the art in ML documentation. This work, building from many other people and organizations, focuses on the inclusion of people with different backgrounds and roles. We hope it serves as a stepping stone in the path toward improved ML documentation.
In sum, today we announce the release of:
A Model Card Creator Tool, to ease card creation without needing to program, and to help teams share the work of different sections.
An updated model card template, released in the
huggingface_hub
library, drawing together model card work in academia and throughout the industry.An Annotated Model Card Template, which details how to fill the card out.
A User Study on model card usage at Hugging Face.
A Landscape Analysis and Literature Review of the state of the art in model documentation.
Model Cards To-Date
Since Model Cards were proposed by Mitchell et al. (2018), inspired by the major documentation framework efforts of Data Statements for Natural Language Processing (Bender & Friedman, 2018) and Datasheets for Datasets (Gebru et al., 2018), the landscape of machine learning documentation has expanded and evolved. A plethora of documentation tools and templates for data, models, and ML systems have been proposed and developed - reflecting the incredible work of hundreds of researchers, impacted community members, advocates, and other stakeholders. Important discussions about the relationship between ML documentation and theories of change in responsible AI have also shaped these developments in the ML documentation ecosystem.
Work to-date on documentation within ML has provided for different audiences. We bring many of these ideas together in the work we share today.
Our Work
Our work presents a view of where model cards stand right now and where they could go in the future. We conducted a broad analysis of the growing landscape of ML documentation tools and conducted user interviews within Hugging Face to supplement our understanding of the diverse opinions about model cards. We also created or updated dozens of model cards for ML models on the Hugging Face Hub, and informed by all of these experiences, we propose a new template for model cards.
Standardising Model Card Structure
Through our background research and user studies, which are discussed further in the Guide Book, we aimed to establish a new standard of "model cards" as understood by the general public.
Informed by these findings, we created a new model card template that not only standardized the structure and content of HF model cards but also provided default prompt text. This text aimed to aide with writing model card sections, with a particular focus on the Bias, Risks and Limitations section.
Accessibility and Inclusion
In order to lower barriers to entry for creating model cards, we designed the model card writing tool, a tool with a graphical user interface (GUI) to enable people and teams with different skill sets and roles to easily collaborate and create model cards, without needing to code or use markdown.
The writing tool encourages those who have yet to write model cards to create them more easily. For those who have previously written model cards, this approach invites them to add to the prompted information -- while centering the ethical components of model documentation.
As ML continues to be more intertwined with different domains, collaborative and open-source ML processes that center accessibility, ethics and inclusion are a critical part of the machine learning lifecycle and a stepping stone in ML documentation.
Today's release sits within a larger ecosystem of ML documentation work: Data and model documentation have been taken up by many tech companies, including Hugging Face 🤗. We've prioritized "Repository Cards" for both dataset cards and model cards, focusing on multidisciplinarity. Continuing in this line of work, the model card creation UI tool
focuses on inclusivity, providing guidance on formatting and prompting to aid card creation for people with different backgrounds.
Call to action
Let's look ahead
This work is a "snapshot" of the current state of model cards, informed by a landscape analysis of the many ways ML documentation artefacts have been instantiated. The model book and these findings represent one perspective amongst multiple about both the current state and more aspirational visions of model cards.
- The Hugging Face ecosystem will continue to advance methods that streamline Model Card creation through code and user interfaces, including building more features directly into the repos and product.
- As we further develop model tools such as Evaluate on the Hub, we will integrate their usage within the model card development workflow. For example, as automatically evaluating model performance across disaggregated factors becomes easier, these results will be possible to import into the model card.
- There is further study to be done to advance the pairing of research models and model cards, such as building out a research paper → to model documentation pipeline, making it make it trivial to go from paper to model card creation. This would allow for greater cross-domain reach and further standardisation of model documentation.
We continue to learn more about how model cards are created and used, and the effect of cards on model usage. Based on these learnings, we will further update the model card template, instructions, and Hub integrations.
As we strive to incorporate more voices and stakeholders' use cases for model cards, bookmark our model cards writing tool and give it a try!
We are excited to know your thoughts on model cards, our model card writing GUI, and how AI documentation can empower your domain.🤗
Acknowledgements
This release would not have been possible without the extensive contributions of Omar Sanseviero, Lucain Pouget, Julien Chaumond, Nazneen Rajani, and Nate Raw.