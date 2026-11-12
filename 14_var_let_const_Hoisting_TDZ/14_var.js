// var : actually a traitor OR cheater
// let : sincere person
// const : just constant which will never change

// VARIABLE-- Func. Scoped
var a = 10;
console.log(a);

function printHello()
{
    console.log("hello THE_TESTING_ACADEMY");
    var a = 20;
    console.log(a);
    if(true)
        {
            var a = 30;
            console.log(a);
        }
    console.log(a);
}

printHello();