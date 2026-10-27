// Function as Expression

function greet(name)
{
    return(`hello, ${name}`);
}


// also called --- Anonymous function
// when you define function "WITHOUT" a name and assign function into a variable
// variable name act as function name
const greet1 = function(name)
{
    return(`hello, ${name}`);
}

console.log(greet("Amit"));
console.log(greet1("Amit"));