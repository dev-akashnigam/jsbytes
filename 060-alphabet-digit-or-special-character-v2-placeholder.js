/*
JavaScript does not have built-in methods equivalent to Java's Character.isLetter() or Character.isDigit() 
for single-character classification. Java provides dedicated functions like isLetter(char) and isDigit(char), 
but JavaScript developers must use alternatives:

Regular expressions: For letters, use /[a-zA-Z]/.test(char); for digits, /[0-9]/.test(char). This is the idiomatic JavaScript solution.

Regex based solution to be added later after understanding regex.
*/