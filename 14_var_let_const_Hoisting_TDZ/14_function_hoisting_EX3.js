// runTest();  // ReferenceError: Cannot access 'runTest' before initialization

const runTest = () => {
    console.log("Running test...");
};

runTest();  // "Running test..."

// Arrow functions with const/let follow TDZ rules.
// ##### NOTE ######

// Arrow functions don’t have their own hoisting behavior. 
// Whether one is hoisted depends entirely on how it’s declared:

//                       ↓↓↓↓

// var with an arrow function: the variable is hoisted and initialized to undefined, so calling it early throws a TypeError, not a ReferenceError.
// let or const with an arrow function: the variable is hoisted but uninitialized, so calling it early throws a ReferenceError because of the TDZ.