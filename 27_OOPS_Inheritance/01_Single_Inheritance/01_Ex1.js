class Father
{
    eat()
    {
        console.log("Hii, i am eating")
    }
}
class Son extends Father
{
    walk()
    {
        console.log("hii, i am walking")
    }
}
let s = new Son();
s.eat();
s.walk();
let f = new Father();
f.eat();
//f.walk();// cannot access Son class method