let contraints = [];
let j = 0;
let i = 0;

document.getElementById("submit").addEventListener("click", function () {
  for (let k = 0; k < j; k++) {
    var array = [];
    for (let h = 0; h < i + 2; h++) {
      array[h] = document.getElementById(`c${k}${h}`).value;
      console.log(array);
    }
    contraints[k] = array;
  }
  console.log(contraints);
  window.sessionStorage.setItem("contraints1", JSON.stringify(contraints));
});

function createContraints() {
  let nombreVariable = sessionStorage.getItem("nombreVariable");
  let nombreContraint = sessionStorage.getItem("nombreContraint");

  while (nombreContraint > 0) {
    var div = document.createElement("div");
    div.setAttribute("class", "contraint");
    for (i = 0; i < nombreVariable; i++) {
      if (i == nombreVariable - 1) {
        div.innerHTML =
          div.innerHTML +
          `<input type="number" id="c${j}${i}"  value="0" class="nombre-contraint" /><span>x${
            i + 1
          }</span> <select id="c${j}${i + 1}"  >
          <option value="≤">≤</option>
          <option value="=">=</option>
          <option value="≥">≥</option>
        </select><input type="number" value="0" id="c${j}${
            i + 2
          }"   class="nombre-contraint" />`;
      } else {
        div.innerHTML =
          div.innerHTML +
          `<input type="number" value="0"  id="c${j}${i}"  class="nombre-contraint" /><span>x${
            i + 1
          }</span><span> + </span>`;
      }
    }
    document.querySelector(".contraints").appendChild(div);
    nombreContraint--;
    j++;
  }
  sessionStorage.setItem("i", i + 2);
  sessionStorage.setItem("j", j);
}
createContraints();
