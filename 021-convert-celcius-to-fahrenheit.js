let prompt = require('prompt-sync')();

console.log("Please enter temperature in Celcuis : ");
let celciusTemp = parseFloat(prompt());

let fahrenheitTemp = ((celciusTemp * 9)/5)+32;
console.log(`${celciusTemp} celcius = ${fahrenheitTemp} fahrenheit`);