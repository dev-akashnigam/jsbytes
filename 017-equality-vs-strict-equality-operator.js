let charFive = '5';
let intFive = 5;
let stringFive = "5";

let boolFalse = false;
let intZero = 0;

let charAndIntFiveComparisonWithEqualityOperator = charFive == intFive;
let charAndIntFiveComparisonWithStrictEqualityOperator = charFive === intFive;

let stringAndIntFiveComparisonWithEqualityOperator = stringFive == intFive;
let stringAndIntFiveComparisonWithStrictEqualityOperator = stringFive === intFive;

let falseAndZeroComparisonWithEqualityOperator = boolFalse == intZero;
let falseAndZeroComparisonWithStrictEqualityOperator = boolFalse === intZero;

console.log(`'${charFive}' == ${intFive} : ${charAndIntFiveComparisonWithEqualityOperator}`);
console.log(`'${charFive}' === ${intFive} : ${charAndIntFiveComparisonWithStrictEqualityOperator}`);

console.log(`"${stringFive}" == ${intFive} : ${stringAndIntFiveComparisonWithEqualityOperator}`);
console.log(`"${stringFive}" === ${intFive} : ${stringAndIntFiveComparisonWithStrictEqualityOperator}`);

console.log(`${boolFalse} == ${intZero} : ${falseAndZeroComparisonWithEqualityOperator}`);
console.log(`${boolFalse} === ${intZero} : ${falseAndZeroComparisonWithStrictEqualityOperator}`);

