import styles from "./index.module.scss";
import logo from "./assets/pizzaLab_logo.png";
import image from "./assets/pizzaLab_image.png";
import addClassById from "./modules/addClassById";
import addClassByClassName from "./modules/addClassByClassName.js";
import * as font from "./assets/fonts/Roboto-Black.ttf";
import { showPizzaSlice } from "./modules/showPizzaSlice";


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
addClassById("coverBlocksWrapper", styles.coverBlocksWrapper);
addClassById("coverBlock1", styles.coverBlock1);
addClassById("coverBlock2", styles.coverBlock2);
addClassById("coverBlock3", styles.coverBlock3);
addClassById("coverBlock4", styles.coverBlock4);
addClassById("image", styles.image);
addClassById("orderButton", styles.orderButton);
addClassById("orderButtonBg", styles.orderButtonBg);
addClassById("ingredientsArea", styles.ingredientsArea);
addClassById("ingredientsBackground", styles.ingredientsBackground);
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


showPizzaSlice();