 export const INGREDIENTS_PRICE = [
  { productName: "Thin crust", price: 2 },
  { productName: "Thick crust", price: 2 },
  { productName: "Stuffed crust", price: 2 },
  { productName: "Gluten-free", price: 2 },
  { productName: "Pepperoni", price: 2 },
  { productName: "Mushrooms", price: 2 },
  { productName: "Bell peppers", price: 2 },
  { productName: "Tomatoes", price: 2 },
  { productName: "Mozzarella", price: 2 },
  { productName: "Parmesan", price: 2 },
  { productName: "Olives", price: 2 },
  { productName: "Garlic", price: 2 },
  { productName: "Marinara", price: 2 },
  { productName: "BBQ", price: 2 },
  { productName: "Pesto", price: 2 },
  { productName: "Alfredo", price: 2 },
];
 export function getPriceByIngredient(ingredientName) {
  const ingredient = INGREDIENTS_PRICE.find(item => item.productName === ingredientName);
  return ingredient ? ingredient.price : null;
};
 export function updateOrderPrice() {
  const orderedItems = document.querySelectorAll('.orderedItems');
  let totalPrice = 0;

  orderedItems.forEach(item => {
    const ingredientName = item.dataset.ingredient;
    const ingredientPrice = getPriceByIngredient(ingredientName);

    if (ingredientPrice !== null) {
      totalPrice += ingredientPrice;
    }
  });

  const priceValueElement = document.getElementById('priceValue');
  priceValueElement.textContent = '$' + totalPrice;
}

// Функция  обновления цены заказа при изменении выбранных ингредиентов
 export function setupOrderPriceUpdate() {
  const orderedItems = document.querySelectorAll('.orderedItems');

  orderedItems.forEach(item => {
    item.addEventListener('click', () => {
      updateOrderPrice();
    });
  });
}