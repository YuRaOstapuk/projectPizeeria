import styles from "@modules/pizzaSection/pizzaSection.module.scss";

export function setOrderButton(allSelectedIngredients) {
  const button = document.getElementById("orderButton");

  const isAllSelected = allSelectedIngredients.every(
    (selectedIngredientsInList) => selectedIngredientsInList.length > 0
  );

  button.disabled = !isAllSelected;
  if (isAllSelected) {
    button.classList.add(styles.buttonEnabled)
  } else {
    button.classList.remove(styles.buttonEnabled)
  }
}
