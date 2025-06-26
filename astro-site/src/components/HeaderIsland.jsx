// src/components/HeaderIsland.jsx
import { useEffect, useState } from "react";

export default function HeaderIsland() {
  const [q, setQ] = useState("");
  const [media, setMedia] = useState("");

  // ArticleList 側に値を反映させるため、windowイベントを dispatch
  useEffect(() => {
    const event = new CustomEvent("searchUpdate", {
      detail: { q, media },
    });
    window.dispatchEvent(event);
  }, [q, media]);

  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full lg:ml-auto mt-2 lg:mt-0">
      {/* ✅ 媒体名検索 */}
      <select
        value={media}
        onChange={(e) => setMedia(e.target.value)}
        className="text-sm border rounded px-2 py-2 w-full lg:w-48"
      >
        <option value="">媒体名で検索</option>
        <option value="arXiv AI">arXiv AI</option>
        <option value="Hugging Face Blog">Hugging Face Blog</option>
        <option value="OpenAI Blog">OpenAI Blog</option>
        <option value="Google AI Blog">Google AI Blog</option>
        <option value="Microsoft Research Blog">Microsoft Research Blog</option>
        <option value="DeepMind Blog">DeepMind Blog</option>
        <option value="MIT">MIT</option>
        <option value="ITmedia AI">ITmedia AI</option>
        <option value="AI Smily">AI Smily</option>
        <option value="AI Shift">AI Shift</option>
      </select>

      {/* ✅ フリーワード検索 */}
      <input
        type="text"
        placeholder="フリーワード検索"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="text-sm border rounded px-2 py-2 w-full lg:w-60"
      />
    </div>
  );
}
