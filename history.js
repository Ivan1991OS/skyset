// Timeline animatsiyasi (agar timeline-item ishlatilsa)
function revealTimeline() {
  document.querySelectorAll('.timeline-item').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealTimeline);
window.addEventListener('DOMContentLoaded', revealTimeline);

// Footer yil avtomatik
const yearEl = document.getElementById("current-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hamburger menu funksiyasi
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
}
window.closeMobile = function() {
  if (mobileMenu && hamburger) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
};

// Mobil menyudan link bosilganda menyuni yopish
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    window.closeMobile();
  });
});

// Newsletter form submit (footer)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input[type="email"]');
    if (input && input.value) {
      input.value = '';
      input.placeholder = 'Thank you!';
    }
  });
}