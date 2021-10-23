let counter = 0;

let subtractButton = document.querySelector(".subtract");
let addButton = document.querySelector(".add");
let result = document.querySelector(".result");
let shiba = document.querySelector(".img-result");

subtractButton.addEventListener("click", () => {
  remove();
  if (counter >= 0) {
    removeShiba();
  }
});

addButton.addEventListener("click", () => {
  add();
});

function remove() {
  counter = counter - 1;
  result.innerHTML = counter;
}

function add() {
  counter = counter + 1;
  result.innerHTML = counter;
  if (counter > 0) {
    let newShiba = document.createElement("img");
    newShiba.src = "shibainu.jpeg";
    newShiba.setAttribute("height", "150px");
    newShiba.setAttribute("width", "120px");
    shiba.appendChild(newShiba);
  }
}

function removeShiba() {
  shiba.removeChild(shiba.lastChild);
}
