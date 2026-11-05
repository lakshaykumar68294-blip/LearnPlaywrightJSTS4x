// finally 
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
}).finally(function()
{
    // always executed whether promise is resolved or rejected
    console.log("Test Run Completed"); // Test Run Completed
});
