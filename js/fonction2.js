let nombreDeContraint = document.querySelector(".nombre-contraint");

function incrementeConttraint() {
  nombreDeContraint.value++;
  sessionStorage.setItem("nombreContraint", nombreDeContraint.value);
}

function decrementContraint() {
  if (nombreDeContraint.value > 0) {
    nombreDeContraint.value--;
    sessionStorage.setItem("nombreContraint", nombreDeContraint.value);
  }
}
