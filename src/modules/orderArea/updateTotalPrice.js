import { ingredientsPrices } from "@modules/ingredientLists/ingredientsPrices";

export function updateTotalPrice (allSelectedIngredients) {

    let totalPrice = allSelectedIngredients.flatMap(a => a)
        .map(ingredient => ingredientsPrices[ingredient.textContent])
        .reduce((price1, price2) => price1 + price2, 0);

    document.getElementById('priceValue').textContent = `$${totalPrice.toFixed(2)}`;
}