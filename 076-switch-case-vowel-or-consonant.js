const prompt = require('prompt-sync')();

console.log("Please enter an alphabet: ")
const myAlphabet = prompt().charAt(0);

const myAlphabetLowerCase = myAlphabet.toLowerCase();

switch(true) {
    case (myAlphabetLowerCase=='a' || myAlphabetLowerCase=='e' || myAlphabetLowerCase=='i' || myAlphabetLowerCase=='o' || myAlphabetLowerCase=='u'): {
        console.log(`Alphabet: ${myAlphabet} is = vowel.`);
        break;
    }
    default: {
        console.log(`Alphabet: ${myAlphabet} is = consonant.`);
    }
}

