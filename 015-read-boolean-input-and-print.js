let prompt = require('prompt-sync')();

console.log("Do you know french language (true/false) : ");
let doYouKnowBooleanLanguage = prompt().trim().toLowerCase() === "true";

console.log(`You entered : ${doYouKnowBooleanLanguage}`);
