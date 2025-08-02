const realNoText = "123";
const decimalNoText = "3.145236";

const realNoNumber = Number(realNoText);
const decimalNoNumber = Number(decimalNoText);

const realNoInteger = parseInt(realNoText);
const decimalNoFloat = parseFloat(decimalNoText);

console.log(`Number corresponding to text "${realNoText}" = ${realNoNumber}`);
console.log(`Number corresponding to text "${decimalNoText}" = ${decimalNoNumber}`);

console.log(`Integer corresponding to text "${realNoText}" = ${realNoInteger}`);
console.log(`Float corresponding to text "${decimalNoText}" = ${decimalNoFloat}`);