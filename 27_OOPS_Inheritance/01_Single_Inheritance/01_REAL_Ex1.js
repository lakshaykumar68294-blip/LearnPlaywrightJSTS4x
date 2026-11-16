class BasePage
{
    constructor(name)
    {
        this.name = name;
    }
    open()
    {
        console.log("Opening the page")
    }
    close()
    {
        console.log("Closing the page")
    }
}
class LoginPage extends BasePage{}

let obj = new LoginPage();
obj.open();
obj.close();