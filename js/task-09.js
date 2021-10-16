function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector('body');
const colorValueElem = document.querySelector('.color');
const changeColorButtonElem = document.querySelector('.change-color');

changeColorButtonElem.addEventListener('click', event => {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  colorValueElem.textContent = color;
});
