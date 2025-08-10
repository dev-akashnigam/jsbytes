const prompt = require('prompt-sync')();

console.log(`Please enter a real number: `);
const myNum = Number(prompt());

if(myNum%5 == 0) {
    if(myNum%11 == 0) {
        console.log(`Number: ${myNum} is divisible by both 5 and 11.`);
    }
    else {
        console.log(`Number: ${myNum} is divisible by 5 but not by 11.`);
    }
}
else {
    if(myNum%11 == 0) {
        console.log(`Number: ${myNum} is NOT divisible by 5 but divisible by 11.`);
    }
    else {
        console.log(`Number: ${myNum} is NOT divisible by both 5 and 11.`);
    }
}