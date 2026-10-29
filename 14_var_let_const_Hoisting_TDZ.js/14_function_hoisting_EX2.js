//### Example 2: Function  as Expression is NOT Hoisted

//greet();  // TypeError: greet is not a function

var greet = function() {
    console.log("Hi there!");
};

greet();  // "Hi there!" — works here

// WHY? "var greet" is hoisted as undefined.
// Calling undefined() gives TypeError.

