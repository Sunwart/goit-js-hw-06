const categoriesElem = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach(category => {
  console.log('Category: ', category.querySelector('h2').textContent);
  console.log('Elements: ', category.querySelectorAll('li').length);
});
