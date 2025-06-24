// public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("search-overlay");

  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (overlay) {
        overlay.style.display = "flex";
        console.log("🔄 オーバーレイ表示開始");
      }

      requestAnimationFrame(() => {
        setTimeout(() => {
          const action = form.getAttribute("action") || window.location.pathname;
          const method = (form.getAttribute("method") || "get").toLowerCase();

          const formData = new FormData(form);
          const params = new URLSearchParams(formData);

          params.delete("_");

          if (method === "get") {
            const query = params.toString();
            console.log("📤 GET検索送信", `${action}?${query}`);
            window.location.href = query ? `${action}?${query}` : action;
          } else {
            console.log("📤 POST検索送信");
            form.submit();
          }
        }, 50);
      });
    });
  });

  // URLパラメータ → inputへ反映
  const params = new URLSearchParams(window.location.search);
  params.delete("_");

  const q = params.get("q")?.toLowerCase() || "";
  const media = params.get("media")?.toLowerCase().replace(/\s+/g, "") || "";

  console.log("🌐 クエリパラメータ受信 q:", q, "media:", media);

  document.querySelectorAll('input[name="q"]').forEach((input) => {
    input.value = q;
  });

  document.querySelectorAll('select[name="media"]').forEach((select) => {
    Array.from(select.options).forEach((opt) => {
      if (opt.value.toLowerCase().replace(/\s+/g, "") === media) {
        opt.selected = true;
      }
    });
  });

  const cards = document.querySelectorAll(".article-card");
  const hasVisible = Array.from(cards).some((card) => card.offsetParent !== null);
  console.log("🧾 表示カード数（DOM上）:", cards.length, "可視:", hasVisible);

  if (overlay && (q || media)) {
    if (hasVisible) {
      overlay.style.display = "none";
      console.log("✅ 結果あり：オーバーレイ非表示");
    } else {
      setTimeout(() => {
        overlay.style.display = "none";
        console.log("⚠️ 結果なし：5秒後オーバーレイ非表示");
      }, 5000);
    }
  }
});
