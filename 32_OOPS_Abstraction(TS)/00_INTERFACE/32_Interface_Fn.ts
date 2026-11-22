// Interface can also have function (only signature/definition)
interface Calculate
{
    add(a:number,b:number) :number 
    substract(a:number,b:number) :number 
}

// implementation of function  should be given by object which is of interface type 
const obj : Calculate =
{
    add : (a,b) => a+b,
    substract : (a,b) => a-b
}
console.log(obj.add(5,5));
console.log(obj.substract(10,5));