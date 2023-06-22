
export function showPizzaSlice() {
  const imageBlocks = [
    document.getElementById("imageBlock1"),
    document.getElementById("imageBlock2"),
    document.getElementById("imageBlock4"),
    document.getElementById("imageBlock3")
  ];

  const ingredientsLists = document.querySelectorAll(".ingredientsLists");

  ingredientsLists.forEach((list, index) => {
    list.addEventListener("click", function (event) {
      const clickedItem = event.target.closest("li");
      if (clickedItem) {
        imageBlocks[index].style.opacity = "1";
      }
    });
  });
}
