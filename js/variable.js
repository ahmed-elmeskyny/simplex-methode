let nombreDeVariable = document.querySelector(".nombre-variable");

function incrementeVariable() {
  if (nombreDeVariable.value < 6) {
    nombreDeVariable.value++;
    sessionStorage.setItem("nombreVariable", nombreDeVariable.value);
  }
}

function decrementVariable() {
  if (nombreDeVariable.value > 0) {
    nombreDeVariable.value--;
    sessionStorage.setItem("nombreVariable", nombreDeVariable.value);
  }
}
