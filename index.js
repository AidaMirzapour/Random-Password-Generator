let inputEl = document.querySelector(".pass-input");
let buttonEl = document.querySelector(".btn-generate");
let alertEl = document.querySelector(".copy-alert");
let copyIcon = document.querySelector(".copy-icon");

buttonEl.addEventListener("click", () => {
  generatePass();
});
function generatePass() {
  let char =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_#.";
  let pass = "";
  let charLenght = 14;
  for (let index = 0; index < charLenght; index++) {
    const randomChar = Math.floor(Math.random() * char.length);
    pass += char.substring(randomChar, randomChar + 1);
  }
  inputEl.value = pass;
  alertEl.innerHTML = pass + " Copied!";
}

copyIcon.addEventListener("click", () => {
  copyPass();
  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 2000);
  }
});

function copyPass() {
  debugger;
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
