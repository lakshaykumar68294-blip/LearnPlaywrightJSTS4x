// FUNCTION WITH MULTIPLE RETURN

function getStatus(code)
{
    if(code >= 200 && code < 300)
    {
       return("success");
    }
    else if(code >= 400 && code < 500)
        {
            return("client error");
        }
    else (code >= 500)
        {
            return("server error");
        }
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));