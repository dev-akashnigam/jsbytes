let prompt = require('prompt-sync')();

//let name = prompt("Please enter your name : \n");
//The above line is commented out since \n (newline) creates issues on some IDEs when used within prompt() function.

console.log("Please enter your name :");
let name = prompt();

console.log(`Your name is : ${name}`);