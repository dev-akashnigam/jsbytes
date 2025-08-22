const prompt = require('prompt-sync')();

console.log("Please enter the number for which you want to print multiplication table: ");
const myNum = Number(prompt());

for(let i=1; i<=10; i++) {
    console.log(`${myNum} X ${i} = ${myNum * i}`);
}