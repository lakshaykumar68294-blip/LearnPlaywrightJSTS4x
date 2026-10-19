let result = ["pass","fail","error","fail","pass"];

//indexOf()

// search from LEFT to RIGHT(B to E)
// return index of first occurence of value you passed


//console.log(result.indexOf("fail"));// 2
//console.log(result.indexOf("skip")); //-1

//lastindexOf()

// search from LEFT to RIGHT(E to B)
// return index of last occurence of value you passed
console.log(result.lastIndexOf("fail"));
console.log(result.lastIndexOf("pass"));

// includes()

// checks whether the passed element is present in array or not
// returns boolean value
console.log(result.includes("error"));

