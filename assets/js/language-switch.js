(() => {
  const storageKey = "medaiHomeLanguage";
  const languageOptions = [
    { code: "zh", short: "中文", native: "中文", english: "Chinese", htmlLang: "zh-CN", dir: "ltr" },
    { code: "en", short: "EN", native: "English", english: "English", htmlLang: "en", dir: "ltr" },
    { code: "ar", short: "AR", native: "العربية", english: "Arabic", htmlLang: "ar", dir: "rtl" },
    { code: "es", short: "ES", native: "Español", english: "Spanish", htmlLang: "es", dir: "ltr" },
    { code: "fr", short: "FR", native: "Français", english: "French", htmlLang: "fr", dir: "ltr" },
    { code: "de", short: "DE", native: "Deutsch", english: "German", htmlLang: "de", dir: "ltr" },
    { code: "ja", short: "日本語", native: "日本語", english: "Japanese", htmlLang: "ja", dir: "ltr" },
    { code: "ko", short: "한국어", native: "한국어", english: "Korean", htmlLang: "ko", dir: "ltr" },
    { code: "ru", short: "RU", native: "Русский", english: "Russian", htmlLang: "ru", dir: "ltr" },
    { code: "pt", short: "PT", native: "Português", english: "Portuguese", htmlLang: "pt", dir: "ltr" },
    { code: "hi", short: "HI", native: "हिन्दी", english: "Hindi", htmlLang: "hi", dir: "ltr" },
    { code: "id", short: "ID", native: "Bahasa Indonesia", english: "Indonesian", htmlLang: "id", dir: "ltr" },
    { code: "vi", short: "VI", native: "Tiếng Việt", english: "Vietnamese", htmlLang: "vi", dir: "ltr" },
    { code: "th", short: "TH", native: "ไทย", english: "Thai", htmlLang: "th", dir: "ltr" },
    { code: "tr", short: "TR", native: "Türkçe", english: "Turkish", htmlLang: "tr", dir: "ltr" },
    { code: "fa", short: "FA", native: "فارسی", english: "Persian", htmlLang: "fa", dir: "rtl" },
    { code: "it", short: "IT", native: "Italiano", english: "Italian", htmlLang: "it", dir: "ltr" },
    { code: "nl", short: "NL", native: "Nederlands", english: "Dutch", htmlLang: "nl", dir: "ltr" },
  ];
  const languageMeta = Object.fromEntries(languageOptions.map((language) => [language.code, language]));

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[char]));
  }

  function getLanguage() {
    const saved = localStorage.getItem(storageKey);
    return languageMeta[saved] ? saved : "zh";
  }

  function renderLanguageMenu() {
    const menu = document.querySelector("[data-language-menu]");
    if (!menu) return;
    menu.innerHTML = languageOptions.map((language) => `
      <button class="language-option" type="button" role="option" data-language-option="${escapeHtml(language.code)}" aria-selected="false">
        <span class="language-option-text">
          <span class="language-option-native">${escapeHtml(language.native)}</span>
          <span class="language-option-english">${escapeHtml(language.english)}</span>
        </span>
        <span class="language-option-code">${escapeHtml(language.short)}</span>
      </button>
    `).join("");
  }

  function setLanguageMenuOpen(open) {
    const root = document.querySelector("[data-language-switch]");
    const trigger = document.querySelector("[data-language-trigger]");
    const menu = document.querySelector("[data-language-menu]");
    if (!root || !trigger || !menu) return;
    root.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  }

  function applyLanguage(language) {
    const meta = languageMeta[language] || languageMeta.zh;
    localStorage.setItem(storageKey, meta.code);
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
    document.body.classList.toggle("is-rtl", meta.dir === "rtl");
    const current = document.querySelector("[data-language-current]");
    if (current) current.textContent = meta.short;
    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const active = button.dataset.languageOption === meta.code;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
  }

  function wireLanguageSwitch() {
    const root = document.querySelector("[data-language-switch]");
    root?.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-language-trigger]");
      if (trigger) {
        setLanguageMenuOpen(trigger.getAttribute("aria-expanded") !== "true");
        return;
      }

      const button = event.target.closest("[data-language-option]");
      if (!button) return;
      applyLanguage(button.dataset.languageOption || "zh");
      setLanguageMenuOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (root?.contains(event.target)) return;
      setLanguageMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setLanguageMenuOpen(false);
    });
  }

  function boot() {
    renderLanguageMenu();
    wireLanguageSwitch();
    applyLanguage(getLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
