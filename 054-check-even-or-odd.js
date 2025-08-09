const prompt = require('prompt-sync')();

console.log("Please enter a real number : ");
const my_num = Number(prompt());

if(my_num%2 == 0) {
    console.log(`Even number!`);
}
else {
    console.log(`Odd number!`);
}