const prompt = require('prompt-sync')();

console.log("Please enter marks (0-100): ");
const marks = Number(prompt());

let grade;

switch(true) {
    case (marks>=90 && marks<=100): {
        grade = 'A';
        break;
    }
    case (marks>=80 && marks<=89): {
        grade = 'B';
        break;
    }
    case (marks>=70 && marks<=79): {
        grade = 'C';
        break;
    }
    case (marks>=60 && marks<=69): {
        grade = 'D';
        break;
    }
    default: {
        grade = 'E';
    }
}

console.log(`Marks: ${marks} correspond to grade = ${grade}`);

