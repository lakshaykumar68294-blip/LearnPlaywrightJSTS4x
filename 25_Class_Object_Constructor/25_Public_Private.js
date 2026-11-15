class Browser
{
    constructor(name)
    {
        this.name = name;
        this.isOpen = true;
        console.log(name  +  " launched")
    }
    startBrowser()
    {
        console.log("starting the browser")
    }
    closeBrowser()
    {
        console.log("starting the browser")
    }
}

let obj_1 = new Browser("Brave");
let obj_2 = new Browser("Edge");
console.log(obj_1.isOpen)
obj_1.startBrowser();
obj_2.closeBrowser();
