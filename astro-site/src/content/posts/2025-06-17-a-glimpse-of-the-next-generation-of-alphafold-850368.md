---
title: A glimpse of the next generation of AlphaFold
description: 'Progress update: Our latest AlphaFold model shows significantly improved
  accuracy and expands coverage beyond proteins to other biological molecules, including
  ligands.'
pubDate: Tue, 31 Oct 2023 13:00:00 +0000
source: DeepMind Blog
tags:
- deepmind
- alpha
- ai
url: https://deepmind.google/discover/blog/a-glimpse-of-the-next-generation-of-alphafold/
---

Science
A glimpse of the next generation of AlphaFold
Progress update: Our latest AlphaFold model shows significantly improved accuracy and expands coverage beyond proteins to other biological molecules, including ligands
Since its release in 2020, AlphaFold has revolutionized how proteins and their interactions are understood. Google DeepMind and Isomorphic Labs have been working together to build the foundations of a more powerful AI model that expands coverage beyond just proteins to the full range of biologically-relevant molecules.
Today we’re sharing an update on progress towards the next generation of AlphaFold. Our latest model can now generate predictions for nearly all molecules in the Protein Data Bank (PDB), frequently reaching atomic accuracy.
It unlocks new understanding and significantly improves accuracy in multiple key biomolecule classes, including ligands (small molecules), proteins, nucleic acids (DNA and RNA), and those containing post-translational modifications (PTMs). These different structure types and complexes are essential for understanding the biological mechanisms within the cell, and have been challenging to predict with high accuracy.
The model’s expanded capabilities and performance can help accelerate biomedical breakthroughs and realize the next era of 'digital biology’ — giving new insights into the functioning of disease pathways, genomics, biorenewable materials, plant immunity, potential therapeutic targets, mechanisms for drug design, and new platforms for enabling protein engineering and synthetic biology.
Above and beyond protein folding
AlphaFold was a fundamental breakthrough for single chain protein prediction. AlphaFold-Multimer then expanded to complexes with multiple protein chains, followed by AlphaFold2.3, which improved performance and expanded coverage to larger complexes.
In 2022, AlphaFold’s structure predictions for nearly all cataloged proteins known to science were made freely available via the AlphaFold Protein Structure Database, in partnership with EMBL's European Bioinformatics Institute (EMBL-EBI).
To date, 1.4 million users in over 190 countries have accessed the AlphaFold database, and scientists around the world have used AlphaFold’s predictions to help advance research on everything from accelerating new malaria vaccines and advancing cancer drug discovery to developing plastic-eating enzymes for tackling pollution.
Here we show AlphaFold’s remarkable abilities to predict accurate structures beyond protein folding, generating highly-accurate structure predictions across ligands, proteins, nucleic acids, and post-translational modifications.
Accelerating drug discovery
Early analysis also shows that our model greatly outperforms AlphaFold2.3 on some protein structure prediction problems that are relevant for drug discovery, like antibody binding. Additionally, accurately predicting protein-ligand structures is an incredibly valuable tool for drug discovery, as it can help scientists identify and design new molecules, which could become drugs.
Current industry standard is to use ‘docking methods’ to determine interactions between ligands and proteins. These docking methods require a rigid reference protein structure and a suggested position for the ligand to bind to.
Our latest model sets a new bar for protein-ligand structure prediction by outperforming the best reported docking methods, without requiring a reference protein structure or the location of the ligand pocket — allowing predictions for completely novel proteins that have not been structurally characterized before.
It can also jointly model the positions of all atoms, allowing it to represent the full inherent flexibility of proteins and nucleic acids as they interact with other molecules — something not possible using docking methods.
Here, for instance, are three recently published, therapeutically-relevant cases where our latest model’s predicted structures (shown in color) closely match the experimentally determined structures (shown in gray):
- PORCN: A clinical stage anti-cancer molecule bound to its target, together with another protein.
- KRAS: Ternary complex with a covalent ligand (a molecular glue) of an important cancer target.
- PI5P4Kγ: Selective allosteric inhibitor of a lipid kinase, with multiple disease implications including cancer and immunological disorders.
Isomorphic Labs is applying this next generation AlphaFold model to therapeutic drug design, helping to rapidly and accurately characterize many types of macromolecular structures important for treating disease.
New understanding of biology
By unlocking the modeling of protein and ligand structures together with nucleic acids and those containing post-translational modifications, our model provides a more rapid and accurate tool for examining fundamental biology.
One example involves the structure of CasLambda bound to crRNA and DNA, part of the CRISPR family. CasLambda shares the genome editing ability of the CRISPR-Cas9 system, commonly known as ‘genetic scissors’, which researchers can use to change the DNA of animals, plants, and microorganisms. CasLambda’s smaller size may allow for more efficient use in genome editing.
The latest version of AlphaFold’s ability to model such complex systems shows us that AI can help us better understand these types of mechanisms, and accelerate their use for therapeutic applications. More examples are available in our progress update.
Advancing scientific exploration
Our model’s dramatic leap in performance shows the potential of AI to greatly enhance scientific understanding of the molecular machines that make up the human body — and the wider world of nature.
AlphaFold has already catalyzed major scientific advances around the world. Now, the next generation of AlphaFold has the potential to help advance scientific exploration at digital speed.
Our dedicated teams across Google DeepMind and Isomorphic Labs have made great strides forward on this critical work and we look forward to sharing our continued progress.