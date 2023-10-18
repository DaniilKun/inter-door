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
  