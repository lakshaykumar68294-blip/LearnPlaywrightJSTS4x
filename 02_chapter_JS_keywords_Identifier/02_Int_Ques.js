// ---- JAVA SCRIPT IDENTIFIER RULES ----{IQ}

let firstName = "John"; // valid, can start with a letter
let _lastName = "Doe"; // valid, can start with an underscore
let $age = 30; // valid, can start with a dollar sign


let item1 = "apple"; // valid,  letter -> then-> digit
let _item2 = "banana"; // valid, underscore -> then-> letter
//let -item3 = "orange"; // invalid, hyphen is not allowed in variable name
let $item3 = "orange"; // valid, dollar sign -> then-> letter


//let 1item = "grape"; // invalid, cannot start with a digit

//let function = "my var"; // invalid, cannot use reserved keywords as variable names

// UNICODE characters are allowed in variable names, but it's not common practice to use them. For example:
let café = "coffee";// unicode letter é is allowed
let 变量 = "variable"; // valid, using Chinese characters
let π = 3.14; // valid, using Greek letter pi
let \u0041= "unicode escape of A "; // valid
let \u005f = "unicode escape of _ "; // valid


//let my@firstName = "John"; // invalid, @ is not allowed in variable names
// let my-firstName = "John"; // invalid, hyphen is not allowed in variable names
//let my firstName = "John"; // invalid, space is not allowed in variable names
//let my#firstName = "John"; // invalid, # is not allowed in variable names
//let my!firstName = "John"; // invalid, ! is not allowed in variable names