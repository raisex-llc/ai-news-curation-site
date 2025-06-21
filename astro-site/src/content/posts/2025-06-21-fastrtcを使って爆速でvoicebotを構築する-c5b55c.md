---
title: FastRTCを使って爆速でVoicebotを構築する
description: '<p>こんにちは、 AIチームの戸田です 今回はPythonでリアルタイムなAIアプリケーションを作る際に役立つライブラリ、FastRTCを使って簡単なVoicebotを構築してみたいと思います。
  FastRTC FastRT [&#8230;]</p>

  <p>投稿 <a href="https://www.ai-shift.co.jp/techblog/5680" rel="nofollow">FastRTCを使って爆速でVoicebotを構築する</a>
  は <a href="https://www.ai-shift.co.jp" rel="nofollow">株式会社AI Shift</a> に最初に表示されました。</p>'
summary: <p>こんにちは、 AIチームの戸田です 今回はPythonでリアルタイムなAIアプリケーションを作る際に役立つライブラリ、FastRTCを使って簡単なVoicebotを構築してみたいと思います。
  FastRTC FastRT [&#823
pubDate: Wed, 16 Apr 2025 00:41:50 +0000
source: AI Shift
tags:
- japan
- aishift
- ai
url: https://www.ai-shift.co.jp/techblog/5680
---

こんにちは、 AIチームの戸田です
今回はPythonでリアルタイムなAIアプリケーションを作る際に役立つライブラリ、FastRTCを使って簡単なVoicebotを構築してみたいと思います。
FastRTC
FastRTCは、Pythonでリアルタイムの音声およびビデオストリーミングアプリケーションを構築するためのライブラリです。
VoicebotのようなリアルタイムなAIアプリケーションを作るとなると、 WebRTC や websockets などの技術が必要になります。しかしこれらのノウハウは様々な情報源に散らばっており、習得が困難です。近年は生成AIによるコード生成も使えますが、WebRTCやwebsocketsを利用したPythonコードとなると、現在はまだ正しいコードの生成に苦労する印象です。
FastRTCは、特にこういった知識が専門ではない機械学習エンジニアがリアルタイムAIアプリケーションをPythonで開発する際の障壁を取り除くことを目指しています。
作成したアプリケーションはGradioのUIやTwilioのIP電話として簡単に公開することができます。IP電話で繋ぐ際はサンプリング周波数の変更などの音声形式の処理が必要なのですが、こういった煩雑な処理も内部で担ってくれているので便利です。今回はIP電話でLLMと会話するアプリケーションを作ってみます。
実装
ライブラリはpipでインストールできます
pip install fastrtc
Cookbookに乗っているサンプルコードを参考に、レストラン予約を行うVoicebotを構築してみたいと思います。ロールプレイングでDB接続などは行いません。
import base64
import asyncio
import numpy as np
import openai
from fastrtc import (
AdditionalOutputs,
AsyncStreamHandler,
Stream,
get_twilio_turn_credentials,
wait_for_item,
)
from gradio.utils import get_space
from openai.types.beta.realtime import ResponseAudioTranscriptDoneEvent, ResponseOutputItemDoneEvent
SAMPLE_RATE = 24000
SYS_PROMPT = """あなたは、レストラン「AI-SHIFT」の予約受付担当です。
以下の制約条件と入力文、会話履歴を考慮して、お客様からの予約の問い合わせに対応してください。
発話は短く簡潔に、ヒアリングは一項目ずつ行い、一度に複数の質問をしないでください。
# 制約条件
* レストラン名: AI-SHIFT
* 営業時間:
* 平日: 11:00-22:00
* 土日祝: 10:00-23:00
* 定休日: 年末年始
* 予約可能な人数: 1名様から4名様まで
* お客様の名前、予約日時、人数、その他要望をお伺いします。
* お客様が予約を完了するまで、会話を続けてください。
* 会話終了後、予約内容を復唱して確認して下さい。
"""
class OpenAIHandler(AsyncStreamHandler):
def __init__(
self,
) -> None:
super().__init__(
expected_layout="mono",
output_sample_rate=SAMPLE_RATE,
output_frame_size=480,
input_sample_rate=SAMPLE_RATE,
)
self.connection = None
self.output_queue = asyncio.Queue()
self.function_call = False
def copy(self):
return OpenAIHandler()
async def start_up(
self,
):
self.client = openai.AsyncOpenAI()
async with self.client.beta.realtime.connect(
model="gpt-4o-mini-realtime-preview-2024-12-17"
) as conn:
await conn.session.update(
session={
"turn_detection": {"type": "server_vad"},
"instructions": SYS_PROMPT,
}
)
self.connection = conn
async for event in self.connection:
if event.type == "response.audio_transcript.done":
print(event)
await self.output_queue.put(AdditionalOutputs(event))
if event.type == "response.audio.delta":
await self.output_queue.put(
(
self.output_sample_rate,
np.frombuffer(
base64.b64decode(event.delta), dtype=np.int16
).reshape(1, -1),
),
)
async def receive(self, frame: tuple[int, np.ndarray]) -> None:
if not self.connection:
return
_, array = frame
array = array.squeeze()
audio_message = base64.b64encode(array.tobytes()).decode("utf-8")
await self.connection.input_audio_buffer.append(audio=audio_message)
async def emit(self) -> tuple[int, np.ndarray] | AdditionalOutputs | None:
return await wait_for_item(self.output_queue)
async def shutdown(self) -> None:
if self.connection:
await self.connection.close()
self.connection = None
stream = Stream(
OpenAIHandler(),
mode="send-receive",
modality="audio",
concurrency_limit=1, # 同時接続数
time_limit=90, # 1回の通話の制限時間
)
stream.fastphone()
全て合わせても100行ちょっとです。これだけの少量のコードでVoicebotが構築できてしまいます。
起動すると以下のような出力がされます。
提示された電話番号に電話をかけるとコードを要求されるので、プッシュボタン（IVR）で電話番号の右側に提示されている6桁のコードを入力します。成功すると
INFO: ('172.31.47.62', 0) - "WebSocket /telephone/handler" [accepted]
INFO: connection open
のような表示がされ、設定したレストラン予約対話が可能です。
電話番号は毎月3分のみ利用できるFastRTC側で用意されたものになっていますが、自身のTwilioアカウントと連携して任意の番号を設定することも可能です。本記事では扱わないのでこちらのドキュメントをご参照ください。
今回はOpenAIのRealtime APIを利用した双方向通信のリアルタイム音声会話の例を示しましたが、FastRTCではVADについても標準機能を搭載しているので、VADで発話区間を抽出→STTモデルで文字起こし→ LLMで返答生成→返答をTTSモデルで音声として出力、といったパイプライン型の対話システムも構築できます。Realtime APIは現状では制御が難しく、hallucinationの懸念もあるため、より複雑な業務用途ではパイプライン型の方が適している場合も多いです。
展開方法
今回は電話応答のVoicebotの実装でしたが、FastRTCはGradioベースのUIやFastAPIのエンドポイントも簡単に実装することができるので、ユースケースに合わせて展開することができます。stream.fastphone()
の部分を以下のように変更してください。
Gradio
stream.ui.launch()
FastAPI
from fastapi import FastAPI
from fastapi.responses import HTMLResponse, StreamingResponse
app = FastAPI()
stream.mount(app)
# sample streaming endpoint
@app.get("/outputs")
def _(webrtc_id: str):
async def output_stream():
async for output in stream.output_stream(webrtc_id):
chatbot = output.args[0]
yield f"event: output\ndata: {json.dumps(chatbot[-1])}\n\n"
return StreamingResponse(output_stream(), media_type="text/event-stream")
他の応用方法
ドキュメントには他にも様々なサンプル実装があるので、それらを参考に色々試してみるのも良さそうです。私が興味を惹かれたのはYoloによるObject Detectionの例です。
GeminiのLive APIなど映像を扱えるマルチモーダルな LLMが公開されているものの、Streamingで動画像を扱う経験が無く、ハードルが高かったのですが、FastRTCを通せばかなり楽に実装できそうに見えました。
おわりに
FastRTCを使うことで、WebRTCやwebsocketsなどの複雑な技術スタックを考慮することなく、Pythonだけで簡単にリアルタイムな音声対話システムを構築できることがわかりました。
5年前にAI Messenger Voicebotを開発し始めた頃は、ただ電話を繋ぐだけでもかなり苦労したことを覚えています。当時は音声の送受信、VAD、STT、TTSのそれぞれを個別に実装し、それらを連携させるためのコードを書く必要がありました。 加えてLLMも普及していなかった（GPT-3が発表されたくらい）ので対話管理のための処理も考える必要がありました。
今やわずか100数行のコードでリアルタイム音声対話システムが実現できる時代になりました。AI開発の民主化が急速に進んでいることを実感します。
最後までお読みいただき、ありがとうございました！