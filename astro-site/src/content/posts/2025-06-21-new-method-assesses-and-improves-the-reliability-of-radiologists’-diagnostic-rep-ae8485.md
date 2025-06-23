---
title: "New method assesses and improves the reliability of radiologists’ diagnostic reports"
description: "The framework helps clinicians choose phrases that more accurately reflect the likelihood that certain conditions are present in X-rays."
summary: "The framework helps clinicians choose phrases that more accurately reflect the likelihood that certain conditions are pr"
pubDate: "Fri, 04 Apr 2025 00:00:00 -0400"
source: "MIT"
url: "https://news.mit.edu/2025/new-method-assesses-and-improves-reliability-radiologists-diagnostic-reports-0404"
thumbnail: ""
---

Audio
Due to the inherent ambiguity in medical images like X-rays, radiologists often use words like “may” or “likely” when describing the presence of a certain pathology, such as pneumonia.
But do the words radiologists use to express their confidence level accurately reflect how often a particular pathology occurs in patients? A new study shows that when radiologists express confidence about a certain pathology using a phrase like “very likely,” they tend to be overconfident, and vice-versa when they express less confidence using a word like “possibly.”
Using clinical data, a multidisciplinary team of MIT researchers in collaboration with researchers and clinicians at hospitals affiliated with Harvard Medical School created a framework to quantify how reliable radiologists are when they express certainty using natural language terms.
They used this approach to provide clear suggestions that help radiologists choose certainty phrases that would improve the reliability of their clinical reporting. They also showed that the same technique can effectively measure and improve the calibration of large language models by better aligning the words models use to express confidence with the accuracy of their predictions.
By helping radiologists more accurately describe the likelihood of certain pathologies in medical images, this new framework could improve the reliability of critical clinical information.
“The words radiologists use are important. They affect how doctors intervene, in terms of their decision making for the patient. If these practitioners can be more reliable in their reporting, patients will be the ultimate beneficiaries,” says Peiqi Wang, an MIT graduate student and lead author of a paper on this research.
He is joined on the paper by senior author Polina Golland, a Sunlin and Priscilla Chou Professor of Electrical Engineering and Computer Science (EECS), a principal investigator in the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL), and the leader of the Medical Vision Group; as well as Barbara D. Lam, a clinical fellow at the Beth Israel Deaconess Medical Center; Yingcheng Liu, at MIT graduate student; Ameneh Asgari-Targhi, a research fellow at Massachusetts General Brigham (MGB); Rameswar Panda, a research staff member at the MIT-IBM Watson AI Lab; William M. Wells, a professor of radiology at MGB and a research scientist in CSAIL; and Tina Kapur, an assistant professor of radiology at MGB. The research will be presented at the International Conference on Learning Representations.
Decoding uncertainty in words
A radiologist writing a report about a chest X-ray might say the image shows a “possible” pneumonia, which is an infection that inflames the air sacs in the lungs. In that case, a doctor could order a follow-up CT scan to confirm the diagnosis.
However, if the radiologist writes that the X-ray shows a “likely” pneumonia, the doctor might begin treatment immediately, such as by prescribing antibiotics, while still ordering additional tests to assess severity.
Trying to measure the calibration, or reliability, of ambiguous natural language terms like “possibly” and “likely” presents many challenges, Wang says.
Existing calibration methods typically rely on the confidence score provided by an AI model, which represents the model’s estimated likelihood that its prediction is correct.
For instance, a weather app might predict an 83 percent chance of rain tomorrow. That model is well-calibrated if, across all instances where it predicts an 83 percent chance of rain, it rains approximately 83 percent of the time.
“But humans use natural language, and if we map these phrases to a single number, it is not an accurate description of the real world. If a person says an event is ‘likely,’ they aren’t necessarily thinking of the exact probability, such as 75 percent,” Wang says.
Rather than trying to map certainty phrases to a single percentage, the researchers’ approach treats them as probability distributions. A distribution describes the range of possible values and their likelihoods — think of the classic bell curve in statistics.
“This captures more nuances of what each word means,” Wang adds.
Assessing and improving calibration
The researchers leveraged prior work that surveyed radiologists to obtain probability distributions that correspond to each diagnostic certainty phrase, ranging from “very likely” to “consistent with.”
For instance, since more radiologists believe the phrase “consistent with” means a pathology is present in a medical image, its probability distribution climbs sharply to a high peak, with most values clustered around the 90 to 100 percent range.
In contrast the phrase “may represent” conveys greater uncertainty, leading to a broader, bell-shaped distribution centered around 50 percent.
Typical methods evaluate calibration by comparing how well a model’s predicted probability scores align with the actual number of positive results.
The researchers’ approach follows the same general framework but extends it to account for the fact that certainty phrases represent probability distributions rather than probabilities.
To improve calibration, the researchers formulated and solved an optimization problem that adjusts how often certain phrases are used, to better align confidence with reality.
They derived a calibration map that suggests certainty terms a radiologist should use to make the reports more accurate for a specific pathology.
“Perhaps, for this dataset, if every time the radiologist said pneumonia was ‘present,’ they changed the phrase to ‘likely present’ instead, then they would become better calibrated,” Wang explains.
When the researchers used their framework to evaluate clinical reports, they found that radiologists were generally underconfident when diagnosing common conditions like atelectasis, but overconfident with more ambiguous conditions like infection.
In addition, the researchers evaluated the reliability of language models using their method, providing a more nuanced representation of confidence than classical methods that rely on confidence scores.
“A lot of times, these models use phrases like ‘certainly.’ But because they are so confident in their answers, it does not encourage people to verify the correctness of the statements themselves,” Wang adds.
In the future, the researchers plan to continue collaborating with clinicians in the hopes of improving diagnoses and treatment. They are working to expand their study to include data from abdominal CT scans.
In addition, they are interested in studying how receptive radiologists are to calibration-improving suggestions and whether they can mentally adjust their use of certainty phrases effectively.
“Expression of diagnostic certainty is a crucial aspect of the radiology report, as it influences significant management decisions. This study takes a novel approach to analyzing and calibrating how radiologists express diagnostic certainty in chest X-ray reports, offering feedback on term usage and associated outcomes,” says Atul B. Shinagare, associate professor of radiology at Harvard Medical School, who was not involved with this work. “This approach has the potential to improve radiologists’ accuracy and communication, which will help improve patient care.”
The work was funded, in part, by a Takeda Fellowship, the MIT-IBM Watson AI Lab, the MIT CSAIL Wistron Research Collaboration, and the MIT Jameel Clinic.