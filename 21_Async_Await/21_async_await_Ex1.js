// An async function always returns a promise.
// await reads the resolved value inside another async function.

// IMP NOTE👇
// The one rule: If a function calls another function that returns a promise
// and needs its result, the calling function must be async and use await on that call.

function apiRequest()// Promise returning function
{
    return new Promise(function(reslove)
    {
         reslove({ Status : 200})
    });
}

async function runAPIRequest() // calling function which calls promise returning function
{
       let response = await apiRequest();
       console.log("Status:",response.Status);
}

runAPIRequest();