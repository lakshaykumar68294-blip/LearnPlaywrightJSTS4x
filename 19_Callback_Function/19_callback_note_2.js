// [NOTE 2]
// callback defined after the call, which only works for function declarations,↓
// not for function expressions or arrow functions ↓
// Function expressions and arrow functions stored in const or let are not hoisted in the same way.


greet("Riya", sayBye);

function greet(name, callback)
{
  console.log("Hello", name);
  callback();
}

function sayBye()
{
  console.log("Good bye");
}