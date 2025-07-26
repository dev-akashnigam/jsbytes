let prompt = require('prompt-sync')();

console.log("Please enter first number : ");
let num1 = parseInt(prompt());

console.log("Please enter second number : ");
let num2 = parseInt(prompt());

let sum = num1 + num2;

console.log("Sum of "+num1+" and "+num2+" : "+sum);