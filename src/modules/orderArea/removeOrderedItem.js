import { showPizzaSlice } from "../pizzaImage/showPizzaSlice";
import { showCursorPointers } from "../ingredientLists/showCursorPointers";

export function removeOrderedItem(
    item,
    orderedItem,
    allSelectedItems,
    ingredientsListIndex
  ) {
    orderedItem.remove();
    item.style.color = null;
    allSelectedItems[ingredientsListIndex] = allSelectedItems[
      ingredientsListIndex
    ].filter((a) => a !== item);
    showPizzaSlice(allSelectedItems);
    showCursorPointers(allSelectedItems);
  }