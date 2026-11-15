class TestCase
{
    constructor(name_given,status_given,priority_given)
    {
        this.name = name_given;
        this.status = status_given;
        this.priority = priority_given;
    }
    
    display()
    {
        console.log(this.name +  "-"  + this.status +  "-"  +  this.priority );
    }
}

let logintest_ref = new TestCase("Login","PASS","P0");
let signuptest_ref = new TestCase("Signup","FAIL","P1");

logintest_ref.display();
signuptest_ref.display();



