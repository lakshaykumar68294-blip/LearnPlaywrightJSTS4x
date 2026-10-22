// Slice and Combining

let arr = [1,2,3,4,5,6];
// slice(start_INDex, end_INDex-1)
// perform non destructive operation(return new array)
// if start index is not proviede, by default take zero
// if end is not mentioned it take all till the end

console.log(arr.slice(1,5));   //[ 2, 3, 4, 5 ]
console.log(arr);    // [1,2,3,4,5,6]

console.log(arr.slice(-5));

console.log(arr.slice(-2,-5));// return empty array as direction is wrong