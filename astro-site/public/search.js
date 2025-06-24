// public/search.js

console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase();
  let media = params.get("media");

  // ✅ 入力欄・セレクトボックスへ反映（パラメータ保持）
  const qInput = document.querySelector('input[name="q"]');
  const mediaSelect = document.querySelector('select[name="media"]');
  if (qInput) qInput.value = q ?? "";
  if (mediaSelect) mediaSelect.value = media ?? "";

  // ✅ data-mediaとの比較のため、mediaを正規化（小文字化+空白除去）
  const normalizedMedia = media?.toLowerCase().replace(/\s+/g, "");

  const cards = document.querySelectorAll(".article-card");
  console.log("📦 表示カード数（DOM上）:", cards.length);

  let visibleCount = 0;

  cards.forEach((card) => {
    let show = true;

    if (normalizedMedia) {
      const cardMedia = card.getAttribute("data-media")?.toLowerCase().replace(/\s+/g, "");
      if (cardMedia !== normalizedMedia) {
        show = false;
      }
    }

    if (q) {
      const text = card.innerText.toLowerCase();
      if (!text.includes(q)) {
        show = false;
      }
    }

    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  console.log("👀 フィルタ後の表示件数:", visibleCount);

  // ✅ オーバーレイの表示切替処理（検索結果ゼロ時のみ表示）
  const overlay = document.getElementById("search-overlay");
  if (overlay) {
    overlay.style.display = visibleCount === 0 ? "flex" : "none";
  }
});
