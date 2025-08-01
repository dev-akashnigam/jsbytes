let prompt = require('prompt-sync')();

console.log("Please enter the amount : ");
let principal = Number(prompt());

console.log("Please enter rate of interest (in decimals not percentage) : ");
let rate = Number(prompt());

console.log("Please enter time in years : ");
let time = Number(prompt());

let finalAmount = amount * Math.pow(Math.E, rate*time);
console.log(`Final amount received on investment of amount:${principal} for ${time} years at ${rate} rate of interest = ${finalAmount}`);