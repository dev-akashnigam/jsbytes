const prompt = require('prompt-sync')();

console.log("Please enter the number to be checked for perfect square: ");
const myNum = Number(prompt());

const squareRootOfNum = Math.sqrt(myNum);

if(squareRootOfNum == Math.floor(squareRootOfNum)) {
    console.log(`${myNum} is a perfect square.`);
}
else {
    console.log(`${myNum} is NOT a perfect square.`);
}