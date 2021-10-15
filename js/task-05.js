const nameInputElem = document.querySelector('#name-input');
const nameOutputElem = document.querySelector('#name-output');

nameInputElem.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    nameOutputElem.textContent = 'Anonymous';
  } else {
    nameOutputElem.textContent = event.currentTarget.value;
  }
});
