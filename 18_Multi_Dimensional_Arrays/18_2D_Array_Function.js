let scores = [
    [90, 85, 88], // student 1= 263
    [80, 75, 82], // student 2= 237
    [95, 92, 96], // student 3= 283
];

// Matrix - 3x3 matrix of scores , Row = columns{ square matrix}

let rowSum = scores.map(row => row.reduce((a,b) => a + b)); // sum of each row
console.log("Row sums: ", rowSum); // Output: Row sums:  [263, 237, 283]




