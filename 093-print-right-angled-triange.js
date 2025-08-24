const prompt = require('prompt-sync')();

console.log("Please enter the number of rows to print in the right angled triangle.");
let myRows = Number(prompt());

for(let i=1; i<=myRows; i++) {
    for(let j=1; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}