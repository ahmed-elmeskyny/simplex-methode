let maxButton = document.querySelector("#max");
let minButton = document.querySelector("#min");

function max() {
  maxButton.style.backgroundColor = "#4954AB";
  maxButton.style.color = "white";
  minButton.style.backgroundColor = "#DDDDDD";
  minButton.style.color = "black";
  sessionStorage.setItem("optimisation", "max");
}

function min() {
  minButton.style.backgroundColor = "#4954AB";
  minButton.style.color = "white";
  maxButton.style.backgroundColor = "#DDDDDD";
  maxButton.style.color = "black";
  sessionStorage.setItem("optimisation", "min");
}
