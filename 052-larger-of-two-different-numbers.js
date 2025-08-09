const prompt = require('prompt-sync')();

console.log("Please enter a number : ");
let firstNum = Number(prompt());

console.log("Please enter another number : ");
let secondNum = Number(prompt());

if(firstNum > secondNum) {
    console.log(`${firstNum} is greater than ${secondNum}`);
}
else {
    console.log(`${secondNum} is greater than ${firstNum}`);
}