const prompt = require('prompt-sync')();

console.log("Please enter the number of rows to be printed in Floyd's triange: ");
const myRows = Number(prompt())

let currentNumToPrint = 1;
for(let i=1; i<=myRows; i++) {
    for(let j=1; j<=i; j++) {
        process.stdout.write(currentNumToPrint+" ");
        currentNumToPrint++;
    }
    console.log();
}