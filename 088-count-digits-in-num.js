const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let noOfDigits = 0;
while(myNum != 0) {
    noOfDigits++;
    myNum = Math.floor(myNum / 10);
}

console.log(`No. of digits = ${noOfDigits}`);