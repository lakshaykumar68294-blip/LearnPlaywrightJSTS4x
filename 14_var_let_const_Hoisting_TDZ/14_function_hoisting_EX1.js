// #### EXAMPLE:1 - FUNCTION DECLARATION ARE FULLY HOISTED

sayHello();  // "Hello, World!" — works perfectly!

function sayHello() {
    console.log("Hello, World!");
}

// NOTE : ### Function Declarations are FULLY Hoisted ###
//  Function declarations are completely hoisted — both name AND body.
//  You can call them BEFORE they appear in code.

