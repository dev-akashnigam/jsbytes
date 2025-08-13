/*
 * Floor division operator does not exist in JS. 
 * Alternately, the same can be achieved using Math.floor() method.
 */

const dividend = 7;
const divisor = 2;

const divisionResult = dividend/divisor;
const floorDivisionResult = Math.floor(dividend/divisor)

console.log(`${dividend} divided by ${divisor} = ${divisionResult}`);
console.log(`${dividend} floor divided by ${divisor} = ${floorDivisionResult}`);
