const prompt = require('prompt-sync')();

console.log("Please enter the number of terms of fibonacci series to print: ")
let myTotalNoOfTermsToPrint = Number(prompt())

let firstTerm = 0;
let secondTerm = 1;

if(myTotalNoOfTermsToPrint == 0) {
    return;
}
else if(myTotalNoOfTermsToPrint == 1) {
    process.stdout.write(firstTerm+" ");
}
else if(myTotalNoOfTermsToPrint == 2) {
    process.stdout.write(firstTerm+" "+secondTerm);
}
else {
    let currentCountOfTerms = 2;
    process.stdout.write(firstTerm+" "+secondTerm+" ");

    while(currentCountOfTerms < myTotalNoOfTermsToPrint) {
        let nextTerm = firstTerm + secondTerm;
        process.stdout.write(nextTerm+" ");
        firstTerm = secondTerm;
        secondTerm = nextTerm;
        currentCountOfTerms++;
    }
}
