// NESTED if_else

let age = 28;
if(age > 18) // OUTER IF 
    {
        console.log("can go to goa");

        if(age > 26) // INNER IF 
            {
                console.log(" can drink in goa");
            }
        else
            {
                console.log("cannot drink");
            }    
    }
else
    {
        console.log("cannot go to goa ");
    }    