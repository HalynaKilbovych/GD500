(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      body: document.querySelector('body'),
      // menuList: document.querySelector('.mob-menu__nav'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    // refs.menuList.addEventListener('click', removeMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }

  })();




  document.addEventListener('DOMContentLoaded', function () {
    
  
    // Додаємо подію на клік по картинці в слайді
    document.querySelectorAll('.swiper-slide').forEach(function (slide) {
      slide.addEventListener('click', function () {
        var videoSrc = slide.querySelector('.video-thumbnail').getAttribute('data-src');
        playVideo(videoSrc);
      });
    });
  
    // Функція для відтворення відео
    function playVideo(src) {
      // Отримуємо контейнер відео
      var videoContainer = document.getElementById('video-container');
  
      // Встановлюємо відео
      videoContainer.innerHTML = '<video controls width="600" height="400" id="video"><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video>';
  
      // Приховуємо інші слайди
      document.querySelectorAll('.swiper-slide').forEach(function (slide) {
        slide.style.display = 'none';
      });
  
      // Відображаємо контейнер відео
      videoContainer.style.display = 'block';
    }
  });