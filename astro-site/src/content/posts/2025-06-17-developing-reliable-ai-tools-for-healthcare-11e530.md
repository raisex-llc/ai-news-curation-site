---
title: Developing reliable AI tools for healthcare
description: We’ve published our joint paper with Google Research in Nature Medicine,
  which proposes CoDoC (Complementarity-driven Deferral-to-Clinical Workflow), an
  AI system that learns when to rely on predictive AI tools or defer to a clinician
  for the most accurate interpretation of medical images.
pubDate: Mon, 17 Jul 2023 00:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/codoc-developing-reliable-ai-tools-for-healthcare/
---

Research
Developing reliable AI tools for healthcare
New research proposes a system to determine the relative accuracy of predictive AI in a hypothetical medical setting, and when the system should defer to a human clinician
Artificial intelligence (AI) has great potential to enhance how people work across a range of industries. But to integrate AI tools into the workplace in a safe and responsible way, we need to develop more robust methods for understanding when they can be most useful.
So when is AI more accurate, and when is a human? This question is particularly important in healthcare, where predictive AI is increasingly used in high-stakes tasks to assist clinicians.
Today in Nature Medicine, we’ve published our joint paper with Google Research, which proposes CoDoC (Complementarity-driven Deferral-to-Clinical Workflow), an AI system that learns when to rely on predictive AI tools or defer to a clinician for the most accurate interpretation of medical images.
CoDoC explores how we could harness human-AI collaboration in hypothetical medical settings to deliver the best results. In one example scenario, CoDoC reduced the number of false positives by 25% for a large, de-identified UK mammography dataset, compared with commonly used clinical workflows – without missing any true positives.
This work is a collaboration with several healthcare organisations, including the United Nations Office for Project Services’ Stop TB Partnership. To help researchers build on our work to improve the transparency and safety of AI models for the real world, we’ve also open-sourced CoDoC’s code on GitHub.
CoDoC: Add-on tool for human-AI collaboration
Building more reliable AI models often requires re-engineering the complex inner workings of predictive AI models. However, for many healthcare providers, it’s simply not possible to redesign a predictive AI model. CoDoC can potentially help improve predictive AI tools for its users without requiring them to modify the underlying AI tool itself.
When developing CoDoC, we had three criteria:
- Non-machine learning experts, like healthcare providers, should be able to deploy the system and run it on a single computer.
- Training would require a relatively small amount of data – typically, just a few hundred examples.
- The system could be compatible with any proprietary AI models and would not need access to the model’s inner workings or data it was trained on.
Determining when predictive AI or a clinician is more accurate
With CoDoC, we propose a simple and usable AI system to improve reliability by helping predictive AI systems to ‘know when they don’t know’. We looked at scenarios, where a clinician might have access to an AI tool designed to help interpret an image, for example, examining a chest x-ray for whether a tuberculosis test is needed.
For any theoretical clinical setting, CoDoC’s system requires only three inputs for each case in the training dataset.
- The predictive AI outputs a confidence score between 0 (certain no disease is present) and 1 (certain that disease is present).
- The clinician’s interpretation of the medical image.
- The ground truth of whether disease was present, as, for example, established via biopsy or other clinical follow-up.
Note: CoDoC requires no access to any medical images.
CoDoC learns to establish the relative accuracy of the predictive AI model compared with clinicians’ interpretation, and how that relationship fluctuates with the predictive AI’s confidence scores.
Once trained, CoDoC could be inserted into a hypothetical future clinical workflow involving both an AI and a clinician. When a new patient image is evaluated by the predictive AI model, its associated confidence score is fed into the system. Then, CoDoC assesses whether accepting the AI’s decision or deferring to a clinician will ultimately result in the most accurate interpretation.
Increased accuracy and efficiency
Our comprehensive testing of CoDoC with multiple real-world datasets – including only historic and de-identified data – has shown that combining the best of human expertise and predictive AI results in greater accuracy than with either alone.
As well as achieving a 25% reduction in false positives for a mammography dataset, in hypothetical simulations where an AI was allowed to act autonomously on certain occasions, CoDoC was able to reduce the number of cases that needed to be read by a clinician by two thirds. We also showed how CoDoC could hypothetically improve the triage of chest X-rays for onward testing for tuberculosis.
Responsibly developing AI for healthcare
While this work is theoretical, it shows our AI system’s potential to adapt: CoDoC was able to improve performance on interpreting medical imaging across varied demographic populations, clinical settings, medical imaging equipment used, and disease types.
CoDoC is a promising example of how we can harness the benefits of AI in combination with human strengths and expertise. We are working with external partners to rigorously evaluate our research and the system’s potential benefits. To bring technology like CoDoC safely to real-world medical settings, healthcare providers and manufacturers will also have to understand how clinicians interact differently with AI, and validate systems with specific medical AI tools and settings.
Learn more about CoDoC:
Acknowledgements
We would like to acknowledge multiple contributors to this international project including the Stop TB Partnership hosted by UNOPS; the OPTIMAM project team and staff at the Royal Surrey Foundation Trust who developed the UK Mammography OPTIMAM imaging database, whose creation was funded by Cancer Research UK; and our collaborators at Northwestern Medicine and the NYU Grossman School of Medicine.
Notes on data
This research was purely theoretical, based on de-identified, historic, clinical data. Google DeepMind and Google Research did not have access to our partners’ de-identified medical images; only the predictions of a pre-trained AI model, and a clinician's opinion for each medical image examined. Research was not conducted in real-world clinical settings.