// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const passwordLength = prompt("How long would you like your password to be? (Must be at least 8 characters and no more than 128 characters)");
  if(parseInt(passwordLength) < 8) alertError("short");
  if(parseInt(passwordLength) > 128) alertError("long");
}

function alertError(msg) {
  alert(`Number is too ${msg}`);
  generatePassword();
}