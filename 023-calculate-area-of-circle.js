let prompt = require('prompt-sync')();

console.log("Please enter the radius of circle : ");
let radius = Number(prompt());

let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log(`Area of circle with radius ${radius} = ${areaOfCircle}`);