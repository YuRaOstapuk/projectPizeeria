import styles from "./modalWindow.module.scss";
import styles2 from "@modules/pizzaSection/pizzaSection.module.scss";
import addClassById from "@modules/addingClasses/addClassById";

addClassById("modalWindow", styles.modalWindow);
addClassById("modalContent", styles.modalContent);
addClassById("modalButton", styles.modalButton);
addClassById("closeModalText", styles.closeModalText);

const modalWindow = document.getElementById('modalWindow');
const wrapper = document.getElementById('wrapper');
const priceValue = document.getElementById('priceValue');
const priceInModalValue = document.getElementById('priceInModalValue');
const orderButton = document.getElementById("orderButton");
const modalButton = document.getElementById("modalButton");

modalWindow.remove();

orderButton.addEventListener('click', () => {
    priceInModalValue.textContent = priceValue.textContent;
    wrapper.appendChild(modalWindow);
    orderButton.disabled = true;
    orderButton.classList.remove(styles2.buttonEnabled);
});

modalButton.addEventListener('click', () => location.reload());


