// var : actually a traitor OR cheater
// let : sincere person
// const : just constant which will never change

// LET -- Block Scoped
let a = 10; // global scope
console.log(a); // 10

function printHello()
{
    console.log("hello THE_TESTING_ACADEMY");
    let a = 20; // local scope
    console.log(a);// 20
    if(true)
        {
            let a = 30; // local scope
            console.log(a); //30
        }
    console.log(a);// 20
}

printHello();