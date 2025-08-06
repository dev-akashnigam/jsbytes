const prompt = require('prompt-sync')();

console.log("Please enter a character : ");
const stringInput = prompt();

const ch = stringInput.charAt(0);

console.log(`Character corresponding to the string input: "${stringInput}" = ${ch}`);