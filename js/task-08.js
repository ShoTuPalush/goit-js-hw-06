const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", validator);

function validator(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(event.currentTarget);
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const user = {};

  formData.forEach((value, name) => {
    user[name] = value;
  });
  console.log(user);
  form.reset();
}
