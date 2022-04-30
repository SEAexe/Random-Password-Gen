// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 8; //default desired password length

// Booleans for what settings they want in password
var upperCase = true;
var numbers = true;
var specialCharacters = true;

// Initializing and defining character sets
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsSymbol = "~!@#$%^&*()-_=+";
var charsNumbers = "1234567890";

// Generate the password from the charSet
function reallyGeneratePassword() {
  var password = ""; //if this isn't set, a bunch of garbage is outputted
  console.log(charSet.length);
  for (var i = 0; i < length; i++) {

    // Return a random number between 0 and charSet length - 1, inclusive of both
    var randomNumber = Math.floor(Math.random() * (charSet.length));

    // password = password + charSet.substring
    // get a single character from the charSet at the randomNumber
    password += charSet.substring(randomNumber, randomNumber + 1);
    console.log(randomNumber);
   };
  return(password)
};

// Validate length input
function validateLength() {
  length = 8; //resetting to 8 after window prompt is closed and opened back up
  length = prompt("How many characters", length);
  if (length >= 8 && length <= 128) {
    return(true);
  } else {
    return(false);
  };
};

// Generate a secure password based on user prompts
function generatePassword() {

  // Initialize the charSet with the characters that the user wants
  charSet = charsLower;
  if (upperCase) {
    charSet += charsUpper
  };

  if (numbers) {
    charSet += charsNumbers
  };

  if (specialCharacters) {
    charSet += charsSymbol
  };

  // Using the charSet to REALLY generate password
  password = reallyGeneratePassword(charSet);

  return(password);
};

// Write password to the #password input
function writePassword() {

  // Prompt for length, then validate it
  if (validateLength()) {
    upperCase = confirm("Uppercase letters?", upperCase);
    numbers = confirm("Number?", numbers);
    specialCharacters = confirm("Special Characters?", specialCharacters);
  } else { 
    alert("Invalid length", length);
    return
  };


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
