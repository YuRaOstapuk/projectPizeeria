import styles from "./pizzaSection.module.scss";

import addClassById from "@modules/addingClasses/addClassById";


import image1  from "@assets/pizzaTopLeft.png";
import image2 from "@assets/pizzaTopRight.png";
import image3 from "@assets/pizzaBottomLeft.png";
import image4 from "@assets/pizzaBottomRight.png";
import pizzaBoxBg from "@assets/pizzaBoxBg.png";
import pizzaMonoBg from "@assets/pizzaMono.png";


addClassById("pizzaImage", styles.pizzaImage);
addClassById("pizzaSection", styles.pizzaSection);
addClassById("imageBlock1", styles.imageBlock1);
addClassById("imageBlock2", styles.imageBlock2);
addClassById("imageBlock3", styles.imageBlock3);
addClassById("imageBlock4", styles.imageBlock4);
addClassById("orderButton", styles.orderButton);
addClassById("pizzaSectionBg", styles.pizzaSectionBg)
imageBlock1.style.backgroundImage = image1;
imageBlock1.setAttribute('style', `background-image: url(${image1})`);

imageBlock2.style.backgroundImage = image2;
imageBlock2.setAttribute('style', `background-image: url(${image2})`);

imageBlock3.style.backgroundImage = image3;
imageBlock3.setAttribute('style', `background-image: url(${image3})`);

imageBlock4.style.backgroundImage = image4;
imageBlock4.setAttribute('style', `background-image: url(${image4})`);

pizzaSectionBg.style.backgroundImage = pizzaBoxBg;
pizzaSectionBg.setAttribute('style', `background-image: url(${pizzaBoxBg})`);

pizzaImage.style.backgroundImage = pizzaMonoBg;
pizzaImage.setAttribute('style', `background-image: url(${pizzaMonoBg})`);