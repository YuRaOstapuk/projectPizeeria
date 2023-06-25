
function handleIngredientClick(event) {
    const clickedItem = event.target;
    if (clickedItem.tagName === 'SPAN') {
      clickedItem.classList.toggle('selected');
      checkOrderCompletion();
    }
  }
  
  // 6 элементов или нет
  function checkOrderCompletion() {
    const selectedIngredients = document.querySelectorAll('.ingredientsLists .selected');
    const orderButton = document.getElementById('orderButton');
  
    if (selectedIngredients.length === 6) {
      orderButton.disabled = false;
    } else {
      orderButton.disabled = true;
    }
  }
  
  
  function handleOrderButtonClick() {
    const selectedIngredients = document.querySelectorAll('.ingredientsLists .selected');
  
    if (selectedIngredients.length === 6) {
      const order = {
        base: selectedIngredients[0].textContent.trim(),
        topping1: selectedIngredients[1].textContent.trim(),
        topping1: selectedIngredients[2].textContent.trim(),
        topping2: selectedIngredients[3].textContent.trim(),
        topping2: selectedIngredients[4].textContent.trim(),
        sauce: selectedIngredients[5].textContent.trim()
      };
  
      console.log(order);
    }
  }
  
 
  function setupEventHandlers() {
    const ingredientsLists = document.querySelectorAll('.ingredientsLists');
    const orderButton = document.getElementById('orderButton');
  
    ingredientsLists.forEach(list => {
      list.addEventListener('click', handleIngredientClick);
    });
  
    orderButton.addEventListener('click', handleOrderButtonClick);
  }