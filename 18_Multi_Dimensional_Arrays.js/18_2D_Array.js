let grid =[
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

// Accessing elements in a 2-D array
console.log(grid[0][1]); // Output: 20
console.log( grid[2][2]); // Output: 90
//console.log(grid[7][7]); 
//           ↓
// TypeError: Cannot read properties of undefined (reading '7')

// Modifying elements in a 2-D array
grid[2][0] = 100;
console.log(grid[2][0]); // Output: 100 

// length property of a 2-D array
console.log(grid.length); // Output: 3 (number of rows)
console.log(grid[0].length); // Output: 3 (number of columns in the first row)