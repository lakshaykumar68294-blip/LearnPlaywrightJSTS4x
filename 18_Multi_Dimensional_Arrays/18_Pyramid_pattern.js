// Pyramid Pattern
//     *
//    ***
//   *****

let n = 3; // Number of rows

for(let i = 1; i<=n; i++) // Loop through each row
    {
        let row = ""; // Initialize an empty string for each row

    // Add spaces before the stars
        for(let j = 1; j<=n-i; j++)
            {
                row += " "; // Add spaces
            }
    // Add stars for the current row 
        for(j =1; j<=2*i-1; j++)
            {
                row = row + "*"; // Add stars
            }

            console.log(row); // Print the row after adding spaces and stars
    
    }