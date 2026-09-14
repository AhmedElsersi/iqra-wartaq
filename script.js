(function () {
  var STORAGE_KEY = "iqra-wartaq-lang";

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-lang-panel]").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang-panel") === lang);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private browsing / blocked storage: language just won't persist */
    }
  }

  function initialLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") return stored;
    } catch (e) {
      /* fall through to default */
    }
    return "ar";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-btn"));
      });
    });
    applyLang(initialLang());
  });
})();
