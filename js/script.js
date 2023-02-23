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
    console.log(event.currentTarget.getAttribute('href'))
    window.location.href = event.currentTarget.getAttribute('href');
  }

  const videos = [...document.querySelectorAll('video')];
  const romance = document.querySelector('.romance');
  romance.addEventListener('click', onLinkClick);
  videos.forEach(video => {
    video.addEventListener('mouseover', onMouseOver);
    video.addEventListener('mouseleave', onMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", init);
