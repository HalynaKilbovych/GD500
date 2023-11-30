const videoSwiper = new Swiper("#newVideoSwiper", {
    slidesPerView: 2,
  
    spaceBetween: 20,
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
