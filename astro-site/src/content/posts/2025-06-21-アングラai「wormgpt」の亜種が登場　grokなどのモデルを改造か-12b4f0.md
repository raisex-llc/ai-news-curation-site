---
title: "アングラAI「WormGPT」の亜種が登場　Grokなどのモデルを改造か"
description: "Cato Networksは、地下フォーラムで流通するWormGPT派生2モデルの存在を報告した。GrokとMixtralを悪用したkeanu-WormGPTとxzin0vich-WormGPTが検閲回避で犯罪支援に利用されている実態が明らかになっている。"
summary: "Cato Networksは、地下フォーラムで流通するWormGPT派生2モデルの存在を報告した。GrokとMixtralを悪用したkeanu-WormGPTとxzin0vich-WormGPTが検閲回避で犯罪支援に利用されている実態が明ら"
pubDate: "Fri, 20 Jun 2025 07:00:00 +0900"
source: "ITmedia AI"
url: "https://www.itmedia.co.jp/enterprise/articles/2506/20/news022.html"
thumbnail: ""
---

Cato Networksは、地下フォーラムで流通するWormGPT派生2モデルの存在を報告した。GrokとMixtralを悪用したkeanu-WormGPTとxzin0vich-WormGPTが検閲回避で犯罪支援に利用されている実態が明らかになっている。
この記事は会員限定です。会員登録すると全てご覧いただけます。
Cato Networksは2025年6月17日（現地時間）、大規模言語モデル（LLM）を悪用したサイバー脅威の調査結果を発表した。かつて地下フォーラムで流通していた悪用可能な生成AIツール「WormGPT」の派生モデルが販売されていることが分かった。
WormGPTは2023年6月にアンダーグラウンドフォーラムの「Hack Forums」に登場した生成AIツールだ。不正利用のガードレールを排除した設計となっており、サイバー犯罪者の活動を支援する目的で開発されていた。開発者は「Last」と名乗る人物でEleutherAIの「GPT-J」をベースに構築され、ユーザーは月額制または年額制でアクセスでき、高額なプライベート環境も提供されていた。サービスは同年8月、報道によって開発者の実名が報じられた直後に終了している。
今回新たにxAIの「Grok」およびMistral AIの「Mixtral」を基盤とする2つのWormGPT派生モデルが発見されている。これらはそれぞれ「keanu-WormGPT」「xzin0vich-WormGPT」と名付けられ、いずれも「BreachForums」という別の地下フォーラムを通じて流通していた。
keanu-WormGPTは、「Telegram」のチャットbotとして提供されており、GrokのAPIを活用して構築されている。システムプロンプトはGrokの検閲機能を回避する命令が含まれており、プロンプトを通じて生成内容の方向性が定義されている。同モデルは独自の学習データではなく、既存のモデルを巧妙に制御する設計が使われている。
xzin0vich-WormGPTもTelegramで稼働しており、内部構造の分析からMixtralが基盤となっていることが確認されている。WormGPTとして振る舞う命令文が含まれており、通常のMixtralでは拒否されるような応答を可能にする構成となっている。応答の中には、Mixtralのアーキテクチャに関連するとみられる構成要素「top_k_routers: 2」や「kv_heads: 8」などが含まれており、内部構造が一部露呈している。この変種も同様に、既存モデルを改変する形で構築されている。
同社はこれらの派生モデルが、商用もしくは一般公開されているLLMに対し、システムプロンプトによる指示や悪意あるプロンプトエンジニアリングによって、目的に沿った動作を実現していると分析している。モデルの開発元が設定した安全機能を迂回（うかい）し、悪意ある出力を可能にするこの手法は、今後の生成AIに関連するリスクとなる可能性がある。検閲を受けず、悪意ある使用を目的としたLLMは、犯罪行為の自動化を助長する可能性があり、サイバーセキュリティの課題として継続的な監視が求められる。
Copyright © ITmedia, Inc. All Rights Reserved.