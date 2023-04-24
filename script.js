// Assignment code here
var generateBtn = document.querySelector('#generate');


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

function generatePassword() {     // Create a function called generate password

  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';   //  Declared the possible characters 
  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const numericalCharacters = '0123456789';
  const specialCharacters = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';

  var passwordLength = 0;         // Initialised the variables to a value
  var passwordUppercase = false;
  var passwordLowercase = false;
  var passwordNumerical = false;
  var passwordSpecial = false;

  passwordLength = window.prompt('How long would you like your password to be (must between 8-128 characters)');  // Ask the user how long they want their password within the parameters 8-128
  
  if (passwordLength < 8) {        // Minimum password length otherwise alert message
  window.alert('Password is too short!');
  return;
}
  else if (passwordLength > 128) {      // Maximum password length otherwise alert message
  window.alert('Password is too long!');
  return;
}

passwordUppercase = window.confirm('confirm using uppercase characters');   // confirmation messages allowing user to choose charater types
passwordLowercase = window.confirm('confirm using lowercase characters');
passwordNumerical = window.confirm('confirm using numerical characters');
passwordSpecial = window.confirm('confirm using special characters');

if (passwordUppercase === false && passwordLowercase === false && passwordNumerical === false && passwordSpecial === false) {   // if statement to make sure the user selects atleast 1 character type else return
  window.alert('Please select a character type');   
  return;
}

var password = '';
const availableCharacters = [];

if (passwordUppercase) {
  availableCharacters.push(uppercaseCharacters.split(''));
}
if (passwordLowercase) {
  availableCharacters.push(lowercaseCharacters.split(''));
}
if (passwordNumerical) {
  availableCharacters.push(numericalCharacters.split(''));
}
if (passwordSpecial) {
  availableCharacters.push(specialCharacters.split(''));
}

for (var i = 0; i < passwordLength; i++) {     // A for loop which will add random characters until the correct amount of characters that the user chose is reached.
  var randomCharacters = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
  password += randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
}

  return (password);
}


// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
