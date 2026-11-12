// NORMAL FUNCTION

function greet(a,b)
{
    return(a + b);
}

// AAROW FUNCTION
// If you want to make normal function as arrow function :
// 1.. remove functionn keyword
// 2.. remove return keyword
// 3.. remove curly braces  + use the =>
// 4.. when multiple statements use curly braces

let greet2 = (a,b) => (a+b);
console.log(greet2(10,10));