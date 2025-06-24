// astro-site/public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase() || "";

  // ✅ 検索フォームにパラメータを反映
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

  // ✅ 検索オーバーレイ表示（検索条件が指定されたときのみ）
  const overlay = document.getElementById("search-overlay");
  const isSearching = q || media;

  if (isSearching && overlay) {
    overlay.style.display = "flex";

    // 2〜4秒後に自動非表示（データ取得時間に応じて調整可能）
    setTimeout(() => {
      overlay.style.display = "none";
    }, 3000);
  }

  // ✅ クライアント側でカード絞り込み（静的HTMLでも柔軟に対応）
  const cards = document.querySelectorAll(".article-card");
  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const source = card.getAttribute("data-media")?.toLowerCase() || "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || source.includes(media);

    card.style.display = matchQ && matchMedia ? "" : "none";
  });

  // ✅ フォーム送信時にオーバーレイを即表示
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", () => {
      const overlay = document.getElementById("search-overlay");
      if (overlay) {
        overlay.style.display = "flex";
      }
    });
  });
});
