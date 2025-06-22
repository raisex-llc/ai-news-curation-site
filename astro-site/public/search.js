console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLocaleLowerCase('ja-JP'); // ✅ 日本語に対応した小文字変換
  if (!q) return;

  const cards = document.querySelectorAll(".article-card");
  cards.forEach((card) => {
    const text = card.innerText.toLocaleLowerCase('ja-JP'); // ✅ innerTextもロケール指定
    if (!text.includes(q)) {
      card.style.display = "none";
    }
  });
});
