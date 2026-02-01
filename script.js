function generatePassword() {

  let length = document.getElementById("length").value;

  let uppercase = document.getElementById("uppercase").checked;
  let lowercase = document.getElementById("lowercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;

  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_+{}[]<>?/";

  let allChars = "";

  if (uppercase) allChars += upperChars;
  if (lowercase) allChars += lowerChars;
  if (numbers) allChars += numberChars;
  if (symbols) allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  document.getElementById("password").value = password;

  checkStrength(password);
}

/* Strength Checker */
function checkStrength(password) {
  let strengthText = document.getElementById("strengthText");

  if (password.length <= 6) {
    strengthText.innerText = "Strength: Weak ❌";
    strengthText.style.color = "red";
  }
  else if (password.length <= 10) {
    strengthText.innerText = "Strength: Medium ⚠️";
    strengthText.style.color = "orange";
  }
  else {
    strengthText.innerText = "Strength: Strong ✅";
    strengthText.style.color = "green";
  }
}

/* Copy Password */
function copyPassword() {

  let passwordField = document.getElementById("password");
  let copyMsg = document.getElementById("copyMsg");

  if (passwordField.value === "") {
    copyMsg.innerText = "Generate a password first!";
    copyMsg.style.color = "red";
    return;
  }

  navigator.clipboard.writeText(passwordField.value);

  copyMsg.innerText = "Password Copied Successfully ✅";
  copyMsg.style.color = "green";

  setTimeout(() => {
    copyMsg.innerText = "";
  }, 2000);
}

/* Dark Mode Toggle */
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});