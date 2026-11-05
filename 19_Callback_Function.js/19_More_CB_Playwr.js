// Callback function related to Playwright

function test(item, callMeWhenDone) 
{
    console.log("Hi start the Testcase", item);
    callMeWhenDone();
}

test("Verify the login page is working", async (page) =>
    {
       console.log("Hi, I am done with the test case"); 
    });

// async (page) => this callback function is passed as an argument to the test function 
// and will be executed after the test case is completed.
