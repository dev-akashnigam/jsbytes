const prompt = require('prompt-sync')();

console.log("Please enter a natural number till where you want the sum: ");
const myNaturalNo = Number(prompt());

let sum = 0;

for(let i=1; i<=myNaturalNo; i++) {
    sum += i;
}

console.log(`Sum of first ${myNaturalNo} natural numbers = ${sum}`);