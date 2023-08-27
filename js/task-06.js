const input = document.querySelector("#validation-input");

input.addEventListener("blur", validator);

function validator() {
  input.className = "";
  if (Number(input.getAttribute("data-length")) === input.value.length) {
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
  return;
}
