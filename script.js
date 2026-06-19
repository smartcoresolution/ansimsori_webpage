const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".nav a");
const faqButtons = document.querySelectorAll(".faq-list button");

menuToggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "메뉴 열기");
  });
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
