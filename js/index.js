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

