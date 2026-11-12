// every()
//all element must pass the condition
//if any element fails then return false
//if all pass then true

let arr =[ 80,76,49,90];
console.log(arr.every(temp => temp > 45));

// some()
// At least one must pass
// if only one elemet match the condition it return TRUE

let arr1 =[10,30,20,40,50,100];
console.log(arr1.some(temp1 => temp1 > 60));