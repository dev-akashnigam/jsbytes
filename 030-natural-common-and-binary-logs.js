const prompt = require('prompt-sync')();

console.log("Please enter the number for which you need logarithms : ");
const number = Number(prompt());

const naturalLog = Math.log(number);
const commonLog = Math.log10(number);
const binaryLog = Math.log2(number);

console.log(`Natural Log (log base e) of number:${number} = ${naturalLog}`);
console.log(`Common Log (log base 10) of number:${number} = ${commonLog}`);
console.log(`Binary Log (log base 2) of number:${number} = ${binaryLog}`);