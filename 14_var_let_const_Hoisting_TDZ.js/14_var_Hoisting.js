console.log(greeting);
var greeting = "Hello";
console.log(greeting);


// Behind the scenes:
// var greeting;              <-- hoisted with undefined(done by JS engine)
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"