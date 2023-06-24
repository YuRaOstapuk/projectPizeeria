import styles from "./index.module.scss";
import logoImage from "./assets/pizzaLab_logo.png";
import image1  from "./assets/pizzaTopLeft.png";
import image2 from "./assets/pizzaTopRight.png";
import image3 from "./assets/pizzaBottomLeft.png";
import image4 from "./assets/pizzaBottomRight.png";
import addClassById from "./modules/addingClasses/addClassById";
import addClassByClassName from "./modules/addingClasses/addClassByClassName.js";
import fontBlack from "./assets/fonts/Roboto-Black.ttf";

import { addIngredientsToOrderedItems } from './modules/ingredientLists/addIngredients';



addClassById("wrapper", styles.wrapper);
addClassById("main", styles.main);
addClassById("orderArea", styles.orderArea);
addClassById("logo", styles.logo);
addClassById("orderListTitle", styles.orderListTitle);
addClassById("orderedItemsList", styles.orderedItemsList);
addClassById("orderPrice", styles.orderPrice);
addClassById("priceText", styles.priceText);
addClassById("priceValue", styles.priceValue);
addClassById("mainImage", styles.mainImage);
addClassById("mainContent", styles.mainContent);
addClassById("mainHeader", styles.mainHeader);
addClassById("imageBlock1", styles.imageBlock1);
addClassById("imageBlock2", styles.imageBlock2);
addClassById("imageBlock3", styles.imageBlock3);
addClassById("imageBlock4", styles.imageBlock4);
addClassById("orderButton", styles.orderButton);
addClassById("orderButtonBg", styles.orderButtonBg);
addClassById("ingredientsArea", styles.ingredientsArea);
addClassById("ingredientsBackground", styles.ingredientsBackground);
addClassById("ingredientsLists", styles.ingredientsLists);
addClassById("orderAreaBg", styles.orderAreaBg);
addClassById("headerColorizer", styles.headerColorizer);
addClassById("buttonText", styles.buttonText);
addClassById("orderListWrapper", styles.orderListWrapper);
addClassById("orderAreaBg", styles.orderAreaBg);
addClassById("modal", styles.modal);

addClassByClassName("orderedItems", styles.orderedItems);
addClassByClassName("ingredientsTitles", styles.ingredientsTitles);
addClassByClassName("titleDeviders", styles.titleDeviders);
addClassByClassName("ingredientsLists", styles.ingredientsLists);
addClassByClassName("ingredients", styles.ingredients);
addClassByClassName("ingredientsBlock", styles.ingredientsBlock);
addClassByClassName("indicators", styles.indicators);
addClassByClassName("indicatorBg", styles.indicatorBg);
addClassByClassName("orderedItemName", styles.orderedItemtName);


imageBlock1.style.backgroundImage = image1;
imageBlock1.setAttribute('style', `background-image: url(${image1})`);

imageBlock2.style.backgroundImage = image2;
imageBlock2.setAttribute('style', `background-image: url(${image2})`);

imageBlock3.style.backgroundImage = image3;
imageBlock3.setAttribute('style', `background-image: url(${image3})`);

imageBlock4.style.backgroundImage = image4;
imageBlock4.setAttribute('style', `background-image: url(${image4})`);

logo.setAttribute('src', logoImage);


addIngredientsToOrderedItems();
