let counterValue = 0;

const decrementButton = document.querySelector(['button[data-action="decrement"]']);
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
});

const incrementButton = document.querySelector(['button[data-action="increment"]']);
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
});
