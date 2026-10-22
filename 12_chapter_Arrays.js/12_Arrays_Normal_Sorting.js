//EX-1

let nums = [10,1,21,2];
nums.sort((a,b) => a-b);// normal sorting
console.log(nums);

//EX-2

// let arr = [78,23,54,12,8,4];
// arr.sort((a,b) => a-b);
// console.log(arr);

// to reverse the change (a-b) to (b-a)

let arr = [78,23,54,12,8,4];
arr.sort((a,b) =>a-b);// do normal sorting [4,8,12,23,54,78]
arr.sort((a,b) =>b-a);// sort and reverse the sorted array
// [ 78, 54, 23, 12, 8, 4 ]
console.log(arr);

// EX 3
// Normal Sorting of character string

let fruits = ["guava","kiwi","mulberry","apple","banana","strawberry"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);