// [NOTE 1]
//  What matters is that the callback is defined ↓
// or at least available before it is passed in or called

function sayBye() {
  console.log("Goodbye");
}


function greet(name, callback)
{
  console.log("Hello", name);
  callback();
}


greet("Rahul", sayBye); // Hello Rahul Goodbye