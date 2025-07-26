let prompt = require('prompt-sync')();

console.log("Please enter a decimal number to be rounded off : ");
let decimalNumber = parseFloat(prompt());

let roundedToNearestInteger = Math.round(decimalNumber);
let roundedToFirstDecimalPlace = Math.round(decimalNumber * 10.0)/10.0;
let roundedToSecondDecimalPlace = Math.round(decimalNumber * 100.0)/100.0;
let roundedToThirdDecimalPlace = Math.round(decimalNumber * 1000.0)/1000.0;

console.log(`${decimalNumber} rounded to nearest integer becomes : ${roundedToNearestInteger}`);
console.log(`${decimalNumber} rounded to first decimal place becomes : ${roundedToFirstDecimalPlace}`);
console.log(`${decimalNumber} rounded to second decimal place becomes : ${roundedToSecondDecimalPlace}`);
console.log(`${decimalNumber} rounded to third decimal place becomes : ${roundedToThirdDecimalPlace}`);