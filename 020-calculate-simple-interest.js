let prompt = require('prompt-sync')();

console.log("Please enter principal amount : ");
let principalAmt = Number(prompt());

console.log("Please enter rate of interest : ");
let rate = Number(prompt());

console.log("Please enter time period : ");
let timePeriod = Number(prompt());

let simpleInterest = (principalAmt * rate * timePeriod)/100;

console.log(`Simple interest earned on investment of ${principalAmt} at ${rate}% for ${timePeriod} time period is: ${simpleInterest}`);