import { canAddItem } from "./canAddItem";

export function showCursorPointers(allSelectedItems) {
    const lists = document.getElementsByClassName("ingredientsLists");
    for (let i = 0; i < 4; i++) {
      const selectedItemsInList = allSelectedItems[i];
      const list = lists[i];
      [...list.children].forEach((item) => {
        item.style.cursor = canAddItem(selectedItemsInList, i, item)
          ? "pointer"
          : "default";
      });
    }
  }