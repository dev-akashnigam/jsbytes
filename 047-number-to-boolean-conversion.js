const prompt = require('prompt-sync')();

console.log("Please enter a number : ")
num = Number(prompt())

const boolValue = Boolean(num);
console.log(`Boolean value corresponding to the number ${num} = ${boolValue}`);