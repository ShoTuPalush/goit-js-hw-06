const textInput = document.querySelector('#name-input');

textInput.addEventListener('input', inputChange)

function inputChange(event) {
    const output = document.querySelector("#name-output");
    const value = event.currentTarget.value;
    output.textContent = value === '' ? 'Anonymous' : value;
}