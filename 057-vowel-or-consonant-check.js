const prompt = require('prompt-sync')();

console.log(`Please enter a character: `);
const myChar = prompt().charAt(0);

if(myChar == 'A' || myChar == 'a' || myChar == 'E' || myChar == 'e' || myChar == 'I' || myChar == 'i' || myChar == 'O' || myChar == 'o' || myChar == 'U' || myChar == 'u') {
    console.log(`Character: ${myChar} is a vowel.`);
}
else {
    console.log(`Character: ${myChar} is a consonant.`);
}