---
title: UK government harnesses Gemini to support faster planning decisions
description: A summary of how Extract works
pubDate: Mon, 09 Jun 2025 11:00:00 +0000
source: Google AI Blog
tags:
- google
- gemini
- research
url: https://blog.google/around-the-globe/google-europe/united-kingdom/uk-government-harnesses-gemini-to-support-faster-planning-decisions/
---

UK government harnesses Gemini to support faster planning decisions
Imagine radically speeding up the time it takes to process housing and infrastructure planning applications in England, empowering councils to make faster, more informed decisions and driving growth across the economy, all thanks to artificial intelligence (AI). That vision is becoming a reality thanks to a unique new system called Extract. As UK Prime Minister Keir Starmer outlined in his speech at London Tech Week, Extract was built by the UK Government’s AI Incubator team (i.AI), who chose Google’s Gemini model for its ability to understand text, reason about images, use tools and more.
The challenge of traditional planning
Traditional planning applications often require complex, paper-based documents. Comparing applications with local planning restrictions and approvals is a time-consuming task. Extract helps councils to quickly convert their mountains of planning documents into digital structured data, drastically reducing the barriers to adopting modern digital planning systems, and the need to manually check around 350,000 planning applications in England every year.
Once councils start using Extract, they will be able to provide more efficient planning services with simpler processes and democratised information, reducing council workload and speeding up planning processes for the public. However, converting a single planning document currently takes up to 2 hours for a planning professional – and there are hundreds of thousands of documents sitting in filing cabinets across the country. Extract can remove this bottleneck by accelerating the conversion with AI.
As the UK Government highlights, "The new generative AI tool will turn old planning documents—including blurry maps and handwritten notes—into clear, digital data in just 40 seconds – drastically reducing the time it takes planners."
Using modern data and software, councils will be able to make informed decisions faster, which could lead to quicker application processing times for things like home improvements, and more time freed up for council staff to focus on strategic planning. Extract is being tested with planning officials at four Councils around the country including Hillingdon Council, Westminster City Council, Nuneaton and Bedworth Council and Exeter City Council and will be made available to all councils by Spring 2026.
Gemini: enabling innovation within UK Government
A novel approach, built with Gemini via Google Cloud’s Vertex AI platform, Extract transforms complicated planning documents into easy-to-use digital maps and information, in a way that was never before possible. i.AI found Gemini to be uniquely suited for the complexity of this task due to its state of the art multimodal reasoning capabilities and ability to tackle challenging analytical problems.
How it works:
Extract uses Gemini to ‘read’ complicated planning documents and pull out the critical information that is stored in text, handwritten annotations and poor quality images of maps. This is only possible now because of Gemini's multimodal reasoning and tool-use capabilities.
- Polygon Extraction: Gemini’s visual reasoning capabilities recognise the relevant features on a map based on the document’s context (e.g. a red boundary around a row of terraced houses, a black shaded region covering a park, or 32-66 of a street address but even numbers only). Extract is then given access to tools such as OpenCV, Ordnance Survey and Segment Anything, which can extract the complex shapes from images that define where the planning constraints apply.
- Georeferencing: Gemini identifies addresses, road intersections and landmarks visible in the map to generate a modern, geolocated version of the map with Ordnance Survey. Extract then uses feature mapping models, such as LoFTR, to find a transformation that converts the historical map to the modern equivalent by matching common features within the two images. Extract uses this mapping to convert the extracted polygon shape from pixels to precise geographical coordinates.
Looking ahead
Google will look to support the national scaling of Extract through reliable and secure hosting on Google Cloud, along with AI and engineering advice to enhance its capabilities.
This project marks a significant step in using AI to solve complex challenges in the public sector. The success of Extract, and the UK Government's demonstrated capability in leveraging advanced AI like Gemini for sophisticated analytical tasks, opens the door for exploring similar projects in other areas. We've already seen how generative AI could help boost public services, potentially increasing GP appointments by 3.7 million, improving teacher-student ratios by 16%, and freeing up police resources by the equivalent of over 160,000 officers. The potential for transformative change across health and education, among other sectors, is significant.
Stay tuned for more updates on how Google's AI is making a difference in the world and how the UK is leading the way in public sector innovation.
For more information on how Extract works, please visit here.