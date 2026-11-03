// Left angle triangle pattern

// ***
// **
// *

let n = 3; // Number of rows

for( let i = n; i>=1; i--)
    {
        for(let j = 1; j<=i; j++)
            {
                process.stdout.write("*");
            }
        console.log(""); // this will print a new line after each row is printed.
    }