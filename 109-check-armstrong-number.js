const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt())

const numberOfDigits = Number.parseInt(Math.floor(Math.log10(myNum))) + 1;

let lastDigit;
let lastDigitRaisedToPowerCountOfDigits;
let sumOfLastDigitsRaisedToPowerCountOfDigits = 0;
const originalNum = myNum;

while(myNum!=0) {
    lastDigit = myNum % 10;
    lastDigitRaisedToPowerCountOfDigits = lastDigit ** numberOfDigits;
    sumOfLastDigitsRaisedToPowerCountOfDigits += lastDigitRaisedToPowerCountOfDigits;

    myNum = Math.floor(myNum / 10);
}

if(sumOfLastDigitsRaisedToPowerCountOfDigits == originalNum) {
    console.log(`Number: ${originalNum} is an armstrong number.`);
}
else {
    console.log(`Number: ${originalNum} is NOT an armstrong number.`);
}