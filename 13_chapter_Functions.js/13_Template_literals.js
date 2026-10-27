// NOTE:
// Declared using back ticks `${ }`
// support embedding/ interpolation

function greet(name)
{
    return(`hii ${name}`);
}

let op = greet("rohit");
console.log(op);

//console.log(greet("rahul"));