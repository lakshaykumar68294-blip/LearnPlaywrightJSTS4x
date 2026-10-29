const greeting = "hello World";

// ### charCodeAt()  ### 

console.log(greeting.charCodeAt(0));
// return character code using index( as parameter)
console.log(greeting.charCodeAt(15));
// return Nan if index is not found

// ### str[] ###

// return vale at given index
// return undefined if index is out iof range
console.log(greeting[6]);
console.log(greeting.length);

// ### charAt() ###

// return character at a given index 
// return empty string " " ,if index is not found

console.log(greeting.charAt(0));    

