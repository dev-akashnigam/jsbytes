const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let lastDigit;
let reversedNumber = 0;
let originalNumber = myNum;

while(myNum!=0) {
    lastDigit = myNum % 10;
    reversedNumber = (reversedNumber * 10) + lastDigit;

    myNum = Math.floor(myNum / 10);
}

if(reversedNumber == originalNumber) {
    console.log(`Number: ${originalNumber} is palindrome = true`);
}
else {
    console.log(`Number: ${originalNumber} is palindrome = false`);
}

