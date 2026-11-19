// "Run Time Polymorphism"
//       👇
//  Method Overriding

class BaseTest
{
    setUp()
    {
        console.log("Base : Open Browser")
    }
}
class APITest extends BaseTest
{
    setUp()
    {
        console.log("API : Open Browser")
    }
}
let base = new BaseTest();
let API = new APITest();
base.setUp(); // Base : Open Browser
API.setUp();  // API : Open Browser

