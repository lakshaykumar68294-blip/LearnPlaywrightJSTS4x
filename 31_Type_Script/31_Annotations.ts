// Arrow Function Annotations 
const multiply = (a : number , b : number) : number => a*b;

// Object Annotations
let user :{name : string ; age : number} =
{
    name : "Lakshay",
    age : 34
};

// Function Annotations
function sayHello(msg: string): void 
{
    console.log(msg);
}

function greet(name: string): string 
{
    return `Hello, ${name}!`;
}