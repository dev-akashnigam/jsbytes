let isPalindrome = function (num) {
    const originalNum = num;

    let lastDigit;
    let reversedNum = 0;

    while(num!=0) {
        lastDigit = num % 10;
        reversedNum = (reversedNum * 10) + lastDigit;

        num = Math.floor(num / 10);
    }

    return reversedNum==originalNum;
};

const prompt = require('prompt-sync')();

console.log("Please enter a number: ");
let myNum = Number(prompt());

let isNumPalindrome = isPalindrome(myNum);

console.log(`Number: ${myNum} is palindrome = ${isNumPalindrome}`);