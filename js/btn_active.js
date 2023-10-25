var inactivityTime = 420; // 7 минуты в секундах
  var redirectUrl = '/index.html'; // абсолютный путь к index.html

  var timeout;

  function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(redirect, inactivityTime * 1000);
  }

  function redirect() {
    // Проверяем, не находимся ли мы уже на странице index.html
    if (window.location.pathname !== redirectUrl) {
      // Если нет, перенаправляем пользователя на абсолютный путь к index.html
      window.location.href = redirectUrl;
    }
  }

  // Сбрасываем таймер при каждом действии пользователя
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);
  document.addEventListener('scroll', resetTimer); // Добавили обработчик события скролла
  document.addEventListener('touchstart', resetTimer); // Обработка начала касания
  document.addEventListener('touchmove', resetTimer);  // Обработка движения пальцев по экрану


  // Запускаем таймер при загрузке страницы
  resetTimer();



const active_btns = document.querySelectorAll("#btn_title");

for (const btn of active_btns) {
    btn.addEventListener("click", () => {
      clearActiveClasses(active_btns);
      btn.classList.add("active_btn");
      console.log('yes');
    });
  }
  function clearActiveClasses(btns) {
    for (const btn of btns) {
      btn.classList.remove("active_btn");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video-background");

    // Проверяем, поддерживается ли localStorage
    if (typeof(Storage) !== "undefined") {
      // Получаем сохраненное время воспроизведения из localStorage
      var savedTime = localStorage.getItem("videoTime");

      // Устанавливаем сохраненное время воспроизведения (если оно есть)
      if (savedTime !== null) {
        video.currentTime = parseFloat(savedTime);
      }

      // Сохраняем текущее время воспроизведения в localStorage при изменении
      video.addEventListener("timeupdate", function() {
        localStorage.setItem("videoTime", video.currentTime.toString());
      });
      
    }
  });
  