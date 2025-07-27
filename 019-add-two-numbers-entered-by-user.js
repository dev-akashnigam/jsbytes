let prompt = require('prompt-sync')();

console.log("Please enter first number : ");
let num1 = Number(prompt());

console.log("Please enter second number : ");
let num2 = Number(prompt());

let sum = num1 + num2;

console.log("Sum of "+num1+" and "+num2+" : "+sum);