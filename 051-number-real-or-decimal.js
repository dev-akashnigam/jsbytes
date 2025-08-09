const prompt = require('prompt-sync')();

console.log("Please enter a number : ");
const myNum = Number(prompt());

if(Number.isInteger(myNum)) {
    console.log("Number is a real number!");
}
else {
    console.log("Number is a decimal number!");
}