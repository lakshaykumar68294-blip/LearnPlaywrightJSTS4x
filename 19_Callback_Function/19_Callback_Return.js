// Callback Return 👇
// It is a value a callback function returns to the function that called it.

// EX=1
function result(a,b,callback)
{
    const final_result = callback(a,b);
    console.log("Final Result is: ", final_result);
}
function operation(a,b)
{
    return a + b;
}
result(5,10,operation); // Final Result is:  15

// EX=2
function calculate(a,b,action)
{
    return  action(a,b);
}
let value = calculate(5,5,function(a,b)
{
    return a * b;
});
console.log("value : ", value ); // 25