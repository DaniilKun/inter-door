const videos = document.querySelectorAll('.video12');

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  loop: true,
  mousewheel: true,
  keyboard: true,
  on: {
    slideChange: () => handleSlideChange(),
    transitionEnd: () => handleTransitionEnd(),
  },
});

//прием id из localstorege и открытие нужной картинки в слайдере
let start = localStorage.getItem("SLIDE_ID")
console.log(start);
swiper.slideTo(start, 10, true);

function handleSlideChange() {
  pauseVideos();
}

function handleTransitionEnd() {
  // Ничего не делаем, не вызываем playCurrentVideo()
}

function pauseVideos() {
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
}