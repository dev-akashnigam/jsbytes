const prompt = require('prompt-sync')();

console.log("Please enter a number : ");
let myNum = Number(prompt());

if(myNum > 0) {
    console.log(`Number: ${myNum} is greater than 0.`);
}
else if(myNum == 0) {
    console.log(`Number: ${myNum} is equal to 0.`);
}
else {
    console.log(`Number: ${myNum} is lesser than 0.`);
}