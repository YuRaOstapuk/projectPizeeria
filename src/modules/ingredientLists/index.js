import styles from "./ingredients.module.scss";
import addClassById from "@modules/addingClasses/addClassById";
import addClassByClassName from "@modules/addingClasses/addClassByClassName";

import { showCursorPointers } from "./showCursorPointers";
import { handleIngredientClick } from "./handleIngredientClick";

addClassById("ingredientsArea", styles.ingredientsArea);
addClassById("ingredientsLists", styles.ingredientsLists);
addClassByClassName("ingredientsTitles", styles.ingredientsTitles);
addClassByClassName("titleDeviders", styles.titleDeviders);
addClassByClassName("ingredientsLists", styles.ingredientsLists);
addClassByClassName("ingredients", styles.ingredients);
addClassByClassName("ingredientsBlock", styles.ingredientsBlock);
addClassByClassName("markers", styles.markers);

export function setupIngredientsLists() {
  const allSelectedIngredients = [[], [], [], []];

  const lists = document.getElementsByClassName("ingredientsLists");
  for (let i = 0; i < 4; i++) {
    [...lists[i].children].forEach((li) =>
      li.addEventListener("click", e => handleIngredientClick(e.target, allSelectedIngredients))
    );
  }

  showCursorPointers(allSelectedIngredients);
}
