import { showPizzaSlice } from "./showPizzaSlice";
import styles from "../index.module.scss";
import icon from "../assets/icon.png";

export function addIngredientsToOrderedItems() {
    const allSelectedItems = [[], [], [], []];
  
    function canAddItem(selectedItemsInList, maxCount, item) {
      return selectedItemsInList.length < maxCount && !selectedItemsInList.includes(item);
    }
  
    function updateOrderedItemsList(item, ingredientsListIndex) {
        const orderedItemsList = document.getElementById('orderedItemsList');

        const orderedItem = document.createElement('li');
        orderedItemsList.appendChild(orderedItem);
        orderedItem.className = styles.orderedItems;

        const orderedItemText = document.createElement('span');
        orderedItem.appendChild(orderedItemText);
        orderedItemText.innerText = item.innerText;
        orderedItemText.className = styles.orderedItemName;

        const orderedItemButton = document.createElement('button');
        orderedItem.appendChild(orderedItemButton);
        orderedItemButton.className = styles.removeButton;

        const orderedItemImg = document.createElement('img');
        orderedItemButton.appendChild(orderedItemImg);
        orderedItemImg.src = icon;
        orderedItemImg.className = styles.removeButtonImg;

        orderedItemButton.addEventListener('click', (e) => {
          orderedItem.remove();
          item.style.color = null;
          allSelectedItems[ingredientsListIndex] = allSelectedItems[ingredientsListIndex].filter(a => a !== item);
          showPizzaSlice(allSelectedItems);
          showCursorPointers(allSelectedItems);
        });
      }
  
    function handleClick(event) {
      const item = event.target;
      const list = item.parentElement;
      const lists = document.getElementsByClassName('ingredientsLists');
      const ingredientsListIndex = [...lists].indexOf(list);

      const selectedItemsInList = allSelectedItems[ingredientsListIndex];
      const maxCount = getMaxCount(ingredientsListIndex);
  
      if (canAddItem(selectedItemsInList, maxCount, item)) {
        selectedItemsInList.push(item);
        updateOrderedItemsList(item, ingredientsListIndex);
        item.style.color = 'rgba(255, 0, 0, 1)';
        showPizzaSlice(allSelectedItems);
        showCursorPointers(allSelectedItems);
      }
    }
  
    function getMaxCount(ingredientsListIndex) {
      if (ingredientsListIndex === 0 || ingredientsListIndex === 3) {
        return 1;
      } else {
        return 2;
      }
    }

    const lists = document.getElementsByClassName('ingredientsLists');
    for (let i=0; i < 4; i++) {
      lists[i].addEventListener('click', handleClick);
    }

    showCursorPointers(allSelectedItems);

    function showCursorPointers(allSelectedItems) {
      const lists = document.getElementsByClassName('ingredientsLists');
      for (let i=0; i < 4; i++) {
        const selectedItemsInList = allSelectedItems[i];
        const maxCount = getMaxCount(i);
        const list = lists[i];
        [...list.children].forEach(item => {
          item.style.cursor = canAddItem(selectedItemsInList, maxCount, item) ? "pointer" : "default";
        });
      }
    }
  }
    