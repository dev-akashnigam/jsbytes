const prompt = require('prompt-sync')();

console.log("Please enter a character: ");
const myChar = prompt().charAt(0);

const ASCII_UPPERCASE_A = 65;
const ASCII_UPPERCASE_Z = 90;
const ASCII_LOWERCASE_A = 97;
const ASCII_LOWERCASE_Z = 122;

const asciiMyChar = myChar.charCodeAt(0);

const isAlphabet = ( (asciiMyChar>=ASCII_UPPERCASE_A && asciiMyChar<=ASCII_UPPERCASE_Z) || (asciiMyChar>=ASCII_LOWERCASE_A && asciiMyChar<=ASCII_LOWERCASE_Z) ) ? true : false; // multiple conditions combined with ternary operator.

console.log(`Character: ${myChar} is an alphabet = ${isAlphabet}`);