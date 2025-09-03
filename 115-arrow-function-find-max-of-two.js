let getMaxOfTwo = (a, b) => {
    if(a>=b) {
        return a;
    }
    else {
        return b;
    }
};

const prompt = require('prompt-sync')();

console.log("Please enter first number: ");
let firstNum = Number(prompt());

console.log("Please enter second number: ");
let secondNum = Number(prompt());

let largerNumber = getMaxOfTwo(firstNum, secondNum);
console.log(`Larger amongst ${firstNum} and ${secondNum} = ${largerNumber}`);