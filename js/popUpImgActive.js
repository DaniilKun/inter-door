
  const images = document.querySelectorAll('.img__awards');
  const shadow = document.querySelector('.shadow');
  const exit = document.querySelector('.backImg');
  const portretImg = document.querySelector(".portretImg");
  const portretText = document.querySelector('.portretText');

  // Инициализируем звуковой объект с использованием Howler.js для открытия
  const openSound = new Howl({
    src: ['../img/ui_click.mp3']
  });

  

  images.forEach((image) => {
    image.addEventListener('click', () => {
      // Воспроизводим звук при открытии
      openSound.play();

      // Показываем теневой блок
      shadow.style.display = 'flex';
    });
  });

  exit.addEventListener('click', () => {
   
    // Скрываем теневой блок
    shadow.style.display = 'none';
  });

  const imageBlocks = document.querySelectorAll(".image-block");

  imageBlocks.forEach(function(imageBlock) {
    imageBlock.addEventListener("click", function() {
      var backgroundImageUrl = window.getComputedStyle(imageBlock.querySelector(".img__awards")).backgroundImage;
      var text = imageBlock.querySelector("p").textContent;
      portretImg.style.backgroundImage = backgroundImageUrl;
      portretText.textContent = text;
    });
  });

