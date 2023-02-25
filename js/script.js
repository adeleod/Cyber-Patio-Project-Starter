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
    const link = event.currentTarget.getAttribute('href');
    setTimeout(function () {
      window.location.href = link;
    }, 1500);
  }

  const videos = [...document.querySelectorAll('video')];
  const romance = document.querySelector('.romance');
  romance.addEventListener('click', onLinkClick);
  romance.addEventListener('click', onLinkClick);
  videos.forEach(video => {
    video.addEventListener('mouseover', onMouseOver);
    video.addEventListener('mouseleave', onMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", init);
