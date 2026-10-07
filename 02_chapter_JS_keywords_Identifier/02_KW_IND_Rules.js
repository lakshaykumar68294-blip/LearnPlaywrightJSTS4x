var a = 10;
console.log(a);

var $ = 20;
console.log($); // valid 

var _b = 30;
console.log(_b); // valid

var pp = 40;
console.log(pp); // valid

//var 45 = 50; // invalid, cannot start with a number

var _45 = 50; // valid, can start with underscore
console.log(_45);

var name = "John"; // valid, can start with a letter
var Name = "Doe"; // valid, can start with a letter and is case-sensitive

var lakshay_kumar = "hello "; // valid, can start with a letter 
var lakshay$Kumar = "world"; // valid
var lakshayKumar123= "hello world"; // valid, camelCase is commonly used in JavaScript

//var lakshay-Kumar = "hello world"; // invalid, cannot use hyphen in variable name
//var lakshay kumar = "hello world"; // invalid, cannot use space in variable name

