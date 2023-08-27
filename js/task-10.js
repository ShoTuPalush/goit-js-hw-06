function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestory = document.querySelector("button[data-destroy]");
const mainDiv = document.querySelector("#boxes");

btnCreate.addEventListener("click", createClick);
btnDestory.addEventListener("click", destroyBoxes);

function createClick() {
  destroyBoxes();
  const input = document.querySelector('input[type="number"]');
  createBoxes(input.value);
}

function createBoxes(amount) {
  const listDiv = [];
  for (let index = 0; index < amount; index++) {
    const div = document.createElement("div");
    div.style.width = `${3 + index}0px`;
    div.style.height = `${3 + index}0px`;
    div.style.backgroundColor = getRandomHexColor();
    listDiv.push(div);
  }
  mainDiv.append(...listDiv);
}

function destroyBoxes() {
  mainDiv.innerHTML = "";
}
