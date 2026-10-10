(() => {
  "use strict";

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  const year = document.querySelector("#year");

  year.textContent = String(new Date().getFullYear());

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    links.classList.toggle("is-open", !isOpen);
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.focus();
    }
  });
})();
