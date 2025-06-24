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
        overlay.style.display = "flex"; // 🔍 検索中オーバーレイを即表示
      }

      // ✅ 1フレーム待ってから遷移（オーバーレイ描画保証）
      requestAnimationFrame(() => {
        setTimeout(() => {
          const action = form.getAttribute("action") || window.location.pathname;
          const method = (form.getAttribute("method") || "get").toLowerCase();

          const formData = new FormData(form);
          const params = new URLSearchParams(formData);

          // ✅ 不審なクエリ（_）を除去
          params.delete("_");

          if (method === "get") {
            const query = params.toString();
            window.location.href = query ? `${action}?${query}` : action;
          } else {
            form.submit(); // POSTならsubmit継続
          }
        }, 50); // 最小遅延（オーバーレイ描画保証）
      });
    });
  });

  // ✅ クエリパラメータ取得と input に反映
  const params = new URLSearchParams(window.location.search);
  params.delete("_"); // ✅ 不審な _ パラメータを除去

  const q = params.get("q")?.toLowerCase().trim() || "";
  const media = params.get("media")?.toLowerCase().trim() || "";

  document.querySelectorAll('input[name="q"]').forEach((input) => {
    input.value = q;
  });

  document.querySelectorAll('select[name="media"]').forEach((select) => {
    Array.from(select.options).forEach((opt) => {
      if (opt.value.toLowerCase().trim() === media) {
        opt.selected = true;
      }
    });
  });

  // ✅ 表示されているカードが1件でもあればオーバーレイ即時非表示
  const cards = document.querySelectorAll(".article-card");
  const hasVisible = Array.from(cards).some((card) => card.offsetParent !== null);

  if (overlay && (q || media)) {
    if (hasVisible) {
      overlay.style.display = "none";
    } else {
      setTimeout(() => {
        overlay.style.display = "none";
      }, 3000); // 検索結果がない場合は3秒後に非表示
    }
  }
});
