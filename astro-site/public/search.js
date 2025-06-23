// public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() ?? "";
  const media = params.get("media")?.toLowerCase() ?? "";

  const cards = document.querySelectorAll(".article-card");

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const cardMedia = card.getAttribute("data-media")?.toLowerCase() ?? "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || cardMedia.includes(media);

    card.style.display = matchQ && matchMedia ? "" : "none";
  });
});


