// public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase();

  let media = params.get("media");
  media = media?.toLowerCase().replace(/\s+/g, ""); // ✅ 正規化！

  const cards = document.querySelectorAll(".article-card");
  console.log("📦 表示カード数（DOM上）:", cards.length);

  let visibleCount = 0;

  cards.forEach((card) => {
    let show = true;

    // ✅ mediaが指定されている場合は data-media と比較
    if (media) {
      const cardMedia = card.getAttribute("data-media")?.toLowerCase();
      if (cardMedia !== media) {
        show = false;
      }
    }

    // ✅ フリーワードが指定されている場合は text に含まれるか確認
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

  // ✅ 結果が0件ならオーバーレイ表示
  const overlay = document.getElementById("search-overlay");
  if (visibleCount === 0 && overlay) {
    overlay.style.display = "flex";
  } else if (overlay) {
    overlay.style.display = "none";
  }
});
