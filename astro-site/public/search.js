window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q")?.toLowerCase();
  if (!q) return;

  const cards = document.querySelectorAll(".article-card");
  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    if (!text.includes(q)) {
      card.style.display = "none";
    }
  });
});
