if(true) {
    let a = 10; // block scope
    var b = 20; // function scope if within function else global scope
    const c = 30; // block scope
}

console.log(`b = ${b}`); // b = 20 gets printed
console.log(`a = ${a}`); // ReferenceError: a is not defined
console.log(`c = ${c}`); // ReferenceError: c is not defined

