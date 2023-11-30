
const swiper = new Swiper("#newsSwiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".news-btn-next",
    prevEl: ".news-btn-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 2.4 },
    1600: { slidesPerView: 3 },
  },
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 0,
    slideShadows: true,
    depth: 5,
  },
});



