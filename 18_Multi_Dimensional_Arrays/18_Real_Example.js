//🟩 Looping Over a 2D Array
//You need a loop inside a loop: the outer loop walks the rows,the inner loop walks the columns.

let testMatrix = [

    ["login", "pass", 200],

    ["checkout", "fail", 404],

    ["search", "pass", 180]

];

// Nested for loop (full index control)

for (let i = 0; i < testMatrix.length; i++) 

{

    for (let j = 0; j < testMatrix[i].length; j++) 

    {
        //console.log(testMatrix[i][j] + " ");
        // due to console statement all values  will be printed on a new line in the console.

        process.stdout.write(testMatrix[i][j] +" "); 
        // this will print all values in a single line in the console.
    }

        console.log(""); // this will print a new line after each row is printed.

}