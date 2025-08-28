const prompt = require('prompt-sync')();

console.log("Please enter the first number: ");
const myFirstNumber = Number(prompt());

console.log("Please enter the second number: ");
const mySecondNumber = Number(prompt());

const biggerNum = Math.max(myFirstNumber, mySecondNumber);
const smallerNum = Math.min(myFirstNumber, mySecondNumber);

let lcm = myFirstNumber * mySecondNumber;
if(biggerNum%smallerNum == 0) {
    lcm = biggerNum;
}
else {
    let multiple = 2;
    while((biggerNum*multiple)%smallerNum!=0) {
        multiple++;
    }
    lcm = biggerNum * multiple;
}
console.log(`LCM of ${myFirstNumber} and ${mySecondNumber} = ${lcm}`);

