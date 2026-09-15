

(function () {

  var STORAGE_KEY = "theme-preference";
  var root = document.documentElement;


  // -----------------------------
  // Theme helpers
  // -----------------------------

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }


  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }


  function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }


  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }


  // -----------------------------
  // Theme icons
  // -----------------------------

  var SUN =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="5"/>' +
    '<line x1="12" y1="1" x2="12" y2="3"/>' +
    '<line x1="12" y1="21" x2="12" y2="23"/>' +
    '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>' +
    '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>' +
    '<line x1="1" y1="12" x2="3" y2="12"/>' +
    '<line x1="21" y1="12" x2="23" y2="12"/>' +
    '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>' +
    '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>' +
    '</svg>';


  var MOON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' +
    '</svg>';


  // -----------------------------
  // Determine current theme
  // -----------------------------

  function getCurrentTheme() {
    var stored = getStoredTheme();

    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return prefersDark() ? "dark" : "light";
  }


  // Apply saved/system theme immediately
  applyTheme(getStoredTheme());


  // -----------------------------
  // Set up theme toggle
  // -----------------------------

  document.addEventListener("DOMContentLoaded", function () {

    var button = document.querySelector(".theme-toggle");

    if (!button) return;


    function render() {

      var theme = getCurrentTheme();
      var isDark = theme === "dark";

      button.innerHTML = isDark ? SUN : MOON;

      button.setAttribute(
        "aria-label",
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      );

    }


    // Show correct icon
    render();


    // Toggle theme
    button.addEventListener("click", function () {

      var currentTheme = getCurrentTheme();
      var nextTheme = currentTheme === "dark" ? "light" : "dark";

      saveTheme(nextTheme);
      applyTheme(nextTheme);
      render();

    });

  });

})();

    // -----------------------------
    // Abstract toggles
    // -----------------------------

    var abstractButtons = document.querySelectorAll(".abstract-toggle");

    abstractButtons.forEach(function (button) {

      button.addEventListener("click", function () {

        button.classList.toggle("open");

        var abstract = button.nextElementSibling;

        if (abstract) {
          abstract.classList.toggle("open");
        }

      });

    });