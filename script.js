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
  // Collecting user input
  const passwordLength = validatePasswordLength();
  const wantLowerCaseLetters = confirm(msg("lowercase letters"));
  const wantUpperCaseLetters = confirm(msg("uppercase letters"));
  const wantNumbers = confirm(msg("numbers"));
  const wantSpecialChars = confirm(msg("Special Characters"));
  let newPassword = '';
  let i = 0;
  // Iterating until we reach the users max password length
  while(i < passwordLength) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    // Grabbing random indexes to randomly add to the newPassword
    const randomIndex = Math.random() * (letters.length - 1);
    const specialChars = '`~!@#$%^&*()_-+=[]|}{;":.,<>/?';

    /*
    Validating if user wants to include numbers, uppercase letters, lowercase letters, or special characters in their new password.
    */
    if(wantLowerCaseLetters === true) newPassword += letters.charAt(randomIndex);
    if(wantUpperCaseLetters === true) newPassword += (letters.charAt(randomIndex - 1)).toLocaleUpperCase();
    if(wantNumbers === true) newPassword += Math.round(Math.random() * 10);
    if(wantSpecialChars === true) newPassword += specialChars.charAt(Math.random() * (specialChars.length - 1));
    i++;
  }
  return newPassword;
}

// Validates what length the user inputs
function validatePasswordLength() {
  const passwordLength = prompt("How long would you like your password to be? (Must be at least 8 characters and no more than 128 characters)");
  if(parseInt(passwordLength) < 8) {
    alertError("small");
    return;
  }
  else if(parseInt(passwordLength) > 128) {
    alertError("big");
    return;
  }
  return parseInt(passwordLength);
}

// Functions to help reduce repetitave code
function alertError(msg) {
  alert(`Number is too ${msg}`);
  generatePassword();
}

function msg(typeOfChar) { return `Would you like to include ${typeOfChar} in your password?`; }