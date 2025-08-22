const prompt = require('prompt-sync')();

console.log("Please enter the number till which you want even numbers to be printed: ");
const myNum = Number(prompt());

for(let i=2; i<=myNum; i+=2) {
    console.log(i);
}