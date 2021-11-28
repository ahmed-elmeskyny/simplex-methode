let nombreVariable = sessionStorage.getItem("nombreVariable");
let div = document.createElement("div");
let variableArray = [];

document.querySelector("#submit").addEventListener("click", function () {
  for (let i = 0; i < nombreVariable; i++) {
    variableArray[i] = document.querySelector(`#r${i}`).value;
  }
  console.log(variableArray);
  window.sessionStorage.setItem("variables", JSON.stringify(variableArray));
});

function createVariable() {
  for (let i = 0; i < nombreVariable; i++) {
    div.innerHTML =
      div.innerHTML +
      `   <input type="number" id="r${i}" value="0" />
      <span>x${i + 1}</span>`;
  }
  document.querySelector(".variables").appendChild(div);
}

createVariable();
