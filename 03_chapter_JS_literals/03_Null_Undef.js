// Topic : NULL and UNDEFINED in JavaScript
/**
 * definition of NULL and UNDEFINED
 * 
 * Null : A variable exists and decalred + value is assigned to it but the value is null, means no value is assigned to the variable
 * 
 * Undefined : A variable exists + declared + but no value is assigned to it, not even a garbage value is assigned to the variable
 */

//1.  UNDEFINED in JavaScript
var x;
console.log(x); // undefined

let y;
y = 10;
console.log(y); // 10

//2. NULL in JavaScript
var audi = null;
console.log(audi); // null

//3. IF you have a function and you are not returning anything from the function 
// then it will return undefined by default

function greet() 
{
    // no return statement
}
//console.log(greet()); // undefined


