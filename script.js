document.addEventListener("DOMContentLoaded", fonction () {
    const triggerElement = document.querySelector('.trigger');
    const mediaElement = document.querySelector('#media');
 
    triggerElement.addEventListener('clic', fonction () {
      si (mediaElement.paused) {
        mediaElement.play();
      } autre {
        mediaElement.pause();
      }
      //optionnel, désactivez le détecteur après utilisation
      triggerElement.classList.remove('play-trigger');
    });
  });