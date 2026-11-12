let aa = {status : 'pass'};
let bb = aa;  // COPY by REFERENCE-- both aa and bb points to same box  
bb.status = "fail";  // changed b to fail

console.log(aa.status);// change copy also change in main 

// ## NOTE ##
// When you copy an object by reference, 
// both variables point to the same object in memory, 
// so a change made through either one is visible through both.