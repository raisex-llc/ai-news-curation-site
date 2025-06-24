// ✅ public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("search-overlay");

  // ✅ 各フォームの submit をフック
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // デフォルト送信を防ぐ

      if (overlay) {
        overlay.style.display = "flex";
      }

      setTimeout(() => {
        const action = form.getAttribute("action") || window.location.pathname;
        const method = (form.getAttribute("method") || "get").toLowerCase();

        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();

        if (method === "get") {
          // ✅ location.href による画面遷移でオーバーレイは維持される
          window.location.href = `${action}?${params}`;
        } else {
          form.submit();
        }
      }, 50); // オーバーレイ描画のための小さな遅延
    });
  });

  // ✅ 結果画面でのフィルタとフォームへの値セット
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase() || "";

  document.querySelectorAll('input[name="q"]').forEach(input => input.value = q);
  document.querySelectorAll('select[name="media"]').forEach(select => {
    Array.from(select.options).forEach(opt => {
      if (opt.value.toLowerCase() === media) {
        opt.selected = true;
      }
    });
  });

  // ✅ 結果フィルタリング（空配列対応も含む）
  const cards = document.querySelectorAll(".article-card");
  let matchCount = 0;

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const source = card.getAttribute("data-media")?.toLowerCase() || "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || source.includes(media);

    const match = matchQ && matchMedia;
    card.style.display = match ? "" : "none";

    if (match) matchCount++;
  });

  // ✅ オーバーレイはページ表示後に即閉じる（検索結果あれば）
  if (overlay && (q || media)) {
    if (matchCount > 0) {
      overlay.style.display = "none"; // 即座に非表示
    } else {
      // 検索結果ゼロ → 2秒後に消す（"検索中"を一瞬でも見せる）
      setTimeout(() => {
        overlay.style.display = "none";
      }, 10000);
    }
  }
});
