export function setOrderButton(allSelectedIngredients) {
  const button = document.getElementById("orderButton");

  const isAllSelected = allSelectedIngredients.every(
    (selectedIngredientsInList) => selectedIngredientsInList.length > 0
  );

  button.style.opacity = isAllSelected ? 1 : 0.3;
  button.style.cursor = isAllSelected ? "pointer" : "default";
  button.disabled = !isAllSelected;
}
