const a = 1;
const b = "1";

console.log(a == b);   // true

console.log(a === b); //false
console.log("-----------");

const c = a;
console.log(c == a); // true
console.log(c === a); // true
console.log("-----------");

function sum() {
    return (a, b) => { a + b };
};

const sum1 = sum();
const sum2 = sum();

console.log(sum1 === sum2); // f 
console.log(sum1 === sum1); // t
console.log(sum2 === sum2); // t
console.log("-----------");
const sum3 = sum1;
console.log(sum3 === sum1); // t
console.log(sum3 === sum2); // f
console.log("-----------");

const sum4 = sum1();
console.log(sum4 === sum1); //f

