(function () {
  const supported = ["pt", "en"];
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const browserLanguage = (navigator.language || "en").toLowerCase();
  let current = supported.includes(requested)
    ? requested
    : browserLanguage.startsWith("pt")
      ? "pt"
      : "en";

  const applyLanguage = (language, updateUrl) => {
    current = supported.includes(language) ? language : "en";
    document.documentElement.lang = current === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.hidden = element.dataset.lang !== current;
    });

    document.querySelectorAll("[data-language-button]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        button.dataset.languageButton === current ? "true" : "false"
      );
    });

    document.querySelectorAll("[data-title-pt][data-title-en]").forEach((element) => {
      document.title = current === "pt" ? element.dataset.titlePt : element.dataset.titleEn;
    });

    if (updateUrl) {
      const next = new URL(window.location.href);
      next.searchParams.set("lang", current);
      window.history.replaceState({}, "", next);
    }
  };

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.languageButton, true);
    });
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  applyLanguage(current, false);
})();
