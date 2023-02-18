function init() {
  const onMouseOver = event => {
    event.currentTarget.innerHTML='Hello';
  };

  const onMouseLeave = event => {
    console.log(event.currentTarget);
    event.currentTarget.innerHTML='Goodbye';
  };

  const texts = [...document.querySelectorAll('.text')];
  texts.forEach(text => {
    text.addEventListener('mouseover', onMouseOver);
    text.addEventListener('mouseleave', onMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", init);