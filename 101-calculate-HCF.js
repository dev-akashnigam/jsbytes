const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
const myFirstNumber = Number(prompt());

console.log("Please enter the second number: ");
const mySecondNumber = Number(prompt());

const smallerNum = Math.min(myFirstNumber, mySecondNumber);
const greaterNum = Math.max(myFirstNumber, mySecondNumber);

let hcf = 1;
if(greaterNum%smallerNum == 0) {
    hcf = smallerNum;
}
else {
    for(let i=smallerNum/2; i>=2; i--) {
        if(greaterNum%i == 0 && smallerNum%i == 0) {
            hcf = i;
            break;
        }
    }
}
console.log(`HCF of ${myFirstNumber} and ${mySecondNumber} = ${hcf}`);