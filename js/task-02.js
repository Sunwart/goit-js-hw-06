const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = [];

ingredients.map(element => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  listItem.classList.add('item');
  list.push(listItem);
});

document.querySelector('#ingredients').append(...list);
