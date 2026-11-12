// *** Synchronous Callback ***

// Example:1 ↓
function greet(name, callback) 
{
    console.log(`Hello, ${name}!`);
    callback();
}
function sayGoodbye()
{
    console.log("Goodbye See You Later!");
}
greet("lakshay", sayGoodbye);

// Example:2 ↓
// forEach is a built-in array method that takes a callback function as an argument 
// and executes it for each element in the array.
let testResults = ["pass", "fail", "pass", "pass", "skip"];

testResults.forEach(function(result,index)
{
    console.log(`Test ${index}: ${result}`);
});