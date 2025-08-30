const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
let firstNum = Number(prompt());

console.log("Please enter the second number: ");
let secondNum = Number(prompt());

while(secondNum!=0) {
    let mod = firstNum%secondNum;
    firstNum = secondNum;
    secondNum = mod;
}

console.log(`HCF = ${firstNum}`);

