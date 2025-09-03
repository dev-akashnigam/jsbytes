function printTable(num) {
    for(let i=1; i<=10; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt())

printTable(myNum);
