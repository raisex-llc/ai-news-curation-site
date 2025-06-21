---
title: Pushing the frontiers of audio generation
description: Our pioneering speech generation technologies are helping people around
  the world interact with more natural, conversational and intuitive digital assistants
  and AI tools.
summary: Our pioneering speech generation technologies are helping people around the
  world interact with more natural, conversati
pubDate: Wed, 30 Oct 2024 15:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/pushing-the-frontiers-of-audio-generation/
thumbnail: https://lh3.googleusercontent.com/wyFc1lo4ByOJsbbSt1NEwBiSi3KpImyqA9ukx-mLxJROIakSxhPwk-kPtlIfFKX9Txm2J_lbpIvnrDhFnegrpN8ihlvYpBTsFNAmOlq0C2rm_gef=w528-h297-n-nu-rw
---

Research
Pushing the frontiers of audio generation
Our pioneering speech generation technologies are helping people around the world interact with more natural, conversational and intuitive digital assistants and AI tools.
Speech is central to human connection. It helps people around the world exchange information and ideas, express emotions and create mutual understanding. As our technology built for generating natural, dynamic voices continues to improve, we’re unlocking richer, more engaging digital experiences.
Over the past few years, we’ve been pushing the frontiers of audio generation, developing models that can create high quality, natural speech from a range of inputs, like text, tempo controls and particular voices. This technology powers single-speaker audio in many Google products and experiments — including Gemini Live, Project Astra, Journey Voices and YouTube’s auto dubbing — and is helping people around the world interact with more natural, conversational and intuitive digital assistants and AI tools.
Working together with partners across Google, we recently helped develop two new features that can generate long-form, multi-speaker dialogue for making complex content more accessible:
- NotebookLM Audio Overviews turns uploaded documents into engaging and lively dialogue. With one click, two AI hosts summarize user material, make connections between topics and banter back and forth.
- Illuminate creates formal AI-generated discussions about research papers to help make knowledge more accessible and digestible.
Here, we provide an overview of our latest speech generation research underpinning all of these products and experimental tools.
Pioneering techniques for audio generation
For years, we've been investing in audio generation research and exploring new ways for generating more natural dialogue in our products and experimental tools. In our previous research on SoundStorm, we first demonstrated the ability to generate 30-second segments of natural dialogue between multiple speakers.
This extended our earlier work, SoundStream and AudioLM, which allowed us to apply many text-based language modeling techniques to the problem of audio generation.
SoundStream is a neural audio codec that efficiently compresses and decompresses an audio input, without compromising its quality. As part of the training process, SoundStream learns how to map audio to a range of acoustic tokens. These tokens capture all of the information needed to reconstruct the audio with high fidelity, including properties such as prosody and timbre.
AudioLM treats audio generation as a language modeling task to produce the acoustic tokens of codecs like SoundStream. As a result, the AudioLM framework makes no assumptions about the type or makeup of the audio being generated, and can flexibly handle a variety of sounds without needing architectural adjustments — making it a good candidate for modeling multi-speaker dialogues.
Building upon this research, our latest speech generation technology can produce 2 minutes of dialogue, with improved naturalness, speaker consistency and acoustic quality, when given a script of dialogue and speaker turn markers. The model also performs this task in under 3 seconds on a single Tensor Processing Unit (TPU) v5e chip, in one inference pass. This means it generates audio over 40-times faster than real time.
Scaling our audio generation models
Scaling our single-speaker generation models to multi-speaker models then became a matter of data and model capacity. To help our latest speech generation model produce longer speech segments, we created an even more efficient speech codec for compressing audio into a sequence of tokens, in as low as 600 bits per second, without compromising the quality of its output.
The tokens produced by our codec have a hierarchical structure and are grouped by time frames. The first tokens within a group capture phonetic and prosodic information, while the last tokens encode fine acoustic details.
Even with our new speech codec, producing a 2-minute dialogue requires generating over 5000 tokens. To model these long sequences, we developed a specialized Transformer architecture that can efficiently handle hierarchies of information, matching the structure of our acoustic tokens.
With this technique, we can efficiently generate acoustic tokens that correspond to the dialogue, within a single autoregressive inference pass. Once generated, these tokens can be decoded back into an audio waveform using our speech codec.
To teach our model how to generate realistic exchanges between multiple speakers, we pretrained it on hundreds of thousands of hours of speech data. Then we finetuned it on a much smaller dataset of dialogue with high acoustic quality and precise speaker annotations, consisting of unscripted conversations from a number of voice actors and realistic disfluencies — the “umm”s and “aah”s of real conversation. This step taught the model how to reliably switch between speakers during a generated dialogue and to output only studio quality audio with realistic pauses, tone and timing.
In line with our AI Principles and our commitment to developing and deploying AI technologies responsibly, we’re incorporating our SynthID technology to watermark non-transient AI-generated audio content from these models, to help safeguard against the potential misuse of this technology.
New speech experiences ahead
We’re now focused on improving our model’s fluency, acoustic quality and adding more fine-grained controls for features, like prosody, while exploring how best to combine these advances with other modalities, such as video.
The potential applications for advanced speech generation are vast, especially when combined with our Gemini family of models. From enhancing learning experiences to making content more universally accessible, we’re excited to continue pushing the boundaries of what’s possible with voice-based technologies.
Acknowledgements
Authors of this work: Zalán Borsos, Matt Sharifi, Brian McWilliams, Yunpeng Li, Damien Vincent, Félix de Chaumont Quitry, Martin Sundermeyer, Eugene Kharitonov, Alex Tudor, Victor Ungureanu, Karolis Misiunas, Sertan Girgin, Jonas Rothfuss, Jake Walker and Marco Tagliasacchi.
We thank Leland Rechis, Ralph Leith, Paul Middleton, Poly Pata, Minh Truong and RJ Skerry-Ryan for their critical efforts on dialogue data.
We’re very grateful to our collaborators across Labs, Illuminate, Cloud, Speech and YouTube for their outstanding work bringing these models into products.
We also thank Françoise Beaufays, Krishna Bharat, Tom Hume, Simon Tokumine, James Zhao for their guidance on the project.