// Navigation Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Active and Remove Menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Snackbar
function snackbar() {
    const bar = document.getElementById("snackbar");
    bar.className = "showSnackbar";
    setTimeout(function(){ bar.className = bar.className.replace("showSnackbar", ""); }, 3000);
}

// Init Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Scroll Reveal - Home
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 50})
sr.reveal('.home__img', {delay: 150})
sr.reveal('.home__social-icon', {interval: 50})

// Scroll Reveal - About
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 50})
sr.reveal('.about__text', {delay: 100})