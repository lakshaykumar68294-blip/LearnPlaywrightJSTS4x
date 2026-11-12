// Retry Pattern with Async/Await - REAL QA
// One simulated API succeeds after two failures;
//  another exhausts its retries.

// ## FLAKY TEST CASE ##
// These are the test cases that sometimes fail and sometimes pass 



function createFlakyAPIs(successAttempt)
{
     let attempt = 0;
     return function()
     {
       attempt++;
       if(attempt < successAttempt)
        {
            return Promise.reject("Attempt "+ attempt + ": failed")
        }
        else
        {
             return Promise.resolve("Attempt "+ attempt + ": successful")
        }
     }
}

async function retryTesting()
{
     let s = await createFlakyAPIs(1);
     console.log(s());
}

retryTesting();