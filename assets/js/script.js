// Assignment Code
var generateBtn = document.querySelector("#generate");

// All the symbols that I will add to possible characters if they are wanted 
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numericChars = '0123456789';
var specialChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


//Functions that check for at least 1 symbol of their respective type in a string
function checkUppercase(password){
  return /[A-Z]+/.test(password);
}

function checkLowercase(password){
  return /[a-z]/.test(password);
}

function checkNumeric(password){
  return /[0-9]+/.test(password);
}

function checkSymbol(password){
  return /\W+/.test(password);
}

//Function that generates the password given length and possible characters
var generatePassword = function(pLength, possibleChars, hasUppercase, hasLowercase, hasNumeric, hasSpecial){
  var password = ''
  var passwordReqsMet = false;
  var tries = 0;
  while(!passwordReqsMet){

    //Reset password every failed try
    password = '';
    //Get a random char from the list of possible chars until it is as long as the desired password length
    for(var i = 0; i < pLength; i++){
      password = password + possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }
    tries++;
    console.log(tries);
    //Check if it has the desired character types in password otherwise continue while loop
    //until you create a valid password
    if(hasUppercase){
      passwordReqsMet = checkUppercase(password);
      continue;
    }
    if(hasLowercase){
      passwordReqsMet = checkLowercase(password);
      continue;
    }
    if(hasNumeric){
      passwordReqsMet = checkNumeric(password);
      continue;
    }
    if(hasSpecial){
      passwordReqsMet = checkSpecial(password);
      continue;
    }
  }

  return password
}


// Write password to the #password input
function writePassword() {

  //Ask user for the desired length of password
  let pLength = prompt("Enter desired length for password (8-128)");
  // console.log(pLength);
  //Check if valid length
  if(pLength < 8 || pLength > 128){
    alert("Not a valid length");
    return;
  }
  //Variable for storing the possible character
  let possibleChars = "";
  //Ask user for the character types they want
  let hasUppercase = confirm("Do you want your password to contain uppercase characters?")
  let hasLowercase = confirm("Do you want your password to contain lowercase characters?");
  let hasNumeric = confirm("Do you want your password to contain numeric characters?");
  let hasSpecial = confirm("Do you want your password to contain special characters?");

  //Adds chars if they are confimed in the confirm window
  if(hasUppercase){
    possibleChars = possibleChars + uppercaseChars;
  }
  if(hasLowercase){
    possibleChars = possibleChars + lowercaseChars;
  }
  if(hasNumeric){
    possibleChars = possibleChars + numericChars;
  }
  if(hasSpecial){
    possibleChars = possibleChars + specialChars;
  }

  console.log(possibleChars);

  //If none are chose then alert and return to stop the function
  if(possibleChars.length === 0){
    alert("No characters chosen");
    return;
  }
  //If no errors are brought up generate the password
  else{
    var password = generatePassword(pLength, possibleChars, hasUppercase, hasLowercase, hasNumeric, hasSpecial);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

