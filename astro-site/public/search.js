// public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase() || "";

  // ✅ 検索ボックスに値を保持する
  const qInputs = document.querySelectorAll('input[name="q"]');
  const mediaSelects = document.querySelectorAll('select[name="media"]');

  qInputs.forEach((input) => {
    input.value = q;
  });

  mediaSelects.forEach((select) => {
    Array.from(select.options).forEach((opt) => {
      if (opt.value.toLowerCase() === media) {
        opt.selected = true;
      }
    });
  });

  // ✅ カードを絞り込む（index.astro にて client-side filter する場合用）
  const cards = document.querySelectorAll(".article-card");
  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const source = card.getAttribute("data-media")?.toLowerCase() || "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || source.includes(media);

    if (!matchQ || !matchMedia) {
      card.style.display = "none";
    } else {
      card.style.display = "";
    }
  });
});


