import { showPizzaSlice } from "../pizzaImage/showPizzaSlice";
import { showCursorPointers } from "./showCursorPointers";
import { removeOrderedItem } from "../orderArea/removeOrderedItem";
import { canAddItem } from "./canAddItem";
import styles from "../../index.module.scss";
import icon from "../../assets/icon.png";

export function addIngredientsToOrderedItems() {
  const allSelectedItems = [[], [], [], []];

  function updateOrderedItemsList(item, ingredientsListIndex) {
    const orderedItemsList = document.getElementById("orderedItemsList");

    const orderedItem = document.createElement("li");
    orderedItemsList.appendChild(orderedItem);
    orderedItem.className = styles.orderedItems;

    const orderedItemText = document.createElement("span");
    orderedItem.appendChild(orderedItemText);
    orderedItemText.innerText = item.innerText;
    orderedItemText.className = styles.orderedItemName;

    const orderedItemButton = document.createElement("button");
    orderedItem.appendChild(orderedItemButton);
    orderedItemButton.className = styles.removeButton;

    const orderedItemImg = document.createElement("img");
    orderedItemButton.appendChild(orderedItemImg);
    orderedItemImg.src = icon;
    orderedItemImg.className = styles.removeButtonImg;

    orderedItemButton.addEventListener("click", (e) =>
      removeOrderedItem(
        item,
        orderedItem,
        allSelectedItems,
        ingredientsListIndex
      )
    );
  }

  function handleClick(event) {
    const item = event.target;
    const list = item.parentElement;
    const lists = document.getElementsByClassName("ingredientsLists");
    const ingredientsListIndex = [...lists].indexOf(list);

    const selectedItemsInList = allSelectedItems[ingredientsListIndex];

    if (canAddItem(selectedItemsInList, ingredientsListIndex, item)) {
      selectedItemsInList.push(item);
      updateOrderedItemsList(item, ingredientsListIndex);
      item.style.color = "rgba(255, 0, 0, 1)";
      showPizzaSlice(allSelectedItems);
      showCursorPointers(allSelectedItems);
    }
  }

  const lists = document.getElementsByClassName("ingredientsLists");
  for (let i = 0; i < 4; i++) {
    lists[i].addEventListener("click", handleClick);
  }

  showCursorPointers(allSelectedItems);
}
