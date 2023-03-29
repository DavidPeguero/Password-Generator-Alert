// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function(pLength){
  return pLength;
}

// Write password to the #password input
function writePassword() {
  var pLength = prompt("Enter desired length for password (8-128)");


  var password = generatePassword(pLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
