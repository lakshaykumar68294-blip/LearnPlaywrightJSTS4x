//6.SPECIAL NUMERIC VALUES 
// infinity
let inf = Infinity; // positive infinity
let inf1= 1/0; // positive infinity
console.log(inf);

let inf2= -1/0; // negative infinity
console.log(inf);

console.log(typeof(inf)); // number

// NaN (Not a Number)- results from an invalid mathematical operation,
//  such as dividing zero by zero or taking the square root of a negative number.
let nanValue = NaN; // Not a Number
let nanValue1= 0/0;
let nanValue2= "hello" * 2; // output: NaN

console.log(nanValue1); // output: NaN
console.log(typeof(nanValue1)); // output: number
console.log(typeof(nanValue2)); // output: number