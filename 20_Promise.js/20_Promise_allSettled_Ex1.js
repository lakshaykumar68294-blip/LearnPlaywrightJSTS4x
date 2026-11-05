let checkAPI1 = Promise.resolve("API OK");
let checkDB2 = Promise.reject("DB DOWN");
let checkServer3 = Promise.resolve("Server OK");
Promise.allSettled([checkAPI1,checkDB2,checkServer3]).then(function(results11)
{
   console.log("All checks:",results11);
}).catch(function(err)
{
    console.log("Failed:", err);
});