/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
navToggle.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
});
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});
/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart");
const cartShop = document.getElementById("cart-shop");
const cartClose = document.getElementById("cart-close");
/*===== CART SHOW =====*/
/* Validate if constant exists */
// if(cartShop) {
//   cartShop.addEventListener('click', () => {
//     cart.classList.add('show-cart')
//   })
// }
// /*===== CART HIDDEN =====*/
// /* Validate if constant exists */
// if (cartClose) {
//   cartClose.addEventListener("click", () => {
//     cart.classList.remove("show-cart");
//   });
// }

/*===== CART SHOW =====*/
// /* Validate if constant exists */
cartShop.addEventListener("click", function () {
  cart.classList.add("show-cart");
});
// /*===== CART HIDDEN =====*/
// /* Validate if constant exists */
cartClose.addEventListener("click", function () {
  cart.classList.remove("show-cart");
});

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById("login");
const loginToggle = document.getElementById("login-toggle");
const loginClose = document.getElementById("login-close");

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
loginToggle.addEventListener("click", function () {
  login.classList.add("show-login");
});

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
loginClose.addEventListener("click", function () {
  login.classList.remove("show-login");
});

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
});

/*=============== SHOW SCROLL UP ===============*/
// function scrollUp() {
//   const scrollUp = document.getElementById("scroll-up");
//   //when the scroll is higher than 350 viewport height, add the show-scroll class
//   if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }

// window.addEventListener("scroll", scrollUp);

const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", function () {
  if (scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else scrollUp.classList.remove("show-scroll");
});

/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".questions__item.accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style__switcher").classList.toggle("open");
});

//HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
  if (document.querySelector(".style__switcher").classList.contains("open")) {
    document.querySelector(".style__switcher").classList.toggle("open");
  }
});
