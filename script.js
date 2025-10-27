// === NAVIGATION ACTIVE LINK ON SCROLL ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

// === MOBILE MENU TOGGLE ===
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
  menuToggle.classList.toggle("open");
  menuToggle.innerHTML = menuToggle.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll("#navbar a").forEach(link =>
  link.addEventListener("click", () => {
    navbar.classList.remove("show-menu");
    menuToggle.classList.remove("open");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  })
);

// === SCROLL-TRIGGERED ANIMATIONS ===
const elements = document.querySelectorAll(
  "section, .glow-card, .timeline-item, .project-card, .edu-card"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
