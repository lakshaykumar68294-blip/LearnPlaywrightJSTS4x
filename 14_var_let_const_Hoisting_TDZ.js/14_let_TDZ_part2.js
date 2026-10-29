{
    console.log(a);
    let a =10;
}

// ReferenceError: Cannot access 'a' before initialization
// Enter block
//   ↓
// a is crteated 
// if a is "var" -> undefined(initialized with undefined)
// if a is "let" -> no value 

// console.log(a)// ERROR TDZ(let,const) with no value | (var) with undefined value

//let a = 10;
// ↓
// a =10; 
