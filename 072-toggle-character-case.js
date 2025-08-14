const prompt = require('prompt-sync')();

console.log("Please enter a character: ");
const myChar = prompt().charAt(0);

let toggledCaseChar;

if(myChar === myChar.toLowerCase()) {
    toggledCaseChar = myChar.toUpperCase();
}
else {
    toggledCaseChar = myChar.toLowerCase();
}

console.log(`Character: ${myChar} on case toggling becomes = ${toggledCaseChar}`);