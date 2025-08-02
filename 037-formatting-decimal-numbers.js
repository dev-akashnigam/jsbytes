const prompt = require('prompt-sync')();

console.log("Please enter a decimal number : ");
const decimalNo = Number(prompt());

const formattedDecimalNo = decimalNo.toFixed(3);

console.log(`Formatting decimal number ${decimalNo} to 3 decimal places, the number becomes = ${formattedDecimalNo}`);