import styles from "./orderArea.module.scss";
import icon from "@src/assets/icon.png";
import { removeSelectedIngredient } from "@modules/orderArea/removeSelectedIngredient";

export function addSelectedIngredient(ingredient, allSelectedIngredients, ingredientsListIndex) {
  const selectedIngredientsList = document.getElementById("selectedIngredientsList");

  const selectedIngredient = document.createElement("li");
  selectedIngredientsList.appendChild(selectedIngredient);
  selectedIngredient.className = styles.selectedIngredients;

  const selectedIngredientText = document.createElement("span");
  selectedIngredient.appendChild(selectedIngredientText);
  selectedIngredientText.innerText = ingredient.innerText;
  selectedIngredientText.className = styles.selectedIngredientName;

  const selectedIngredientButton = document.createElement("button");
  selectedIngredient.appendChild(selectedIngredientButton);
  selectedIngredientButton.className = styles.removeButton;

  const selectedIngredientImg = document.createElement("img");
  selectedIngredientButton.appendChild(selectedIngredientImg);
  selectedIngredientImg.src = icon;
  selectedIngredientImg.className = styles.removeButtonImg;

  selectedIngredientButton.addEventListener("click", (e) =>
    removeSelectedIngredient(ingredient, selectedIngredient, allSelectedIngredients, ingredientsListIndex)
  );
}
