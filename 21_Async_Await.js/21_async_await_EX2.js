// function test()
// {
//     return "pass";
// }

// test().then(function(result)
// {
//     console.log(result);
// });
//TypeError: test(...).then is not a function
// This function gives type error because this function returns a normal value,
// and we are calling this function like a promise.

async function testAPI()
{
    try
    {
        let result = await Promise.reject("503 service unavailable");
        console.log("Result :",result);
    }
    catch(error)
    {
        console.log("Error:",error);
    }
    finally
    {
        console.log("Clean UP !");
    }
}

testAPI();
