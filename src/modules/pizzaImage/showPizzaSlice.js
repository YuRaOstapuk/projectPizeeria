export function showPizzaSlice(allSelectedItems) {
  const imageBlocks = [
    document.getElementById("imageBlock1"),
    document.getElementById("imageBlock2"),
    document.getElementById("imageBlock4"),
    document.getElementById("imageBlock3")
  ];

  for (let i=0; i < 4; i++) {
    imageBlocks[i].style.opacity = allSelectedItems[i].length === 0 ? 0.3 : 1;
  }
}
