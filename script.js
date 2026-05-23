const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function setHeaderState() {
  header.dataset.elevated = window.scrollY > 12 ? "true" : "false";
}

navToggle.addEventListener("click", () => {
  const nextState = navLinks.dataset.open !== "true";
  navLinks.dataset.open = String(nextState);
  navToggle.setAttribute("aria-expanded", String(nextState));
  navToggle.setAttribute("aria-label", nextState ? "Close navigation" : "Open navigation");
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.dataset.open = "false";
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
