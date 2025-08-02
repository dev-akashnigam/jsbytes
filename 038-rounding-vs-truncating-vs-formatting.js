const prompt = require('prompt-sync')();

console.log("Please enter a decimal number : ");
const decimalNo = Number(prompt());

console.log("Please enter the number of decimal places to round, truncate and format : ");
const n = Number(prompt());

const roundedDecimalNo = Math.round( decimalNo * (10 ** n) ) / (10 ** n);
const truncatedDecimalNo = parseInt( decimalNo * (10 ** n) ) / (10 ** n);
const formattedDecimalNo = decimalNo.toFixed(n);

console.log(`On Rounding the decimal number: ${decimalNo} to ${n} places of decimal, the number becomes = ${roundedDecimalNo}`);
console.log(`On Truncating the decimal number: ${decimalNo} to ${n} places of decimal, the number becomes = ${truncatedDecimalNo}`);
console.log(`On Formatting the decimal number: ${decimalNo} to ${n} places of decimal, the number becomes = ${formattedDecimalNo}`);

/*
Please enter a decimal number : 
12.3652698
Please enter the number of decimal places to round, truncate and format : 
4
On Rounding the decimal number: 12.3652698 to 4 places of decimal, the number becomes = 12.3653
On Truncating the decimal number: 12.3652698 to 4 places of decimal, the number becomes = 12.3652
On Formatting the decimal number: 12.3652698 to 4 places of decimal, the number becomes = 12.3653
*/
