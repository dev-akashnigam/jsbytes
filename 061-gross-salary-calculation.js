/*
Objective:
Write a program that takes marks for five subjects, computes the total and percentage, and assigns a grade based on a defined percentage–grade 
mapping using an if-else ladder.

Input:
Prompt the user to enter marks obtained in five different subjects (e.g., Math, English, Science, Social Studies, Computer).
You may assume each subject is out of 100 marks.
Data type can be int or float depending on whether marks can have decimals.

Grade Assignment:
90% and above:	A
80% to <90%  :	B
70% to <80%  :	C
60% to <70%	 :  D
40% to <60%	 :  E
Below 40%	 :  F
*/

const prompt = require('prompt-sync')();

console.log("Please enter basic salary: ");
const myBasicSalary = Number(prompt());

let hraPercentage;
let daPercentage;
let hraAmount;
let daAmount;

if(myBasicSalary<=10000) {
    hraPercentage = 20;
    daPercentage = 80;
}
else if(myBasicSalary>10000 && myBasicSalary<=20000) {
    hraPercentage = 25;
    daPercentage = 90;
}
else {
    hraPercentage = 30;
    daPercentage = 95;
}

hraAmount = myBasicSalary * (hraPercentage/100.0);
daAmount = myBasicSalary * (daPercentage/100.0);

const grossSalary = myBasicSalary + hraAmount + daAmount;

console.log(`Basic Salary: ${myBasicSalary}`);
console.log(`HRA (${hraPercentage}%): ${hraAmount}`);
console.log(`DA (${daPercentage}%): ${daAmount}`);
console.log(`Gross Salary: ${grossSalary}`);