// Инициализируем звуковой объект с использованием Howler.js
const buttonClickSound = new Howl({
    src: ['./img/ui_click.mp3']
  });

  // Находим все кнопки на странице
  const buttons = document.querySelectorAll('.sound');

  // Добавляем обработчик события клика на каждую кнопку
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Отменяем стандартное действие формы, чтобы предотвратить переход по атрибуту action
      event.preventDefault();

      // Воспроизводим звук при клике на кнопку
      buttonClickSound.play();

      // Получаем значение атрибута "action" из формы, к которой привязана кнопка
      const nextPageUrl = button.closest('form').getAttribute('action');

      // Переход на следующую страницу
      setTimeout(() => {
        window.location.href = nextPageUrl;
      }, 500); // Измените значение задержки по необходимости
    });
  });