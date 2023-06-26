import styles from "./orderArea.module.scss";
import addClassById from "@modules/addingClasses/addClassById";
import addClassByClassName from "@modules/addingClasses/addClassByClassName";
import logoImage from "@assets/pizzaLab_logo.png";

addClassById("orderArea", styles.orderArea);
addClassById("logo", styles.logo);
addClassById("orderListTitle", styles.orderListTitle);
addClassById("selectedIngredientsList", styles.selectedIngredientsList);
addClassById("orderPrice", styles.orderPrice);
addClassById("priceText", styles.priceText);
addClassById("priceValue", styles.priceValue);
addClassById("orderAreaBg", styles.orderAreaBg);
addClassById("orderAreaBg", styles.orderAreaBg);
addClassById("orderListWrapper", styles.orderListWrapper);
addClassByClassName("selectedIngredients", styles.selectedIngredients);
addClassByClassName("selectedIngredientName", styles.selectedIngredienttName);
logo.setAttribute('src', logoImage);

