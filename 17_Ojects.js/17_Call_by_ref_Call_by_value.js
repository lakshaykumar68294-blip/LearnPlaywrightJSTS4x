// ### Call by Value ###:

// [Primitives] String, Numbers, Boolean, Null, Undefined, Symbol, BigInt (called by value)
// [PASSED]: Isolated copy of actual value
// [ORIGINAL]: Completely untouched
// [Memory]: Copy resides in new memory space

let a = 10;
let b = a;
b = 99;
console.log(a); // 10
console.log(b); // 99

// ### Call by Reference OR Sharing: 
// objects, arrays, functions
// [Passed]: A copy of memory address (reference) of original object
// [Original]: Can be changed if its properties are changed
// [Memory]: Both point to same variable
// (Change in one or the other causes change in both, i.e. "original" & "copy")

let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); // 99