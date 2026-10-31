// ### LENGTH and CHARACTER ACCESS ###
// all these are related to property

let str = "Playwright";

// 1. .length()- return length of string ,start from 1, Property NOT a method, count space also

console.log(str.length); // 10

// 2. charAt()
// -- return element at index passed, if index is out of range return empty " " string
// -- doesnot support negative index

console.log(str.charAt(0)); // P
console.log(str.charAt(13)); // empty string 

// 3. at()
// -- return element at index passed
// -- support negative index
// -- return undefined if index not found
console.log(str.at(4));  // w
console.log(str.at(-2)); // h
console.log(str.at(15)); // undefined

// 4. chatCodeAt()
// --return unicode of the character present at specified index
// --return "Nan" if index not found
console.log(str.charCodeAt(5));  //114
console.log(str.charCodeAt(14)); //Nan

// 5. .[index]
console.log(str[0]); // P


