let prompt = require('prompt-sync')();

console.log("Please enter a character : ");
let ch = prompt().charAt(0);

console.log(`The character you have entered is : ${ch}`);

let asciiValue = ch.charCodeAt(0);

console.log(`The ascii value of character ${ch} is : ${asciiValue}`);