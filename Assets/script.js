// Variables and Functions already provided by Module not touched

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Generate randomObject for random password with functions to work inside generatePassword later

function randomlowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomuppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomsymbol() {
    var symbols = '~!@#$%^&*()_+-=[]{}|,./<>?;:';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomlowercase());
console.log(randomuppercase());
console.log(randomnumber());
console.log(randomsymbol());

//  Modified generatePassword Function

function generatePassword() {

    var allowableFunctions = [];

    // CharacterLimit with proper alerts

    var length = prompt("How many characters would you like in your password? Please note your password length should be at least 8 characters and no more than 128 characters");

    if (isNaN(length) || length < 8 || length > 128) {
        console.log("Please insert a proper numerical value between 8 and 128");
        alert("Please insert a proper numerical value between 8 and 128");
        return null;
    }

    // Additional prompts to select preference of characters in password

    var wantlower = confirm("Do you want lowercase character(s) in your password?");
    if (wantlower === true) {
        allowableFunctions.push(randomlowercase);
    } 

    var wantupper = confirm("Do you want uppercase character(s) in your password?");

    if (wantupper === true) {
        allowableFunctions.push(randomuppercase);
    }

    var wantnumber = confirm("Do you want number(s) in your password?");
    if (wantnumber === true) {
        allowableFunctions.push(randomnumber);
    } 

    var wantsymbol = confirm("Do you want symbol(s) in your password?");
    if (wantsymbol === true) {
        allowableFunctions.push(randomsymbol);
    } 

    //if nothing chosen, return null

    var Preference = wantlower + wantupper + wantnumber + wantsymbol;
    console.log(Preference);

    if (Preference == 0) {
        console.log("Please select again");
        alert("Please select again");
        return '';
    }
    // after aforementioned step, password is in the works

    var password = '';

    for (let i = 0; i < length; i++) {
        var myFunctionInt = Math.floor(Math.random() * allowableFunctions.length);
        console.log(myFunctionInt);
        var myFunction = allowableFunctions[myFunctionInt]; 
        password = password + myFunction();
    }

    return password;
}
