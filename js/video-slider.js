const videoSwiper = new Swiper("#newVideoSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".video-btn-next",
      prevEl: ".video-btn-prev",
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
    },
  });

