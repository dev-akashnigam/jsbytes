const prompt = require('prompt-sync')();

console.log("Please enter a year : ");
const myYear = Number(prompt());

if(myYear%100 == 0) {
    if(myYear%400 == 0) {
        console.log(`Year: ${myYear} is a leap year!`);
    }
    else {
        console.log(`Year: ${myYear} is NOT a leap year!`);
    }
}
else {
    if(myYear%4 == 0) {
        console.log(`Year: ${myYear} is a leap year!`);
    }
    else {
        console.log(`Year: ${myYear} is NOT a leap year!`);
    }
}
