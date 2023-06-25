function getMaxCount(ingredientsListIndex) {
  if (ingredientsListIndex === 0 || ingredientsListIndex === 3) {
    return 1;
  } else {
    return 2;
  }
}

export function canAddIngredient(selectedIngredientsInList, ingredientsListIndex, ingredient) {
  const maxCount = getMaxCount(ingredientsListIndex);
  return (
    selectedIngredientsInList.length < maxCount && !selectedIngredientsInList.includes(ingredient)
  );
}
