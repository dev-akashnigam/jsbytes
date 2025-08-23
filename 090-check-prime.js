const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
const myNum = Number(prompt())

let isPrime;

if(myNum<=1) {
    isPrime = false;
}
else if(myNum==2 || myNum==3) {
    isPrime = true;
}
else if(myNum%2 == 0) {
    isPrime = false;
}
else {
    isPrime = true;
    for(let i=3; i<=Number.parseInt(Math.sqrt(myNum)); i+=2) {
        if(myNum%i == 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime) {
    console.log(`Number: ${myNum} is prime.`);
}
else {
    console.log(`Number: ${myNum} is not prime.`);
}

