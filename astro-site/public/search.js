// astro-site/public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("search-overlay");

  // ✅ 検索ボタン（フォーム送信）を押した瞬間にオーバーレイを表示
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", () => {
      if (overlay) {
        overlay.style.display = "flex";

        // ✅ 5秒後に自動で非表示にする（遷移がなければ）
        setTimeout(() => {
          overlay.style.display = "none";
        }, 5000);
      }
    });
  });

  // ✅ URLクエリパラメータを取得
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase() || "";

  // ✅ 入力フォームにパラメータを反映
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

  // ✅ クライアント側でカードを絞り込み
  const cards = document.querySelectorAll(".article-card");
  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const source = card.getAttribute("data-media")?.toLowerCase() || "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || source.includes(media);

    card.style.display = matchQ && matchMedia ? "" : "none";
  });
});
