// Galereya: thumbnail bosilganda katta rasmni almashtirish
function changeImage(el) {
  document.getElementById("mainImage").src = el.src;
}

// Savatga qo‘shish
let cartCount = 0;
document.querySelector(".add-cart").addEventListener("click", () => {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert("Mahsulot savatga qo‘shildi ✅");
});

// Modal forma
const modal = document.querySelector(".modal");
const orderBtn = document.querySelector(".order");
const closeBtn = document.querySelector(".close");

orderBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
