import { canAddIngredient } from "./canAddIngredient";

export function showCursorPointers(allSelectedIngredients) {
    const lists = document.getElementsByClassName("ingredientsLists");
    for (let i = 0; i < 4; i++) {
      const selectedIngredientsInList = allSelectedIngredients[i];
      const list = lists[i];
      [...list.children].forEach((ingredient) => {
        ingredient.style.cursor = canAddIngredient(selectedIngredientsInList, i, ingredient)
          ? "pointer"
          : "default";
      });
    }
  }