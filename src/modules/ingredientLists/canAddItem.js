function getMaxCount(ingredientsListIndex) {
  if (ingredientsListIndex === 0 || ingredientsListIndex === 3) {
    return 1;
  } else {
    return 2;
  }
}

export function canAddItem(selectedItemsInList, ingredientsListIndex, item) {
  const maxCount = getMaxCount(ingredientsListIndex);
  return (
    selectedItemsInList.length < maxCount && !selectedItemsInList.includes(item)
  );
}
