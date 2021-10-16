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
  let html = '';
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    html += `<div style="width: ${i * 10 + 30}px; height: ${
      i * 10 + 30
    }px; background-color: ${color}"></div>`;
  }
  console.log(html);
  boxesElem.insertAdjacentHTML('afterbegin', html);
}

destroyBtnElem.addEventListener('click', event => {
  boxesElem.innerHTML = '';
});
