const prompt = require('prompt-sync')()

console.log("Please enter a number: ");
const myNum = Number(prompt());

if( !(myNum>=0) ) {
    console.log(`${myNum} is negative!`);
}
else {
    console.log(`${myNum} is positive!`);
}