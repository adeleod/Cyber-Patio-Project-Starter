function init() {
  const onMouseOver = event => {
    event.currentTarget.play();
  };

  const onMouseLeave = event => {
    event.currentTarget.pause();
  };

  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => {
    video.addEventListener('mouseover', onMouseOver);
    video.addEventListener('mouseleave', onMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", init);
