const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let lastDigit;

while(myNum!=0) {
    lastDigit = myNum % 10;
    myNum = Math.floor(myNum / 10);

    console.log(lastDigit);
}