import styles from './index.module.scss';
// import mainStyles from './styles/main.module.scss';
import logo from './assets/pizzaLab_logo.png';
import image from './assets/pizzaLab_image.png';

import addClassById from './modules/addClassById';

import addClassByClassName from './modules/addClassByClassName.js';

// import './styles/main.module.scss'


addClassById('wrapper', styles.wrapper);
addClassById('main', styles.main);
addClassById('mainImage', styles.mainImages);
addClassById('orderArea', styles.orderArea);
addClassById('logo', styles.logo);
addClassById('orderListTitle', styles.orderListTitle);
addClassById('orderedItems', styles.orderedItems);
addClassById('orderPrice', styles.orderPrice);
addClassById('mainImage', styles.mainImages);
addClassById('mainContent', styles.mainContent);
addClassById('mainHeader', styles.mainHeader);
addClassById('mainImage', styles.mainImage);
addClassById('imageCoverBlocks', styles.imageCoverBlocks);
addClassById('coverBlock1', styles.coverBlock1);
addClassById('coverBlock2', styles.coverBlock2);
addClassById('coverBlock3', styles.coverBlock3);
addClassById('coverBlock4', styles.coverBlock4);
addClassById('image', styles.image);
addClassById('orderButton', styles.orderButton);
addClassById('ingredientsArea', styles.ingredientsArea);
addClassById('ingredientsBackground', styles.ingredientsBackground);


addClassByClassName('ingredientsBlock', styles.ingredientsBlock);
addClassByClassName('ingredientsTitles', styles.ingredientsTitles);
addClassByClassName('titleDeviders', styles.titleDeviders);
addClassByClassName('ingredientsLists', styles.ingredientsLists);
addClassByClassName('ingredients', styles.ingredients);