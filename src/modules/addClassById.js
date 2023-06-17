

function addClassById(id, className) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add(className);
    }
  }
  
  export default addClassById;
  