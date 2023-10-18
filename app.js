document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  const iframe = document.getElementById("myIframe");

  // Функция, которая будет выполнена при клике на элемент <p>
  const handleClick = (event) => {
    event.preventDefault();
    video.style.zIndex = 200;
    video.play();
    setTimeout(() => {
      iframe.src = "biography.html";
      iframe.style.zIndex = 100;
    }, 1500);
    setTimeout(() => {
      video.style.zIndex = -1;
    }, 4000);
  };

  // Назначаем обработчик события клика на элемент <p>
  const paragraph = document.getElementById("myParagraph");
  paragraph.addEventListener("click", handleClick);
});
