
export function showModal(totalPrice) {
  orderButton.addEventListener("click", function () {
    if (orderButton.style.opacity === "1") {



      
    }
  });
}



const modalText = `Заказ совершен успешно!\nОбщая стоимость заказа: $${totalPrice.toFixed(2)}`;

      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.textContent = modalText;

      document.body.appendChild(modal);


    //   Congratulations on your pizza order! Prepare to be blown away by the extraordinary flavors that await you.