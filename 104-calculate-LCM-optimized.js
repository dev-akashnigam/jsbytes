const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
let myFirstNumber = Number(prompt());
let originalFirstNumber = myFirstNumber;

console.log("Please enter the second number: ");
let mySecondNumber = Number(prompt());
let originalSecondNumber = mySecondNumber;

while(mySecondNumber!=0) {
    let mod = myFirstNumber % mySecondNumber;
    myFirstNumber = mySecondNumber;
    mySecondNumber = mod;
}

const hcf = myFirstNumber;

const lcm = (originalFirstNumber/hcf) * originalSecondNumber;

console.log(`LCM = ${lcm}`);