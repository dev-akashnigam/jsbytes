const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let myNumCopy = myNum;

let countOfDigits = 0;
while(myNum!=0) {
    countOfDigits++;
    myNum = Math.floor(myNum / 10);
}

myNum = myNumCopy;

let divisor = Math.pow(10, countOfDigits-1);

let firstDigit;
while(divisor!=0) {
    firstDigit = Math.floor(myNum / divisor);
    console.log(firstDigit);

    myNum = myNum % divisor;
    divisor = Math.floor(divisor / 10);
}



