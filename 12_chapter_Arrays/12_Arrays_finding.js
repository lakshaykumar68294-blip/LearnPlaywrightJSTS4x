// find()

// returns the value of first element in an array that satisfies
// a given testing function or question
let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findLast()
let nums1 = [10,25,80,30,45];
let result1 = nums1.findLast(temp1 => temp1 > 20);
console.log(result1);

//findIndex()
let nums3 = [10,25,80,30,45,22];
let result3 = nums3.findIndex(temp3 => temp3 > 10);
console.log(result3);

//findLastIndex
let nums4 = [10,25,80,30,45,22,78];
let result4 = nums4.findLastIndex(temp3 => temp3 > 10);
console.log(result4);

