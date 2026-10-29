// FUNCTION_HOISTING

function getStatusCodeI()
{
    // var status_code; ----> hoisted
    console.log(status_code);// undefined
    var status_code = 200;
    console.log(status_code); // 200
}

getStatusCodeI();


// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.