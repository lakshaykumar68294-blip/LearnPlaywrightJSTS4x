// --- All NUMBER types in JS are of type number, 
// there is no int or float type in JS, all are of type number 
// expect BigInt type which is used for very large numbers

// 1 . INTEGERS or INT LITERALS
let a = 10;

// decimal base (10)
let decimal = 42; // decimal number
console.log(typeof(decimal)); // number

// 2. FLOAT or FLOATING POINT LITERALS
let b = 10.5; // float number
let q= -0.8; // negative float number
let r= .5; // float number without leading zero--- valid but avoid for readability
let s= 5.; // float number without trailing zero--- valid but avoid for readability

// 3. Exponential or Scientific Notation
let exp1 = 1.5e6; // 1 * 10^6 = 1000000
let exp2 = 2.5e-3; // 2.5 * 10^-3 = 0.0025
let exp3 = 2E10; // 3.14 * 10^2 = 314
