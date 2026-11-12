// NORMAL FUNCTION
function validStatusCode(status)
{
    if(status >= 200 && status <= 300)
        {
            console.log("request is fine");
        }
}
// FUNCTION AS A EXPRESSION
const validStatusCode_Exp = function(status)
{
    if(status >= 200 && status <= 300)
        {
            console.log("request is fine");
        }
}
// ARROW FUNCTION
const validStatusCode_Arrow = (status) =>
    {
    if(status >= 200 && status <= 300)
        {
            console.log("request is fine");
        }
}

validStatusCode(200);
validStatusCode_Exp(200);
validStatusCode_Arrow(200);