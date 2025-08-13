const prompt = require('prompt-sync')();

console.log("Please enter a real number: ");
const myNum = Number(prompt());

const outputString = (myNum >= 0) ? `Number: ${myNum} is POSITIVE!` : `Number: ${myNum} is NEGATIVE!`;

console.log(outputString);