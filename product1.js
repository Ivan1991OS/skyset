document.addEventListener("DOMContentLoaded", () => {
  // ===== Navbar + Back to Top =====
  const navbar = document.getElementById("navbar");
  const backToTopBtn = document.getElementById("backToTop");
  const hamburger = document.getElementById("hamburger");
  const mobileOverlay = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const yearEl = document.getElementById("current-year");

  // Sticky Navbar + Back to Top
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    navbar?.classList.toggle("scrolled", y > 40);
    backToTopBtn?.classList.toggle("show", y > 300);
  });

  // Back to Top tugmasi
  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Footer yili
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Mobile Menu =====
  const openMenu = () => {
    hamburger?.classList.add("open");
    mobileOverlay?.classList.add("open");
    document.body.classList.add("menu-open");
  };
  const closeMenu = () => {
    hamburger?.classList.remove("open");
    mobileOverlay?.classList.remove("open");
    document.body.classList.remove("menu-open");
  };
  hamburger?.addEventListener("click", openMenu);
  closeMenuBtn?.addEventListener("click", closeMenu);
  mobileOverlay?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Escape bosganda menyuni yopish
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // Responsive reset
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#") && targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
