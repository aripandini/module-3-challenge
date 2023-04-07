//Assigning Vars Needed for Function to Generate Password
function generatePassword(){
  console.log("Button Clicked");
  var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "]", "}", 
  ";", ":", "'", ",", "<", ".", ">", "/", "?", "|"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var possibleChar = [];

//Checking for Password Criteria & Validating Input 
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

  //Randomly Generating Password Based on Input Received 
  if (hasLowercase) {
    possibleChar = possibleChar.concat(lowercaseLetters);
  }
  if (hasUppercase) {
    possibleChar = possibleChar.concat(uppercaseLetters);
  }
  if (hasNumbers) {
    possibleChar = possibleChar.concat(numbers);
  }
  if (hasSymbols) {
    possibleChar = possibleChar.concat(symbols);
  }
  let finalPassword = "";
  for (let i = 0; i < numberOfChar; i++) {
    let rng =[Math.floor(Math.random() * possibleChar.length)];
    finalPassword = finalPassword + possibleChar[rng];
  }
  //Displays Password
  return finalPassword;
};

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);