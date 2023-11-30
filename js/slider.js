
const swiper = new Swiper("#newsSwiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 2.4 },
    1600: { slidesPerView: 3 },
  },
  spaceBetween: 40,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    slideShadows: true,
    depth: 5,
  },
});



