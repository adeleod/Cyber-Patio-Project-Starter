function init() {
  const onMouseOver = event => {
    event.currentTarget.play();
  };

  const onMouseLeave = event => {
    event.currentTarget.pause();
  };

  const sound = document.querySelector('audio');

  function onLinkClick(event) {
    event.preventDefault();
    sound.play();
  }

  const videos = [...document.querySelectorAll('video')];
  const romance = [...document.querySelectorAll('.skeleton')];
  videos.forEach(video => {
    video.addEventListener('mouseover', onMouseOver);
    video.addEventListener('mouseleave', onMouseLeave);
    romance.forEach(romance => romance.addEventListener('click', onLinkClick));
  });
}

document.addEventListener("DOMContentLoaded", init);
