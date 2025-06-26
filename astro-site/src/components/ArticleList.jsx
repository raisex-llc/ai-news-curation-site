// src/components/ArticleList.jsx
import { useEffect, useState } from "react";

const fallback =
  "https://github.com/raisex-llc/ai-news-curation-site/blob/gh-pages/assets/ai-icon.png?raw=true";
const PAGE_SIZE = 30;

function normalize(text) {
  return text?.toLowerCase().replace(/\s+/g, "").trim();
}

export function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const [media, setMedia] = useState("");

  // クエリ取得
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") ?? "";
    const mediaParam = params.get("media") ?? "";
    setQ(query.toLowerCase());
    setMedia(normalize(mediaParam));
  }, []);

  // JSON読込 + フィルタ・ソート処理
  useEffect(() => {
    fetch("/ai-news-curation-site/articles.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
        const results = sorted.filter((a) => {
          const text = `${a.title} ${a.description} ${a.summary}`.toLowerCase();
          const source = normalize(a.source);
          const matchQ = !q || text.includes(q);
          const matchMedia = !media || source === media;
          return matchQ && matchMedia;
        });
        setFiltered(results);
        setLoading(false);
      });
  }, [q, media]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* ✅ ヘッダーのさらに上、最上段に表示 */}
      <div className="fixed top-0 left-0 w-full z-[9999] bg-gray-100 py-1 text-center text-sm text-blue-700 shadow-sm">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)} className="mr-2 hover:underline">
            ← 前のページ
          </button>
        )}
        ページ {page} / 全{totalPages}ページ
        {page < totalPages && (
          <button onClick={() => setPage(page + 1)} className="ml-2 hover:underline">
            次のページ →
          </button>
        )}
      </div>

      {/* ✅ 読込中オーバーレイ */}
      {loading && (
        <div
          id="search-overlay"
          className="fixed inset-0 z-40 bg-white/80 backdrop-blur-sm flex items-center justify-center text-xl font-bold text-red-600"
        >
          🔍 検索中です… 少々お待ちください
        </div>
      )}

      {/* ✅ 上部バーの分だけ余白追加 */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((a, i) => (
          <ArticleCard key={i} article={a} />
        ))}
      </div>

      {/* ✅ ページ下にも切替ボタン */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center mt-8 gap-4 text-sm text-blue-600">
          {page > 1 && (
            <button onClick={() => setPage(page - 1)} className="hover:underline">
              ← 前のページ
            </button>
          )}
          <span>ページ {page} / 全{totalPages}ページ</span>
          {page < totalPages && (
            <button onClick={() => setPage(page + 1)} className="hover:underline">
              次のページ →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ArticleCard({ article }) {
  const { title, pubDate, description, summary, thumbnail, url } = article;
  const media = article.media ?? article.source ?? "媒体不明";
  const normalizedMedia = normalize(media);
  const displayDate = new Date(pubDate).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  });

  return (
    <article
      className="article-card bg-white shadow rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full min-h-[400px]"
      data-media={normalizedMedia}
    >
      {/* ✅ 媒体名の表示 */}
      <div className="text-base text-sky-500 font-bold px-3 pt-3">{media}</div>

      <a href={url} target="_blank" rel="noopener noreferrer" className="block px-3 pt-2">
        <img
          src={thumbnail || fallback}
          alt={title}
          className="w-full aspect-video object-cover rounded-md bg-gray-100"
          loading="lazy"
          onError={(e) => (e.target.src = fallback)}
        />
      </a>
      <div className="p-3 flex flex-col justify-between h-full">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base font-bold text-blue-600 hover:underline mb-1 leading-snug"
        >
          {title}
        </a>
        <p className="text-sm text-black mb-2">{displayDate}</p>
        <p className="text-gray-700 text-sm line-clamp-2">
          {summary || description}
        </p>
      </div>
    </article>
  );
}
