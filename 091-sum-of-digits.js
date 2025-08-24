const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let lastDigit;
let sumOfDigits = 0;
while(myNum!=0) {
    lastDigit = myNum % 10;
    sumOfDigits += lastDigit;
    myNum = Math.floor(myNum / 10);
}

console.log(`Sum of digits = ${sumOfDigits}`);