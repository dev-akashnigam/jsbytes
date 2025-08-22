const prompt = require('prompt-sync')();

console.log("Please enter the number till where you want the natural numbers to get printed: ");
const myNum = Number(prompt());

for(let i=1; i<=myNum; i++) {
    process.stdout.write(i+" ");
}

