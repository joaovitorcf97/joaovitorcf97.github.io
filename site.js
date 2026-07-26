(function () {
  const supported = ["pt", "en"];
  const storageKey = "superapps.lang";

  const readStored = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch {
      // Private mode or blocked storage: fall back to the URL/browser choice.
      return null;
    }
  };

  const writeStored = (language) => {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      /* nothing to do — the page still works, the choice just will not persist */
    }
  };

  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const stored = readStored();
  const browserLanguage = (navigator.language || "en").toLowerCase();

  // Explicit ?lang= wins, then a previous choice, then the browser.
  let current = supported.includes(requested)
    ? requested
    : supported.includes(stored)
      ? stored
      : browserLanguage.startsWith("pt")
        ? "pt"
        : "en";

  const applyLanguage = (language, persist) => {
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

    const titles = document.querySelector("[data-title-pt][data-title-en]");
    if (titles) {
      document.title = current === "pt" ? titles.dataset.titlePt : titles.dataset.titleEn;
    }

    if (persist) {
      writeStored(current);
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

  // Remember a language that came in through the URL so the next page keeps it.
  if (supported.includes(requested) && requested !== stored) writeStored(current);
})();
