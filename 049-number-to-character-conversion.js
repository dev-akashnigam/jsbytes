const prompt = require('prompt-sync')();

console.log("Please enter a digit from 0-9 : ");
const digit = Number(prompt());

const ch = digit.toString();
console.log(`Character corresponding to the ${digit} = '${ch}'`);



