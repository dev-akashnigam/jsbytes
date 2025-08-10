const prompt = require('prompt-sync')();

console.log("Please enter marks obtained in the first subject: ");
const marksSubject1 = Number(prompt());

console.log("Please enter marks obtained in the second subject: ");
const marksSubject2 = Number(prompt());

console.log("Please enter marks obtained in the third subject: ");
const marksSubject3 = Number(prompt());

console.log("Please enter marks obtained in the fourth subject: ");
const marksSubject4 = Number(prompt());

console.log("Please enter marks obtained in the fifth subject: ");
const marksSubject5 = Number(prompt());

const percentage = ((marksSubject1 + marksSubject2 + marksSubject3 + marksSubject4 + marksSubject5)/500)*100;

let grade;

if(percentage >= 90) {
    grade = 'A';
}
else if (percentage>=80 && percentage<90) {
    grade = 'B';
}
else if (percentage>=70 && percentage<80) {
    grade = 'C';
}
else if (percentage>=60 && percentage<70) {
    grade = 'D';
}
else if (percentage>=40 && percentage<60) {
    grade = 'E';
}
else {
    grade = 'F';
}

console.log(`Grade for percentage: ${percentage} = ${grade}`)