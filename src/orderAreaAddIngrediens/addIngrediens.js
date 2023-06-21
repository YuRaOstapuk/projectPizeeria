// Тут я получаю элементы которые будут взаимодействовать
// const ingredients = document.querySelectorAll(".ingredients");
// const orderList = document.getElementById("orderedItemslist");
// // Добавляю обработчик события для каждого ингредиента
// ingredients.forEach(ingredient => {
//     ingredient.addEventListener('click', () => {
//       // Создаем новый элемент списка
//       const listItem = document.createElement('li');
//       listItem.textContent = ingredient.textContent;
//       listItem.className = 'orderedItems';
  
//       // Добавляем выбранный ингредиент в список заказанных ингредиентов
//       orderList.appendChild(listItem);
//     });
//   });
function handleIngredientClick(event) {
    const selectedIngredient = event.target.textContent;
    const orderList = document.getElementById('orderedItemsList');
  
    const listItem = document.createElement('li');
    listItem.textContent = selectedIngredient;
    listItem.className = 'orderedItems';
  
    orderList.appendChild(listItem);
  }
  
  const ingredients = document.querySelectorAll('.ingredients');
  ingredients.forEach(ingredient => {
    ingredient.addEventListener('click', handleIngredientClick);
  });

export default orderArea;
