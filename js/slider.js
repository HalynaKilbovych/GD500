// Створення інстансу Swiper для слайдера новин
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

const videoSwiper = new Swiper("#newVideoSwiper", {
  slidesPerView: 2,
<<<<<<< Updated upstream
  effect: "coverflow",
  spaceBetween: 20,
  loop: true,

=======
  spaceBetween: 20,
>>>>>>> Stashed changes
  navigation: {
    nextEl: ".video-swiper-button-next",
    prevEl: ".video-swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 0,
    slideShadows: true,
    depth: 5,
  },
});

document
  .querySelectorAll(".video-thumbnail")
  .forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      var videoSrc = thumbnail.getAttribute("data-src");
      playVideo(videoSrc, index);
    });
  });

function playVideo(src, index) {
  var videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML =
    '<video controls width="600" height="400" id="video"><source src="' +
    src +
    '" type="video/mp4">Your browser does not support the video tag.</video>';
  videoContainer.style.display = "block";
  videoSwiper.slideTo(index);
}
