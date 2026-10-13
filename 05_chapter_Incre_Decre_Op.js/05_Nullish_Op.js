// NULLISH COALESCING OPERATOR--??
// only work and replace value when value is NULL


let value = null;
let new_value = value ?? " hello world";
console.log(new_value);

let api_Response = null;
let responseData = api_Response?? "{}";
console.log(responseData);

// INVALID
//let api_Response = "hello";
//let responseData = api_Response?? "{}";
//console.log(responseData);