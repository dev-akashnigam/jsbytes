const prompt = require('prompt-sync')();

console.log("Please enter a number to determine if it belongs to fibonacci sequence: ");
const myNum = Number(prompt());

const fiveNSquare = 5 * myNum * myNum;
const fiveNSquarePlus4 = fiveNSquare + 4;
const fiveNSquareLess4 = fiveNSquare - 4;

const integerSquareRootOfFiveNSquarePlus4 = Math.floor(Math.sqrt(fiveNSquarePlus4));
const integerSquareRootOfFiveNSquareLess4 = Math.floor(Math.sqrt(fiveNSquareLess4));

const isFiveNSquarePlus4PerfectSquare = integerSquareRootOfFiveNSquarePlus4*integerSquareRootOfFiveNSquarePlus4==fiveNSquarePlus4;
const isFiveNSquareLess4PerfectSquare = integerSquareRootOfFiveNSquareLess4*integerSquareRootOfFiveNSquareLess4==fiveNSquareLess4;

if(isFiveNSquarePlus4PerfectSquare || isFiveNSquareLess4PerfectSquare) {
    console.log(`${myNum} is a fibonacci number.`);
}
else {
    console.log(`${myNum} is NOT a fibonacci number.`);
}