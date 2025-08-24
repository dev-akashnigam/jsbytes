const prompt = require('prompt-sync')();

console.log("Please enter the number of rows to be printed in the inverted right angled triangle: ");
let myRows = Number(prompt());

for(let i=myRows; i>=1; i--) {
    for(let j=1; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}