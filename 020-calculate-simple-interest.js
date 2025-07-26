let prompt = require('prompt-sync')();

console.log("Please enter principal amount : ");
let principalAmt = parseInt(prompt());

console.log("Please enter rate of interest : ");
let rate = parseFloat(prompt());

console.log("Please enter time period : ");
let timePeriod = parseFloat(prompt());

let simpleInterest = (principalAmt * rate * timePeriod)/100;

console.log(`Simple interest earned on investment of ${principalAmt} at ${rate}% for ${timePeriod} time period is: ${simpleInterest}`);