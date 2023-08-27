const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const markup = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = ingredient;
  return newElement;
});

list.append(...markup);
