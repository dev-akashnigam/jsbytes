const prompt = require('prompt-sync')();

console.log("Please enter a character: ");
ch = prompt().charAt(0);

numberForCharacter = Number(ch);
console.log(`Number corresponding to the character: '${ch}' = ${numberForCharacter}`);