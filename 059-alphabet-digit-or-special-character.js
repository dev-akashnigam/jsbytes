const prompt = require('prompt-sync')();

console.log("Please enter a character: ");
const myChar = prompt().charAt(0);

const asciiValueMyChar = myChar.charCodeAt(0);

const ascii_A = 65;
const ascii_Z = 90;
const ascii_a = 97;
const ascii_z = 122;
const ascii_0 = 48;
const ascii_9 = 57;

if( (asciiValueMyChar>=ascii_A && asciiValueMyChar<=ascii_Z) || (asciiValueMyChar>=ascii_a && asciiValueMyChar<=ascii_z) ) {
    console.log(`Character: ${myChar} is an alphabet!`);
}
else if( (asciiValueMyChar>=ascii_0 && asciiValueMyChar<=ascii_9) ) {
    console.log(`Character: ${myChar} is a digit!`);
}
else {
    console.log(`Character: ${myChar} is a special character!`);
}
