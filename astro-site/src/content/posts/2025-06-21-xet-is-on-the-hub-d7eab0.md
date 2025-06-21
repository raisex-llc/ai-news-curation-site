---
title: Xet is on the Hub
description: ''
summary: ''
pubDate: Tue, 18 Mar 2025 00:00:00 GMT
source: Hugging Face Blog
tags:
- huggingface
- transformers
- nlp
url: https://huggingface.co/blog/xet-on-the-hub
---

Xet is on the Hub
Click here to read about joining the Xet waitlist (or head over to join immediately).
Over the past few weeks, Hugging Face’s Xet Team took a major step forward by migrating the first Model and Dataset repositories off LFS and to Xet storage.
This marks one of many steps to fulfill Hugging Face’s vision for the Hub by empowering AI builders to build, iterate, and collaborate more effectively on massive models and datasets. If you're interested in deeper dives on the technology itself, check out the following posts:
- From Files to Chunks: Improving Hugging Face Storage Efficiency
- Rearchitecting Hugging Face Uploads and Downloads
- From Chunks to Blocks: Accelerating Uploads and Downloads on the Hub
But this post isn't about the core technology. It's a behind-the-scenes view of getting Xet on the Hub; taking you through our proof-of-concept to the first migration of repositories.
The migration shifted ~6% of the Hub’s download traffic onto Xet infrastructure, validating several integral components and testing integrations with the myriad of ways repositories are accessed (e.g., via local development environments, different libraries, CI systems, cloud platforms, etc.). With nearly two million developers working on over two million public repositories, it’s real-world usage that’s the ultimate proving ground. Engineering a complex system like Xet storage is a balancing act. You plan for scale, performance, and reliability, but once bytes start moving, challenges emerge. The trick is knowing when to move from design and theory to practice.
The Xet Difference
LFS, the storage system behind repositories today, stores large files in a separate object storage outside of the repository. LFS deduplicates at the file level. Even tiny edits create a new revision to upload in full; painful for the multi-gigabyte files found in many Hub repositories.
In contrast, Xet storage uses content-defined chunking (CDC), to deduplicate at the level of bytes (~64KB chunks of data). If you edit one row in a Parquet file or tweak a small piece of metadata in a GGUF model, only those changed chunks are sent over the wire.
This provides significant benefits to large file transfers. For example, the Xet team keeps an internal ~5 GB SQLite database that powers a metrics dashboard. With LFS, appending 1 MB (around the average update currently) requires re-uploading the entire 5 GB file. With Xet storage, we push only the new data.
This means uploads for the dashboard take a tenth of a second (at 50Mb/s) instead of the 13 minutes if the database were backed by LFS.
Making this work requires coordination between the following components:
- A Xet-aware client
- Splits data into ~64 KB chunks.
- Deduplicates identical chunks locally and aggregates them into ~64 MB blocks before upload.
- Hugging Face Hub
- Receives client requests and routes them to the correct repository.
- Provides authentication and security guarantees
- The content addressed store (CAS)
- Enforces chunk-based deduplication for uploads and downloads.
- Includes an LFS Bridge for older, non-Xet clients, acting like a traditional LFS server and providing a single URL for downloads.
- Amazon S3
Before moving to production, the system was launched into an ephemeral environment, where we built a steel thread of functionality to enable uploading and downloading via the huggingface_hub
. The video below shows our progress one month in:
After the heady highs of a quick proof-of-concept, the team settled into battling gnarly integration points (privacy, backward compatibility, fragmentation, etc) with the complex ecosystem that is the Hub. Eventually, the infrastructure moved into production for Hugging Face team members. With real usage now rolling in, we moved forward with the first large-scale migration.
Migration Day
On February 20th at 10 a.m., it was all hands on deck. In the weeks prior the team had built the internal tooling to migrate files from LFS to Xet and, just as importantly, roll back a repository to LFS if necessary. Now it was time to put it to the test. Grafana and Kibana lit up with new logs and metrics, showing the load shift in real time.
The picture is the same in Kibana, only here you can tell when we took a lunch break:
By the end of the day, we had successfully migrated all target repositories for a total of 4.5 TB into Xet storage. Downloads from each repository were now served by our infrastructure.
Post-Migration Challenges
No launch is without its lessons. The system handled the load smoothly and migrations went off without any major disruptions, but as the bytes flowed through various components we began to see some trends.
Download Overhead from Block Format
Reviewing network throughput post-migration, we saw that CAS was downloading four times more data than it was returning to clients:
Upon further investigation we found the vast majority of requests to CAS were for 10MB ranges of data within files. These requests come from users that are using hf_transfer
to accelerate their downloads of large files. The requested ranges do not align on block boundaries and the block format doesn’t provide uncompressed chunk lengths to facilitate skipping directly to the data within the block. Instead, CAS streams the block starting at the beginning and reads until it finds the requested data.
Given a block with an average size of 60MB and multiple partial requests to ranges within that block, the overhead accumulates. CAS reads 210MB for just 60MB delivered, a ratio of 3.5 bytes downloaded : 1 byte sent to the client. At scale across blocks of irregular sizes and ranges that can span several blocks, the 4 bytes downloaded : 1 byte sent ratio is matched.
As usual, an image is worth a thousand words:
To fix this, we updated the block format to store chunk-length metadata, enabling CAS to download only what each request actually needs. This format change required coordinated updates across:
- CAS APIs
- Block metadata format
2^16 + 1
blocks on S3 (this is a coincidence I swear)
All of which were undertaken without downtime. Not only did this result in a balanced ratio in CAS downloads to returned data, but also reduced GET latency by ~35% across the board.
Pod Load Imbalance
At the same time, we also saw an unexpected load imbalance across our CAS cluster. One pod would spike to hundreds of active uploads while other pods chugged along at single digits. Swapping the load balancer’s routing algorithm (from round-robin to least outstanding requests) and adding more nodes made little difference in the moment.
Digging deeper we realized that during uploads, CAS writes to a temporary file for validation before uploading without calling fsync
, allowing the OS to buffer writes in the page cache. When a spike of uploads comes in, the unflushed page cache leads to increased memory pressure.
As the OS tries to flush the page cache to disk, the pod experiences throughput throttling from block storage, causing increased latency on uploads. While uploads slowly process, new requests continue to come in, pushing more to the disk. This creates a vicious cycle, leading to a backlog of uploads and the imbalance that we saw during the migration:
To keep a pod from getting in this state, we put a limit to the number of concurrent uploads each machine accepts before rejecting requests that, when reached, pushes requests on to other pods in the cluster. If all pods in the cluster get in this state, then our autoscaling policies kick in. Longer-term solutions might include forcing disk syncs, removing the on-disk buffering, or switching to ephemeral storage with better throughput.
Migration Takeaways
These two issues led to important architectural improvements, but they weren’t the only challenges the team tackled in the weeks following the migration. We also addressed other performance issues, a memory leak (which we fixed but still can't definitively root cause), and on advice from AWS to migrate the LFS Bridge from an Application Load Balancer (ALB) to a Network Load Balancer (NLB) to improve scalability during bursts of traffic.
Lessons learned
- There is nothing like PROD: No test environment can simulate user behavior at scale. Even after careful integration work and Hugging Face team members testing the infrastructure for months, corner cases only surfaced once we funneled real usage through the system.
- Migrations simulate real traffic: By staging migrations incrementally and uncovering these issues before more traffic was on the infrastructure, we avoided downtime and disruption. Managing a fraction of traffic and storage made it relatively easy in comparison to if all the Hub was on Xet from day one.
- Compound the learning: The infrastructure and system design was hardened iteratively over weeks. Every future byte and network request on Xet will receive the benefits of these lessons.
In short, real-world load was essential for exposing these challenges, and incremental migrations let us tackle them safely. That’s how we’re ensuring Xet-backed repositories scale reliably for the entire Hugging Face community with faster uploads, fewer bottlenecks, and minimal disruption all the way.
Ready. Xet. Go.
With the initial migration complete, Xet is now on the Hugging Face Hub.
We’re finalizing an official integration with the huggingface_hub
that will mean you get the benefits of Xet without any significant changes to your current workflow. To get going:
- Join the Waitlist
- Sign up here with your user or organization account (if you have admin/write permissions).
- Once accepted, your new repositories will automatically leverage Xet-backed storage.
- We’ll also migrate existing repositories, so you don’t miss out on faster transfers.
- Use Your Usual Tools
- An
hf_xet
Python package is coming soon tohuggingface_hub
. If you use thetransformers
ordatasets
libraries, it's already usinghuggingface_hub
so you can simply installhf_xet
in the same environment. Installation steps and docs are on their way. - Continue downloading and uploading large files with the same commands you already use.
- An
- Enjoy the Benefits
- Less waiting on uploads and downloads and faster iterations on big files.
- Everyone on your team should upgrade to
hf_xet
to get the full benefits, but legacy clients will stay compatible via the LFS Bridge.
If you have any questions, drop us a line in the comments 👇 or open a discussion on the Xet team page. And stay tuned as we roll out more pieces (faster web uploads, faster Git workflows), bringing faster big-file collaboration to every AI builder on Hugging Face!