//*** Callback Function ***//
// A callback function is a function that is passed as an argument to another function
//  and is executed after some operation has been completed.
//  It allows for asynchronous programming and helps in handling tasks that take time to complete,
//  such as fetching data from an API or reading files.

// Example of a callback function

function greetUser(name, callback)
// The greetUser function takes a name and a callback function as parameters
{
    console.log(`Hello, ${name}!`);
    callback();
// The callback function is called after greeting the user
}

// ###### DIFFRENT WAYS TO DEFINE A CALLBACK FUNCTION ######

// 1st Way to define a callback function ↓

//
// This is the callback function that will be passed to greetUser
//    function sayGoodbye()
// {
//     console.log("Goodbye See You Later!");
// }
// greetUser("Alice", sayGoodbye);
// Calling greetUser with "Alice" and the sayGoodbye function as arguments


// 2nd Way to define a callback function ↓
// anonymous

// greetUser("Bob", function()
// {
//     console.log("Goodbye See You Later!");
// });

// 3rd way to define a callback function ↓
// arrow function

greetUser("Lakshay", () =>
{
    console.log("Goodbye See You Later!");
});
