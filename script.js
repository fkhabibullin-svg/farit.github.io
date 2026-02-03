(() => {
  const root = document.documentElement;

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme (persist)
  const KEY = "site_theme";
  const saved = localStorage.getItem(KEY);

  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
    root.setAttribute("data-theme", prefersLight ? "light" : "dark");
  }

  document.getElementById("themeBtn")?.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") || "dark";
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  });
})();
