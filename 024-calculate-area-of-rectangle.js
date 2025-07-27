let prompt = require('prompt-sync')();

console.log("Please enter length : ");
let length = Number(prompt());

console.log("Please enter breadth : ");
let breadth = Number(prompt());

let areaOfRectangle = length * breadth;
console.log("Area of rectangle having length "+length+" and breadth "+breadth+" = "+areaOfRectangle);