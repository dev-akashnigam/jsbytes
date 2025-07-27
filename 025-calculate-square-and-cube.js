let prompt = require('prompt-sync')();

console.log("Please enter a number : ");
let num = Number(prompt());

let square = num * num;
let cube = num * num * num;

console.log(`Square of number ${num} = ${square}`);
console.log(`Cube of number ${num} = ${cube}`);