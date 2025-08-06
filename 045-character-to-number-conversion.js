const prompt = require('prompt-sync')();

console.log("Please enter a character (digit b/w 0-9): ");
const ch = prompt().charAt(0);

const numberForCharacter = Number(ch);
console.log(`Number corresponding to the character: '${ch}' = ${numberForCharacter}`);