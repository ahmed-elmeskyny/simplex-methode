var contraints = JSON.parse(sessionStorage.getItem("contraints1"));
var variables = JSON.parse(sessionStorage.getItem("variables"));
var optimisation = sessionStorage.getItem("optimisation");
var ligne = sessionStorage.getItem("j");
var colonne = sessionStorage.getItem("i");

let div = document.createElement("div");

function createObjectif() {
  div.innerHTML = div.innerHTML + `<p><span> ${optimisation} z = </span> `;

  for (let g = 0; g < variables.length; g++) {
    if (g == variables.length - 1) {
      div.innerHTML = div.innerHTML + `${variables[g]}<span>x${g + 1}</span>`;
    } else {
      div.innerHTML = div.innerHTML + `${variables[g]}<span>x${g + 1}</span>+`;
    }
  }
  div.innerHTML = div.innerHTML + ` </p><p><span>Sous contraints </span></p>`;
  document.querySelector(".fonction-objectif").appendChild(div);
  for (let k = 0; k < ligne; k++) {
    var p = document.createElement("p");
    for (let h = 0; h < colonne; h++) {
      if (
        contraints[k][h] == "≤" ||
        contraints[k][h] == "=" ||
        contraints[k][h] == "≥"
      ) {
        p.innerHTML = p.innerHTML + `${contraints[k][h]} `;
      } else if (h == colonne - 1) {
        p.innerHTML = p.innerHTML + `${contraints[k][h]} `;
      } else if (
        contraints[k][h + 1] == "≤" ||
        contraints[k][h + 1] == "=" ||
        contraints[k][h + 1] == "≥"
      ) {
        p.innerHTML =
          p.innerHTML + `${contraints[k][h]}<span> x${h + 1} </span>`;
      } else {
        p.innerHTML =
          p.innerHTML + `${contraints[k][h]}<span> x${h + 1} </span>+`;
      }
    }
    document.querySelector(".fonction-objectif").appendChild(p);
  }
}
createObjectif();

console.log(contraints[0][3]);
console.log(variables);
