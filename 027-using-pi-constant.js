let prompt = require('prompt-sync')();

console.log("Please enter the radius of circle : ");
let radius = Number(prompt());

let circumference = 2 * Math.PI * radius;
console.log(`Circumference of circle having radius ${radius} = ${circumference}`);
