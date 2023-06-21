
export function showPizzaSlice() {
    const coverBlocks = [
      document.getElementById("coverBlock1"),
      document.getElementById("coverBlock2"),
      document.getElementById("coverBlock4"),
      document.getElementById("coverBlock3")
    ];
  
    const ingredientsLists = document.querySelectorAll(".ingredientsLists");
  
    ingredientsLists.forEach((list, index) => {
      list.addEventListener("click", function (event) {
        const clickedItem = event.target.closest("li");
        if (clickedItem) {
          coverBlocks[index].style.opacity = "0";
        }
      });
    });
  }
  