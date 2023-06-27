import { updateUI } from "@modules/updateUI/updateUI";
import { addSelectedIngredient } from "@modules/orderArea/addSelectedIngredient";
import { canAddIngredient } from "./canAddIngredient";

export function handleIngredientClick(ingredient, allSelectedIngredients) {
    if (document.getElementById('modalWindow')) {
      return;
    }
    const list = ingredient.parentElement;
    const lists = document.getElementsByClassName("ingredientsLists");
    const ingredientsListIndex = [...lists].indexOf(list);
  
    const selectedIngredientsInList =
      allSelectedIngredients[ingredientsListIndex];
  
    if (
      canAddIngredient(
        selectedIngredientsInList,
        ingredientsListIndex,
        ingredient
      )
    ) {
      selectedIngredientsInList.push(ingredient);
      addSelectedIngredient(
        ingredient,
        allSelectedIngredients,
        ingredientsListIndex
      );
      ingredient.style.color = "rgba(133, 165, 0, 1)";
      updateUI(allSelectedIngredients);
    }
  }
  