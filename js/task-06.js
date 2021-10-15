const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', event => {
  if (event.currentTarget.value.length !== Number(inputElem.dataset.length)) {
    inputElem.classList.remove('valid');
    inputElem.classList.add('invalid');
  } else {
    inputElem.classList.remove('invalid');
    inputElem.classList.add('valid');
  }
});
