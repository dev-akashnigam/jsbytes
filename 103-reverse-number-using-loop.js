const prompt = require('prompt-sync')();

console.log("Please enter the number to be reversed: ");
let myNum = Number(prompt());

const originalNumber = myNum;
let lastDigit;
let reversedNumber = 0;

while(myNum != 0) {
    lastDigit = myNum % 10;
    reversedNumber = (reversedNumber * 10) + lastDigit;

    myNum = Math.floor(myNum / 10);
}

console.log(`Reverse of number: ${originalNumber} = ${reversedNumber}`);

