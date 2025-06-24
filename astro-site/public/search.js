// public/search.js
console.log("✅ search.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("search-overlay");

  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (overlay) overlay.style.display = "flex";
      console.log("📨 フォーム送信 → オーバーレイ表示");

      requestAnimationFrame(() => {
        setTimeout(() => {
          const action = form.getAttribute("action") || window.location.pathname;
          const formData = new FormData(form);
          const params = new URLSearchParams(formData);
          params.delete("_");

          const query = params.toString();
          console.log("🔍 遷移URL:", `${action}?${query}`);
          window.location.href = query ? `${action}?${query}` : action;
        }, 50);
      });
    });
  });

  // クエリ取得
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase()?.trim() || "";
  const media = params.get("media")?.toLowerCase()?.replace(/\s+/g, "") || "";

  console.log("🔍 クエリパラメータ受信 q:", q);
  console.log("🔍 クエリパラメータ受信 media:", media);

  // inputに反映
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

  // オーバーレイ制御
  const cards = document.querySelectorAll(".article-card");
  const visible = Array.from(cards).filter((card) => card.offsetParent !== null);
  console.log("🧾 表示カード数 (DOM上):", cards.length, "可視:", visible.length);

  if (overlay && (q || media)) {
    if (visible.length > 0) {
      overlay.style.display = "none";
      console.log("✅ 結果あり：オーバーレイ非表示");
    } else {
      console.log("⚠️ 結果なし：3秒後にオーバーレイ非表示");
      setTimeout(() => overlay.style.display = "none", 3000);
    }
  }
});
