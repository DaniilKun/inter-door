const images = document.querySelectorAll('.img__awards');
const shadow = document.querySelector('.shadow');
const exit = document.querySelector('.backImg');
const portret = document.querySelector('.portret');

images.forEach((image) => {
  image.addEventListener('click', () => {
    shadow.style.display = 'flex';
  });
});

exit.addEventListener('click', () => {
  shadow.style.display = 'none';
});


const imageBlocks = document.querySelectorAll(".image-block");

// Находим элемент, в который нужно вставить картинку
const portretImg = document.querySelector(".portretImg");

// Добавляем обработчик события клика на каждый элемент с классом "image-block"
imageBlocks.forEach(function(imageBlock) {
  imageBlock.addEventListener("click", function() {
    // Загружаем фоновое изображение текущего блока "image-block"
    var backgroundImageUrl = window.getComputedStyle(imageBlock.querySelector(".img__awards")).backgroundImage;
     // Получаем текст из элемента <p> текущего блока "image-block"
    var text = imageBlock.querySelector("p").textContent;
    // Устанавливаем это изображение в фон блока portretImg
    portretImg.style.backgroundImage = backgroundImageUrl;
    portretText.textContent = text;
  });
});

const portretText = document.querySelector('.portretText')