const prompt = require('prompt-sync')();

console.log("Please enter the number of rows to be printed in the inverted left aligned half number pyramid: ");
const myRows = Number(prompt())

for(let i=1; i<=myRows; i++) {
    for(let j=myRows; j>=i; j--) {
        process.stdout.write(j+" ");
    }
    console.log();
}