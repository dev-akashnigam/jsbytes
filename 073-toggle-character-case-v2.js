const prompt = require('prompt-sync')();

console.log("Please enter a character: ");
const myChar = prompt().charAt(0);

const asciiMyChar = myChar.charCodeAt(0);

let toggledCaseChar;

if(asciiMyChar>=65 && asciiMyChar<=90) {
    toggledCaseChar = String.fromCharCode(asciiMyChar + 32);
}
else {
    toggledCaseChar = String.fromCharCode(asciiMyChar - 32);
}

console.log(`Character: ${myChar} on case toggling becomes = ${toggledCaseChar}`);
