function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputElem = document.querySelector('input');
const createBtnElem = document.querySelector('button[data-create]');
const destroyBtnElem = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

let amount = 0;

inputElem.addEventListener('input', event => {
  amount = event.currentTarget.value;
});

createBtnElem.addEventListener('click', event => {
  createBoxes(amount);
});

function createBoxes(amount) {
  let boxSize = 30;
  const currentBoxesNumber = boxesElem.querySelectorAll('div').length;
  if (currentBoxesNumber > 0) {
    boxSize = Number.parseInt(boxesElem.lastChild.style.width);
  }
  let html = '';
  for (let i = 0; i < amount - currentBoxesNumber; i += 1) {
    const color = getRandomHexColor();
    html += `<div style="width: ${i * 10 + 10 + boxSize}px; height: ${
      i * 10 + 10 + boxSize
    }px; background-color: ${color}"></div>`;
  }
  boxesElem.insertAdjacentHTML('beforeend', html);
}

destroyBtnElem.addEventListener('click', event => {
  boxesElem.innerHTML = '';
});
