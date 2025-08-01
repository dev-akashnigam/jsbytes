let prompt = require('prompt-sync')();

console.log("Please enter a decimal number to be truncated : ");
let decimalNumber = Number(prompt());

let truncatedToNearestInteger = parseInt(decimalNumber);
let truncatedToFirstDecimalPlace = (parseInt(decimalNumber * 10))/10.0;
let truncatedToSecondDecimalPlace = (parseInt(decimalNumber * 100))/100.0;
let truncatedToThirdDecimalPlace = (parseInt(decimalNumber * 1000))/1000.0;

console.log(`${decimalNumber} truncated to nearest integer becomes : ${truncatedToNearestInteger}`);
console.log(`${decimalNumber} truncated to first decimal place becomes : ${truncatedToFirstDecimalPlace}`);
console.log(`${decimalNumber} truncated to second decimal place becomes : ${truncatedToSecondDecimalPlace}`);
console.log(`${decimalNumber} truncated to third decimal place becomes : ${truncatedToThirdDecimalPlace}`);