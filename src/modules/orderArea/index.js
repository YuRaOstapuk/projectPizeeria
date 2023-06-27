import styles from "./orderArea.module.scss";
import addClassById from "@modules/addingClasses/addClassById";
import addClassByClassName from "@modules/addingClasses/addClassByClassName";
import pizzaSlice from "@assets/pizzaSliceLeft.png";
import pizzaInBoxImage from "@assets/pizzaBox1.png";

addClassById("orderArea", styles.orderArea);
addClassById("orderListTitle", styles.orderListTitle);
addClassById("selectedIngredientsList", styles.selectedIngredientsList);
addClassById("orderPrice", styles.orderPrice);
addClassById("priceText", styles.priceText);
addClassById("priceValue", styles.priceValue);
addClassById("orderListWrapper", styles.orderListWrapper);
addClassByClassName("selectedIngredients", styles.selectedIngredients);
addClassByClassName("selectedIngredientName", styles.selectedIngredienttName);
addClassById("orderAreaImage", styles.orderAreaImage);
addClassById("pizzaSliceLeft", styles.pizzaSliceLeft);


orderAreaImage.style.backgroundImage = pizzaInBoxImage;
orderAreaImage.setAttribute('style', `background-image: url(${pizzaInBoxImage})`);

pizzaSliceLeft.style.backgroundImage = pizzaSlice;
pizzaSliceLeft.setAttribute('style', `background-image: url(${pizzaSlice})`);
