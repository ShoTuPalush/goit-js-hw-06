function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeColor);

function changeColor() {
  const body = document.querySelector("body");
  const text = document.querySelector(".color");
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}
