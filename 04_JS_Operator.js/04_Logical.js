// logical operator 
// && (AND) -- return " TRUE " if "both are true"
// ||(OR)  -- return " TRUE " if  "one of the two is true"
// !(NOT) used with =(or without =)  -- opposite return "true" if false or vice versa

let a = true;
let b = false;
let c = true;

console.log(a && b); // false
console.log(a && c); //true
console.log(b || c); // true
console.log(a != b); // true
console.log( a != c);// false
console.log(!a);// false