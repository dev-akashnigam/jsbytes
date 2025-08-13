const prompt = require('prompt-sync')();

console.log("Please enter a year: ");
const myYear = Number(prompt());

const isLeapYear = (myYear%100 == 0) ? ( (myYear%400 == 0) ? true : false ) : (myYear%4 == 0) ? true : false;

console.log(`Year: ${myYear} is a leap year = ${isLeapYear}`);