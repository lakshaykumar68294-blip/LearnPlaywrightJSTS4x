var testName = "Login Test";
var testName = "Signup Test";    // No error! Re-declaration allowed with var
var testName = "Search Test";    // Still no error!
console.log(testName);           // "Search Test" (last value wins)

// This is DANGEROUS in large codebases!
// You can accidentally overwrite variables.