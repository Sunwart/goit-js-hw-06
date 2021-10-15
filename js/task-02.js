const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.textContent = ingredients[i];
  listItem.classList.add('item');
  list.push(listItem);
}

document.querySelector('#ingredients').append(...list);
