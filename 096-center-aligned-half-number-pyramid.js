const prompt = require('prompt-sync')();

console.log("Please enter the number of rows to be printed in the center aligned half number pyramid: ");
const myRows = Number(prompt());

for(let i=1; i<=myRows; i++) {
    for(let j=myRows; j>=1; j--) {
        if(j<=i) {
            process.stdout.write(j+" ");
        }
        else {
            process.stdout.write(" "+" ");
        }
    }
    console.log();
}