const prompt = require('prompt-sync')();

console.log("Please enter the number of rows to be printed in the left aligned half number pyramid: ");
const myRows = Number(prompt())

for(let i=1; i<=myRows; i++) {
    for(let j=1; j<=i; j++) {
        process.stdout.write(j+" ");
    }
    console.log();
}