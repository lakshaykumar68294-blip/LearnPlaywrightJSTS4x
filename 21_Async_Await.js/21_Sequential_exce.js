// Sequential Function Calling in async and await👇

function apiCall(name)
{
   return new Promise(function(resolve)
   {
     setTimeout(function()
     {
       resolve (name , "OK DONE");
     },1000);
   });
}

async function sequentialTest()
{
   console.log(" starting of the test")
   let start = Date.now();

   let r1 = await apiCall("login");
   console.log(r1);

   
    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

sequentialTest();

// NOTE👇
// Date.now() returns the current time in milliseconds since
// January 1, 1970 (UTC). It is a plain number that increases over time.
// Save it before a task and subtract it after the task to measure
// how long the task took: Date.now() - start