// ## Creating Strings ##

// ***** Strings are "IMMUTABLE"---> every string method gives a new string

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320} ms`;  // template literal
console.log(message);

// SINGLE QUOTES
let greet = 'hello';

// DOUBLE QUOTES
let greet2 = "hii";

// SINGLE and DOUBLE quotes both work in same way you can use any one from this 

// MULTI LINE STRING-- using backticks you can create multi line string

let report= `
   test : login
   Status: pass
   Duration : 320ms

`;
console.log(report);