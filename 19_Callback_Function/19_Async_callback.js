// *** Aysnchronous Callback Function ***

console.log(" Test : 1 Started");

setTimeout(function()  
{
    console.log(" Test : 2 Started");
}, 5000);

console.log(" Test : 3 Started");

// setTimeout is a built-in function that takes a callback function as an argument 
// and executes it after a specified delay (in milliseconds).