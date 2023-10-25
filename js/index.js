const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  loop:true,
  mousewheel: true,
  keyboard: true,
});

//прием id из localstorege и открытие нужной картинки в слайдере
let start = localStorage.getItem("SLIDE_ID")
console.log(start);
swiper.slideTo( start , 10 ,true )


const videos = document.querySelectorAll('.video12');
const buttons = document.querySelectorAll('.prev, .next');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
