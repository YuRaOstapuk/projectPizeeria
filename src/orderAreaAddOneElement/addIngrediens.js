// // Тут я получаю элементы которые будут взаимодействовать
// const ingredients = document.querySelectorAll(".ingredients");
// const orderList = document.getElementById("orderedItemslist");
// // Добавляю обработчик события для каждого ингредиента
// ingredients.forEach(ingredient => {
//     ingredient.addEventListener('click', () => {
//       // Создаю new элемент списка
//       const listItem = document.createElement('li');
//       listItem.textContent = ingredient.textContent;
//       listItem.className = 'orderedItemsList';
  
//       // Добавляю выбранный ингредиент в список заказанных ингредиентов
//       orderItemsList.appendChild(listItem);
//     });
//   });


// export default orderArea;
const ingredientsLists = document.querySelectorAll('.ingredientsLists');

// Обьект для отслеживания элементов добавленных
const selectedIngredients = {};

// обработчик событий
ingredientsLists.forEach(list => {
  const ingredients = list.querySelectorAll('.ingredients');
  
  ingredients.forEach(ingredient => {
    ingredient.addEventListener('click', () => {
      const ingredientId = ingredient.id;
      
      // Проверяем, был ли уже выбран ингредиент из данного списка
      if (selectedIngredients[list.id] !== ingredientId) {
        // Удаляем предыдущий выбранный ингредиент из списка заказа (если есть)
        const orderList = document.getElementById('orderedItemsList');
        const existingItem = orderList.querySelector(`li[data-list="${list.id}"]`);
        if (existingItem) {
          existingItem.remove();
        }
        
        // тут создаю новый элемент списка
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.textContent;
        listItem.className = 'orderedItems';
        listItem.setAttribute('data-list', list.id);
        
        // добавляю выбранный эдемент в спосок заказов
        orderList.appendChild(listItem);
        
        // Обновляем выбранный ингредиент для данного списка
        selectedIngredients[list.id] = ingredientId;
      }
    });
  });
});