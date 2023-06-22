const ingredientsLists = document.querySelectorAll('.ingredientsLists');
const selectedIngredients = {};


ingredientsLists.forEach(list => {
  const ingredients = list.querySelectorAll('.ingredients');

  ingredients.forEach(ingredient => {
    ingredient.addEventListener('click', () => {
      const ingredientId = ingredient.id;
      const selectedListId = list.id;

      // Проверка , сколько элементов выбранно из списка
      const selectedCount = Object.values(selectedIngredients).filter(id => id === selectedListId).length;
      
      // проверка на общую сумму выбранных инргедиентов  !
      const totalCount = Object.keys(selectedIngredients).length;

      // Проверка был ли выбран ингредиент из списка
      if (selectedIngredients[ingredientId] !== selectedListId && selectedCount < 2 && totalCount < 2) {
        // Удаляем предыдущий выбранный ингредиент из списка заказа (если есть)
        const orderList = document.getElementById('orderedItemsList');
        const existingItem = orderList.querySelector(`li[data-list="${selectedListId}"]`);
        if (existingItem) {
          existingItem.remove();
        }
        
        // Создаем новый элемент списка
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.textContent;
        listItem.className = 'orderedItems';
        listItem.setAttribute('data-list', selectedListId);
        
        // Add ингридиента в список
        orderList.appendChild(listItem);
        
        // Обновление
        selectedIngredients[ingredientId] = selectedListId;
      }
    });
  });
});
//Пробная логика для тех списков инргедиентов ! где их нужно выбрать 2 
//Посоветоваться с Владом и Надей по поводу напсанного кода
//Посоветоваться по поводу экспорта и импорта
//Разобраться по неймингу ingredientsLists 
//Спросить у Нади как все эьто правильно делаеться  , есть недопонимание в этом вопросе
//