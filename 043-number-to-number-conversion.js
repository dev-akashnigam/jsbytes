const realNo = 78;
const decimalNo = 89.2145;

const floatConvertedFromInteger = Number.parseFloat(realNo);
const integerConvertedFromFloat = Number.parseInt(decimalNo);

console.log(`Real Number: ${realNo} converted to decimal number becomes = ${floatConvertedFromInteger}`);
console.log(`Decimal Number: ${decimalNo} converted to real number becomes = ${integerConvertedFromFloat}`);