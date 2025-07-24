let prompt = require('prompt-sync')();

console.log("Please enter a ASCII number");
let ascii = parseInt(prompt(), 10);

console.log("The ASCII number you have entered is :");
console.log(ascii);

let ch = String.fromCharCode(ascii);

console.log(`Character corresponding to the ascii valiue ${ascii} is : `);
console.log(ch);