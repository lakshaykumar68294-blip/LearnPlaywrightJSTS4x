class BaseTest
{
    setup()
    {
        console.log("Base : Open Browser")
    }
}
class APITest extends BaseTest
{
    setup()
    {
        console.log("APITest : Open Browser")
        super.setup(); //👍done
    }
}
let t1 = new APITest();
t1.setup();
//super.setup(); 👇
// put this inside method of child class 
// OR anywhere inside the child class  