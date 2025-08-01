let prompt = require('prompt-sync')();

console.log("Please enter a number : ");
const num = Number(prompt());

const squareRoot = Math.sqrt(num);
const cubeRoot = Math.cbrt(num);

console.log(`Square root of number:${num} = ${squareRoot}`);
console.log(`Cube root of number:${num} = ${cubeRoot}`);