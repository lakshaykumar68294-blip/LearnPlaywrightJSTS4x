let fruits = [];
console.log(typeof fruits);

let browsers  = ["Chrome","Firefox","webkit"];
console.log(browsers.length);
// In JS length is "not a function/method" 
// but it is a " Property"

console.log(browsers.at(2));
// at() - supports negative index {-ve} also

console.log(browsers[-1]);
// this gives "undefined" as output 
// because square bracket only takes +ve index 