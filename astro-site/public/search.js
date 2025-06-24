// public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("search-overlay");

  // ✅ 各フォームに対して submit イベントを制御
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // 通常のsubmitをキャンセル

      if (overlay) {
        overlay.style.display = "flex";
      }

      // ✅ 確実に表示された次のフレームで遷移
      requestAnimationFrame(() => {
        setTimeout(() => {
          const action = form.getAttribute("action") || window.location.pathname;
          const method = (form.getAttribute("method") || "get").toLowerCase();

          const formData = new FormData(form);
          const params = new URLSearchParams(formData).toString();

          if (method === "get") {
            window.location.href = `${action}?${params}`;
          } else {
            form.submit(); // POST用 fallback
          }
        }, 50);
      });
    });
  });

  // ✅ 初期化：クエリを input に反映
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase() || "";

  document.querySelectorAll('input[name="q"]').forEach((input) => (input.value = q));
  document.querySelectorAll('select[name="media"]').forEach((select) => {
    Array.from(select.options).forEach((opt) => {
      if (opt.value.toLowerCase() === media) opt.selected = true;
    });
  });

  // ✅ 検索後：絞り込みロジックを使って結果があれば overlay を閉じる
  const cards = document.querySelectorAll(".article-card");
  const hasVisible = Array.from(cards).some((card) => card.offsetParent !== null);

  if (overlay && (q || media)) {
    if (hasVisible) {
      overlay.style.display = "none"; // ✅ 検索結果あればすぐ非表示
    } else {
      setTimeout(() => {
        overlay.style.display = "none"; // ✅ 結果ゼロなら10秒で閉じる
      }, 10000);
    }
  }
});

