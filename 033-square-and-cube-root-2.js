let prompt = require('prompt-sync')();

console.log("Please enter a number : ");
const num = Number(prompt());

const squareRoot = num ** (1.0/2.0);
const cubeRoot = num ** (1.0/3.0);

console.log(`Square root of number:${num} = ${squareRoot}`);
console.log(`Cube root of number:${num} = ${cubeRoot}`);