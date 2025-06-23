// astro-site/public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLocaleLowerCase('ja-JP') ?? "";
  const media = params.get("media")?.toLocaleLowerCase('ja-JP') ?? "";

  // 記事カードを取得
  const cards = document.querySelectorAll(".article-card");

  cards.forEach((card) => {
    const text = card.innerText.toLocaleLowerCase('ja-JP');
    const cardMedia = card.getAttribute("data-media")?.toLocaleLowerCase('ja-JP') ?? "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || cardMedia.includes(media);

    // AND 条件でフィルタ
    if (matchQ && matchMedia) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
