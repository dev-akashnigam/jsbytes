let getSquare = function (num) {
    let square = num * num;
    return square;
};

const prompt = require('prompt-sync')();

console.log("Please enter an integer: ");
const myNum = Number(prompt());

const square = getSquare(myNum);
console.log(`Square of number: ${myNum} = ${square}`);