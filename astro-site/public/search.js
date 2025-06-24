// astro-site/public/search.js
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

      // ✅ 小さな遅延を入れてから遷移（オーバーレイが確実に表示されるように）
      setTimeout(() => {
        const action = form.getAttribute("action") || window.location.pathname;
        const method = (form.getAttribute("method") || "get").toLowerCase();

        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();

        if (method === "get") {
          window.location.href = `${action}?${params}`;
        } else {
          form.submit(); // POSTなら元のsubmitで継続
        }
      }, 50); // 50msくらい遅延を入れることでオーバーレイが描画される
    });
  });

  // ✅ クエリパラメータ取得とフォームへの反映
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase() || "";

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

  // ✅ カード絞り込み
  const cards = document.querySelectorAll(".article-card");
  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const source = card.getAttribute("data-media")?.toLowerCase() || "";

    const matchQ = !q || text.includes(q);
    const matchMedia = !media || source.includes(media);

    card.style.display = matchQ && matchMedia ? "" : "none";
  });
});
