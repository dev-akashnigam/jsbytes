const prompt = require('prompt-sync')();

console.log("Please enter the number for which you need factorial: ");
const myNum = Number(prompt());

let factorial = 1;
for(let i=myNum; i>=1; i--) {
    factorial *= i;
}

console.log(`Factorial of ${myNum} = ${factorial}`);