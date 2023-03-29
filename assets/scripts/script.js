// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numericChars = '0123456789';
var specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

var generatePassword = function(pLength){
  return pLength;
}

// Write password to the #password input
function writePassword() {

  //Ask user for the desired length of password
  var pLength = prompt("Enter desired length for password (8-128)");
  
  //Variable for storing the possible character
  var possibleChars = "";
  //Ask user for the character types they want
  var hasUppercase = confirm("Do you want your password to contain uppercase characters?")
  var hasLowercase = confirm("Do you want your password to contain lowercase characters?");
  var hasNumeric = confirm("Do you want your password to contain numeric characters?");
  var hasSpecial = confirm("Do you want your password to contain special characters?");

  if(hasUppercase){
    possibleChars.concat(uppercaseChars);
  }
  if(hasLowercase){
    possibleChars.concat(lowercaseChars);
  }
  if(hasNumeric){
    possibleChars.concat(numericChars);
  }
  if(hasSpecial){
    possibleChars.concat(specialChars);
  }

  

  var password = generatePassword(pLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
