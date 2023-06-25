import { showPizzaSlice } from "@modules/pizzaSection/showPizzaSlice";
import { showCursorPointers } from "@modules/ingredientLists/showCursorPointers";
import { updateTotalPrice } from "@modules/orderArea/updateTotalPrice";
import { setOrderButton } from "@modules/pizzaSection/setOrderButton";

export function updateUI(allSelectedIngredients) {
    showPizzaSlice(allSelectedIngredients);
    showCursorPointers(allSelectedIngredients);
    updateTotalPrice(allSelectedIngredients);
    setOrderButton(allSelectedIngredients);
}