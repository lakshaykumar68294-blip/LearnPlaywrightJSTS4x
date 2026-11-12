
//RULE OF THUMB

//== :---> loose comparison (compares only  value "after"  automatically converting datatype ) 
// === :---> strict comparison (compares value + datatype  +  no data type  converting  ) 

// -- EMPTY string vs 0 vs "0"

console.log(0 == "");// true
console.log(0 == "0"); // true
console.log("0" == "");//flase--( CONCEPT--> transitivitybroken OR Coerced)
console.log(0 === ""); // false
console.log("0" === "");// false

// NOTE -- IN automation always use triple equals(===)