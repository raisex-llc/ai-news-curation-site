---
title: 'DolphinGemma: How Google AI is helping decode dolphin communication'
description: DolphinGemma, a large language model developed by Google, is helping
  scientists study how dolphins communicate — and hopefully find out what they're
  saying, too.
summary: DolphinGemma, a large language model developed by Google, is helping scientists
  study how dolphins communicate — and hop
pubDate: Mon, 14 Apr 2025 17:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/dolphingemma-how-google-ai-is-helping-decode-dolphin-communication/
thumbnail: https://lh3.googleusercontent.com/I4XIOUffm7QcLIdlD4MzdDyyhRfZSPyX6Ay0GSZ6f_LcmQ0FS3MoGg8mTsHsePHQkfG1Mg4P8C-nG17FDk0MJ2lQIhe1c_TkOwYKGOiWHMC9ouRzsQ=w528-h297-n-nu-rw
---

DolphinGemma: How Google AI is helping decode dolphin communication
For decades, understanding the clicks, whistles and burst pulses of dolphins has been a scientific frontier. What if we could not only listen to dolphins, but also understand the patterns of their complex communication well enough to generate realistic responses?
Today, on National Dolphin Day, Google, in collaboration with researchers at Georgia Tech and the field research of the Wild Dolphin Project (WDP), is announcing progress on DolphinGemma: a foundational AI model trained to learn the structure of dolphin vocalizations and generate novel dolphin-like sound sequences. This approach in the quest for interspecies communication pushes the boundaries of AI and our potential connection with the marine world.
Researching dolphin society for decades
Understanding any species requires deep context, and that's one of the many things the WDP provides. Since 1985, WDP has conducted the world's longest-running underwater dolphin research project, studying a specific community of wild Atlantic spotted dolphins (Stenella frontalis) in the Bahamas across generations. This non-invasive, "In Their World, on Their Terms" approach yields a rich, unique dataset: decades of underwater video and audio meticulously paired with individual dolphin identities, life histories and observed behaviors.
A pod of Atlantic spotted dolphins, Stenella frontalis
A primary focus for WDP is observing and analyzing the dolphins' natural communication and social interactions. Working underwater allows researchers to directly link sounds to specific behaviors in ways surface observation cannot. For decades, they have correlated sound types with behavioral contexts. Here are some examples:
- Signature whistles (unique names) that can be used by mothers and calves to reunite
- Burst-pulse "squawks" often seen during fights
- Click "buzzes" often used during courtship or chasing sharks
Knowing the individual dolphins involved is crucial for accurate interpretation. The ultimate goal of this observational work is to understand the structure and potential meaning within these natural sound sequences — seeking patterns and rules that might indicate language. This long-term analysis of natural communication forms the bedrock of WDP's research and provides essential context for any AI analysis.
Left: A mother spotted dolphin observes her calf while foraging. She will use her unique signature whistle to call the calf back after he is finished. Right: Spectrogram to visualize the whistle.
Introducing DolphinGemma
Analyzing dolphins' natural, complex communication is a monumental task, and WDP's vast, labeled dataset provides a unique opportunity for cutting-edge AI.
Enter DolphinGemma. Developed by Google, this AI model makes use of specific Google audio technologies: the SoundStream tokenizer efficiently represents dolphin sounds, which are then processed by a model architecture suited for complex sequences. This ~400M parameter model is optimally-sized to run directly on the Pixel phones WDP uses in the field.
Left: Whistles (left) and burst pulses (right) generated during early testing of DolphinGemma.
This model builds upon insights from Gemma, Google’s collection of lightweight, state-of-the-art open models that are built from the same research and technology that powers our Gemini models. Trained extensively on WDP’s acoustic database of wild Atlantic spotted dolphins, DolphinGemma functions as an audio-in, audio-out model, processes sequences of natural dolphin sounds to identify patterns, structure and ultimately predict the likely subsequent sounds in a sequence, much like how large language models for human language predict the next word or token in a sentence.
WDP is beginning to deploy DolphinGemma this field season with immediate potential benefits. By identifying recurring sound patterns, clusters and reliable sequences, the model can help researchers uncover hidden structures and potential meanings within the dolphins' natural communication — a task previously requiring immense human effort. Eventually, these patterns, augmented with synthetic sounds created by the researchers to refer to objects with which the dolphins like to play, may establish a shared vocabulary with the dolphins for interactive communication.
Using Pixel phones to listen to and analyze dolphin sounds
In addition to analyzing natural communication, WDP is also pursuing a distinct, parallel path: exploring potential two-way interaction using technology in the ocean. This effort led to the development of the CHAT (Cetacean Hearing Augmentation Telemetry) system, in partnership with the Georgia Institute of Technology. CHAT is an underwater computer designed not to directly decipher the dolphins' complex natural language, but to establish a simpler, shared vocabulary.
The concept first relies on associating novel, synthetic whistles (created by CHAT, distinct from natural dolphin sounds) with specific objects the dolphins enjoy, like sargassum, seagrass or scarves the researchers use. By demonstrating the system between humans, researchers hope the naturally curious dolphins will learn to mimic the whistles to request these items. Eventually, as more of the dolphins’ natural sounds are understood, they can also be added to the system.
To enable two-way interaction, the CHAT system first needs to:
- Hear the mimic accurately amid ocean noise.
- Identify which whistle was mimicked in real-time.
- Inform the researcher (via bone-conducting headphones that work underwater) which object the dolphin "requested."
- Enable the researcher to respond quickly by offering the correct object, reinforcing the connection.
A Google Pixel 6 handled the high-fidelity analysis of dolphin sounds in real time. The upcoming generation, centered around a Google Pixel 9 (research slated for summer 2025), builds on this effort by integrating speaker/microphone functions and using the phone's advanced processing to run both deep learning models and template matching algorithms simultaneously.
Left: Dr. Denise Herzing wearing “Chat Senior, 2012”, Right: Georgia Tech PhD Student Charles Ramey wearing “Chat Junior, 2025”
Using Pixel smartphones dramatically reduces the need for custom hardware, improves system maintainability, lowers power consumption and shrinks the device's cost and size — crucial advantages for field research in the open ocean. Meanwhile, DolphinGemma’s predictive power can help CHAT anticipate and identify potential mimics earlier in the vocalization sequence, increasing the speed at which researchers can react to the dolphins and making interactions more fluid and reinforcing.
A Google Pixel 9 inside the latest CHAT system hardware.
Sharing DolphinGemma with the research community
Recognizing the value of collaboration in scientific discovery, we’re planning to share DolphinGemma as an open model this summer. While trained on Atlantic spotted dolphin sounds, we anticipate its potential utility for researchers studying other cetacean species, like bottlenose or spinner dolphins. Fine-tuning may be required for different species' vocalizations, and the open nature of the model facilitates this adaptation.
By providing tools like DolphinGemma, we hope to give researchers worldwide the tools to mine their own acoustic datasets, accelerate the search for patterns and collectively deepen our understanding of these intelligent marine mammals.
The journey to understanding dolphin communication is long, but the combination of dedicated field research by WDP, engineering expertise from Georgia Tech and the power of Google's technology is opening exciting new possibilities. We're not just listening anymore. We're beginning to understand the patterns within the sounds, paving the way for a future where the gap between human and dolphin communication might just get a little smaller.
You can learn more about the Wild Dolphin Project on their website.