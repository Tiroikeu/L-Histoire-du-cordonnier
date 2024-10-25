document.addEventListener("DOMContentLoaded", function () {
  const triggerElement = document.querySelector('.trigger');
  const mediaElement = document.querySelector('#media');

  triggerElement.addEventListener('click', function () {
    if (mediaElement.paused) {
      mediaElement.play();
    } else {
      mediaElement.pause();
    }
    //optionel, desactive le detecteur après usage
    triggerElement.classList.remove('play-trigger');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const triggerElement = document.querySelector('.trigger');
  const mediaElement = document.querySelector('#media');

  triggerElement.addEventListener('click', function () {
    if (mediaElement.paused) {
      mediaElement.play();
    } else {
      mediaElement.pause();
    }
    //optionel, desactive le detecteur après usage
    triggerElement.classList.remove('play-trigger');
  });
});