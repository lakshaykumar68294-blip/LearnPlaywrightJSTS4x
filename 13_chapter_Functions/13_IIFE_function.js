// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// They don't need to be called
// These function call itself

// NORMAL FUNCTION
function greet()
{
    console.log("This a normal function");
}
greet();

// IIFE
(function()
{
    console.log("This is IIFE function 1---ANONYMOUS func.");
})();

// IIFE
(() =>
{
   console.log("This is IIFE function 2-- ARROW func.")
})();