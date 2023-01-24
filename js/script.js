function init() {
  const dialog = document.querySelector('dialog');
  const close = document.querySelector('.close');

  function onCloseClick() {
    dialog.innerHTML = '';
    dialog.style.display = 'none';
    close.style.display = 'none';
  }
  
  
  function onImageClick(event) {
    
    const src = event.currentTarget.getAttribute('src');
    const img = new Image();
  
    img.onload = function() {
      dialog.innerHTML = `<img src="${img.src}" />`; 
      dialog.style.display = 'flex';
    };
  
    img.src = src;

    close.style.display = 'block';
  }

  function onVideoClick(event) {
    const src = event.currentTarget.querySelector('source').getAttribute('src');
    const video = new Video();

    video.onload = function() {
      dialog.innerHTML = `<video autoplay loop muted playsInLine><source src="video/1.mp4" type></video>`;
    }
  }
  
  function addEventListeners() {
    const videos = [...document.querySelectorAll('video')];
    const images = [...document.querySelectorAll('img')];
    images.forEach(image => image.addEventListener('click', onImageClick));
    videos.forEach(image => image.addEventListener('click', onVideoClick));
    close.addEventListener('click', onCloseClick);
  }
 
  addEventListeners();
}

document.addEventListener("DOMContentLoaded", init);