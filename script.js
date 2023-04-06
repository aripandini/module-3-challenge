// Assignment code here
//var 
// arrays 

//CHECK TO SEE IT WORKS
function generatePassword(){
  console.log("Button Clicked"); // DELETE AFTER
  var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "]", "}", 
  ";", ":", "'", ",", "<", ".", ">", "/,", "?", "|"];
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var possibleChar = [];

  //promt user for password criteria
  //length between 8 < 128
  // character type lowercase, uppercase, numeric, and/or special characters

  numberOfChar = prompt("How long do you want your password to be? Choose between 8-128 characters.");
  if (numberOfChar < 8 || numberOfChar > 128) {
    return "Please choose a valid number.";
  } else if (isNaN(numberOfChar)) {
    numberOfChar = prompt("Invalid Selection. Please enter a number between 8-128");
  }
  else {
    alert("Your password will be " + numberOfChar + " characters long.");
    
  }

  hasLowercase = confirm("Do you want lowercase letters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Okay! The password will contain lowercase letters.");
  }
  else {
    alert("Got it. Your password will NOT contain lowercase letters!");
  }

  hasUppercase = confirm("Do you want uppercase letters?");
  if (hasUppercase) {
    alert("OKay! Your password will contain uppercase letters.");
  }
  else {
    alert("Got it. Your password will NOT contain uppercase letters.");
  }

  hasNumbers = confirm("Do you want numbers included in your password?");
  if (hasNumbers) {
    alert("Okay! Your password will contain numbers.");
  }
  else {
    alert(" Got it. Your password will NOT contain numbers!");
  }

  hasSymbols = confirm("Do you want any special characters in your password?");
  if (hasSymbols) {
    alert("Okay! Your password will contain special characters.");
  }
  else {
    alert("Got it. Your password will NOT contain special characters!");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSymbols === false) {
    return "Try again. At least one character type must be selected for password to be generated";
  };

  // validate input 
  // generate password based on criteria 
  //display password 

  return "Generated password goes here"
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);