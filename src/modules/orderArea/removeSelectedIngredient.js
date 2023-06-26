import { updateUI } from "@modules/updateUI/updateUI";

export function removeSelectedIngredient(
    ingredient,
    selectedIngredient,
    allSelectedIngredients,
    ingredientsListIndex
  ) {
    selectedIngredient.remove();
    ingredient.style.color = null;
    allSelectedIngredients[ingredientsListIndex] = allSelectedIngredients[
      ingredientsListIndex
    ].filter((a) => a !== ingredient);
    updateUI(allSelectedIngredients);
  }