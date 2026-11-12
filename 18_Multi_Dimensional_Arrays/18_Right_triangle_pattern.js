// Right angle triangle pattern

// *
// **
// ***

let n = 3; // Number of rows

for( let i = 0; i<n; i++)
    {
        for(let j = 0; j<=i; j++)
            {
                process.stdout.write("*");
            }
        console.log(""); // this will print a new line after each row is printed.
    }