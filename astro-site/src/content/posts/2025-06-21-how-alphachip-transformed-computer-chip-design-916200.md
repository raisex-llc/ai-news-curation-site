---
title: "How AlphaChip transformed computer chip design"
description: "Our AI method has accelerated and optimized chip design, and its superhuman chip layouts are used in hardware around the world."
summary: "Our AI method has accelerated and optimized chip design, and its superhuman chip layouts are used in hardware around the"
pubDate: "Thu, 26 Sep 2024 14:08:00 +0000"
source: "DeepMind Blog"
url: "https://deepmind.google/discover/blog/how-alphachip-transformed-computer-chip-design/"
thumbnail: "https://lh3.googleusercontent.com/Y_xdq8eqcQlZXYk-MZ2OWPpppmWG6LAQ8DZ-LZFUh8TV5s2TBb3RK_VkMUe-skRzIop5aP6Ot9xPMWFaWmenz55EwxVFCMszpTg2EzsyOd6ftlllGyE=w528-h297-n-nu-rw"
---

Science
How AlphaChip transformed computer chip design
Our AI method has accelerated and optimized chip design, and its superhuman chip layouts are used in hardware around the world
In 2020, we released a preprint introducing our novel reinforcement learning method for designing chip layouts, which we later published in Nature and open sourced.
Today, we’re publishing a Nature addendum that describes more about our method and its impact on the field of chip design. We’re also releasing a pre-trained checkpoint, sharing the model weights and announcing its name: AlphaChip.
Computer chips have fueled remarkable progress in artificial intelligence (AI), and AlphaChip returns the favor by using AI to accelerate and optimize chip design. The method has been used to design superhuman chip layouts in the last three generations of Google’s custom AI accelerator, the Tensor Processing Unit (TPU).
AlphaChip was one of the first reinforcement learning approaches used to solve a real-world engineering problem. It generates superhuman or comparable chip layouts in hours, rather than taking weeks or months of human effort, and its layouts are used in chips all over the world, from data centers to mobile phones.
How AlphaChip works
Designing a chip layout is not a simple task. Computer chips consist of many interconnected blocks, with layers of circuit components, all connected by incredibly thin wires. There are also lots of complex and intertwined design constraints that all have to be met at the same time. Because of its sheer complexity, chip designers have struggled to automate the chip floorplanning process for over sixty years.
Similar to AlphaGo and AlphaZero, which learned to master the games of Go, chess and shogi, we built AlphaChip to approach chip floorplanning as a kind of game.
Starting from a blank grid, AlphaChip places one circuit component at a time until it’s done placing all the components. Then it’s rewarded based on the quality of the final layout. A novel “edge-based” graph neural network allows AlphaChip to learn the relationships between interconnected chip components and to generalize across chips, letting AlphaChip improve with each layout it designs.
Using AI to design Google’s AI accelerator chips
AlphaChip has generated superhuman chip layouts used in every generation of Google’s TPU since its publication in 2020. These chips make it possible to massively scale-up AI models based on Google’s Transformer architecture.
TPUs lie at the heart of our powerful generative AI systems, from large language models, like Gemini, to image and video generators, Imagen and Veo. These AI accelerators also lie at the heart of Google's AI services and are available to external users via Google Cloud.
To design TPU layouts, AlphaChip first practices on a diverse range of chip blocks from previous generations, such as on-chip and inter-chip network blocks, memory controllers, and data transport buffers. This process is called pre-training. Then we run AlphaChip on current TPU blocks to generate high-quality layouts. Unlike prior approaches, AlphaChip becomes better and faster as it solves more instances of the chip placement task, similar to how human experts do.
With each new generation of TPU, including our latest Trillium (6th generation), AlphaChip has designed better chip layouts and provided more of the overall floorplan, accelerating the design cycle and yielding higher-performance chips.
AlphaChip’s broader impact
AlphaChip’s impact can be seen through its applications across Alphabet, the research community and the chip design industry. Beyond designing specialized AI accelerators like TPUs, AlphaChip has generated layouts for other chips across Alphabet, such as Google Axion Processors, our first Arm-based general-purpose data center CPUs.
External organizations are also adopting and building on AlphaChip. For example, MediaTek, one of the top chip design companies in the world, extended AlphaChip to accelerate development of their most advanced chips while improving power, performance and chip area.
AlphaChip has triggered an explosion of work on AI for chip design, and has been extended to other critical stages of chip design, such as logic synthesis and macro selection.
Creating the chips of the future
We believe AlphaChip has the potential to optimize every stage of the chip design cycle, from computer architecture to manufacturing — and to transform chip design for custom hardware found in everyday devices such as smartphones, medical equipment, agricultural sensors and more.
Future versions of AlphaChip are now in development and we look forward to working with the community to continue revolutionizing this area and bring about a future in which chips are even faster, cheaper and more power-efficient.
Acknowledgements
We’re so grateful to our amazing coauthors: Mustafa Yazgan, Joe Wenjie Jiang, Ebrahim Songhori, Shen Wang, Young-Joon Lee, Eric Johnson, Omkar Pathak, Azade Nazi, Jiwoo Pak, Andy Tong, Kavya Srinivasa, William Hang, Emre Tuncer, Quoc V. Le, James Laudon, Richard Ho, Roger Carpenter and Jeff Dean.
We especially appreciate Joe Wenjie Jiang, Ebrahim Songhori, Young-Joon Lee, Roger Carpenter, and Sergio Guadarrama’s continued efforts to land this production impact, Quoc V. Le for his research advice and mentorship, and our senior author Jeff Dean for his support and deep technical discussions.
We also want to thank Ed Chi, Zoubin Ghahramani, Koray Kavukcuoglu, Dave Patterson, and Chris Manning for all of their advice and support.