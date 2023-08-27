const input = document.querySelector("#font-size-control");

input.addEventListener("change", sizeControl);

function sizeControl(event) {
  const text = document.querySelector("#text");
  const size = event.currentTarget.value;
  text.style.fontSize = `${size}px`;
}
