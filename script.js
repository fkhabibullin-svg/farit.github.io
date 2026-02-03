(function () {
  const root = document.documentElement;

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme persistence
  const THEME_KEY = "ghpages_theme";
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  } else {
    // Default: respect system preference
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
    root.setAttribute("data-theme", prefersLight ? "light" : "dark");
  }

  const themeBtn = document.getElementById("themeBtn");
  themeBtn?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  });

  // Simple local visit counter (per-browser)
  const VISITS_KEY = "ghpages_visits";
  const visits = (Number(localStorage.getItem(VISITS_KEY)) || 0) + 1;
  localStorage.setItem(VISITS_KEY, String(visits));
  const visitsEl = document.getElementById("visits");
  if (visitsEl) visitsEl.textContent = String(visits);

  // Demo contact form
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    alert(`Thanks, ${name || "friend"}! (This demo form doesn't send yet.)`);
    form.reset();
  });
})();
