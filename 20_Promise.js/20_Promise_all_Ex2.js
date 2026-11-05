// Promise.all() Example 2
let checkAPI = Promise.resolve("API OK");
let checkDB = Promise.resolve("DB OK");
let checkServer = Promise.resolve("Server OK");
Promise.all([checkAPI,checkDB,checkServer]).then(function(results)
{
   console.log("All checks:",results);
});

// Promise.all() Example 3
let checkAPI1 = Promise.resolve("API OK");
let checkDB2 = Promise.reject("DB DOWN");
let checkServer3 = Promise.resolve("Server OK");
Promise.all([checkAPI1,checkDB2,checkServer3]).then(function(results11)
{
   console.log("All checks:",results11);
}).catch(function(err)
{
    console.log("Failed:", err);
});
