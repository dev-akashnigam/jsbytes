const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let countOfDigits = Math.floor(Math.log10(myNum)) + 1;

console.log(`Number of digits = ${countOfDigits}`);




