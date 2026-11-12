// SPREAD AS AN ARGUMENT FUNCTION
function add(a,b,c)
{
    return(a+b+c);
}

let arr = [1,2,3,4,5];
console.log(add(...arr));

//--

function hasError(...codes)
{
   return codes.some((c) => c >=400);
}
let responseCodes1 = [200,201,404];
let responseCodes2 = [ 200,201,404,500];
console.log(hasError(...responseCodes1));