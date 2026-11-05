// *** PROMISE ***👇
// Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

//EX=1
let apiCall = new Promise(function(resolve,reject)
{
    resolve("API Call Success"); // this will be executed if the promise is fulfilled
});

apiCall.then(function(result)
{
     console.log(result); // API Call Success
});

// Ex=2
let testRun = new Promise(function(resolve,reject)
{
    reject("Assertion Failed"); 
});

testRun.then(function(data)
{
   console.log(data); 
}).catch(function(error)
{
    console.log(error); // Assertion Failed
});

