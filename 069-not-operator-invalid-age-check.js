const prompt = require('prompt-sync')();

console.log("Please enter your age: ");
const myAge = Number(prompt());

if( !(myAge>0 && myAge<=120) ) {
    console.log(`Age: ${myAge} is invalid!`);
}
else {
    console.log(`Age: ${myAge} is valid!`);
}