document.addEventListener("DOMContentLoaded", () => {
  // Navbar, Back to Top, Mobile Menu va boshqa elementlar
  const navbar = document.getElementById("navbar");
  const backToTopBtn = document.getElementById("backToTop");
  const hamburger = document.getElementById("hamburger");
  const mobileOverlay = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenu");
  const yearEl = document.getElementById("current-year");
  const subscribeBtn = document.getElementById("subscribe-btn");
  const emailInput = document.getElementById("newsletter-email");
  const searchBtn = document.querySelector(".search-btn");
  const searchModal = document.getElementById("search-modal");
  const searchClose = document.getElementById("search-close");
  const hiddenSections = document.querySelectorAll(
    ".section.hidden, .fade-section.hidden, .testimonial.hidden"
  );

  // Sticky Navbar + Back to Top
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle("scrolled", y > 40);
    if (backToTopBtn) backToTopBtn.classList.toggle("show", y > 300);
  });

  // Reveal Sections on Scroll
  function revealSections() {
    const trigger = window.innerHeight * 0.8;
    hiddenSections.forEach((el, i) => {
      if (
        el.getBoundingClientRect().top < trigger &&
        !el.classList.contains("visible")
      ) {
        el.style.transitionDelay = `${i * 0.15}s`;
        el.classList.add("visible");
        el.classList.remove("hidden");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();

  // Product Cards Observer
  const productCards = document.querySelectorAll(".product-card.hidden");
  if (productCards.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    productCards.forEach((card) => observer.observe(card));
  }

  // Mobile Menu (Fullscreen Overlay)
  const openMenu = () => {
    hamburger?.classList.add("open");
    mobileOverlay?.classList.add("open");
    document.body.classList.add("menu-open");
    hamburger?.setAttribute("aria-expanded", "true");
    mobileOverlay?.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    hamburger?.classList.remove("open");
    mobileOverlay?.classList.remove("open");
    document.body.classList.remove("menu-open");
    hamburger?.setAttribute("aria-expanded", "false");
    mobileOverlay?.setAttribute("aria-hidden", "true");
  };

  hamburger?.addEventListener("click", openMenu);
  closeMenuBtn?.addEventListener("click", closeMenu);

  mobileOverlay?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Current Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Back to Top
  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Newsletter Subscribe
  subscribeBtn?.addEventListener("click", () => {
    const email = emailInput?.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      alert("Iltimos, to‘g‘ri email manzilini kiriting.");
      return;
    }
    alert(`Obuna uchun rahmat, ${email}!`);
    if (emailInput) emailInput.value = "";
  });

  // Search Modal
  searchBtn?.addEventListener("click", () => {
    searchModal?.classList.add("open");
  });
  searchClose?.addEventListener("click", () => {
    searchModal?.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchModal?.classList.remove("open");
      closeMenu();
      // Product modalni ham yopish
      document.getElementById('product-modal')?.classList.remove('open');
    }
  });

  // Responsive Reset
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });

  // Partners Carousel: Lazy Reveal Animation
  const partners = document.querySelector('.partners-carousel');
  if (partners) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            partners.classList.add('visible');
            obs.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    observer.observe(partners);
  }

  // ======= PRODUCT CARD MODAL =======
  // Modal HTML bo'lishi shart:
  // <div id="product-modal" class="product-modal">
  //   <div class="modal-content">
  //     <span class="modal-close">&times;</span>
  //     <h2 id="modal-title"></h2>
  //     <p id="modal-desc"></p>
  //   </div>
  // </div>
  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.querySelector('.modal-close');

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function () {
      if (!modal) return;
      modalTitle.textContent = card.dataset.title || '';
      modalDesc.textContent = card.dataset.desc || '';
      modal.classList.add('open');
    });
  });

  modalClose?.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });
});