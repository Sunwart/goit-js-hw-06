const rangeInpurElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');

rangeInpurElem.addEventListener('input', event => {
  textElem.style.fontSize = `${event.currentTarget.value}px`;
});
