// 4. NUMERIC SEPARATORS
// Numeric separators are used to make large numbers more readable by adding underscores (_) as separators between groups of digits. 
// They do not affect the value of the number.

let million = 1_000_000; // 1 million
let billion = 1_000_000_000; // 1 billion 
let binary = 0b1010_1010; // binary number with separators
let hexasep= 0xFF_FF_FF; // hexadecimal number with separators

// 5. BigInt
// for arbitarily large integers,
//  we can use BigInt type by appending 'n' at the end of the number
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt literal

// BigInt literal using BigInt constructor+ used in AUTOMATION
let bigintnum1= BigInt("123456789012345678901234567890123456789012"); // BigInt literal using BigInt constructor
let bigintnum2= BigInt(1234567890123456789012345678901234567890); // BigInt literal using BigInt constructor

let number1= BigInt(42); // BigInt literal using BigInt constructor + 42 means how far can we go like to 42 digits here 

console.log(bigintnum1);// output: 1234567890123456789012345678901234567890n
console.log(number1);// output: 42n

