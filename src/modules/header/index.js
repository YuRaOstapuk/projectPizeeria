import styles from "./header.module.scss";
import addClassById from "@modules/addingClasses/addClassById";
import addClassByClassName from "@modules/addingClasses/addClassByClassName";
import logoImage from "@assets/logo.png";

addClassById("mainHeader", styles.mainHeader);
addClassById("mainHeader", styles.mainHeader);
addClassById("logo", styles.logo);
addClassById("title", styles.title);
logo.setAttribute('src', logoImage);
