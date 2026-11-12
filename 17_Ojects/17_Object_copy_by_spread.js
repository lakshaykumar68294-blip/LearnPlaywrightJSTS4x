let aa = {status : "PASS"};
bb = {...aa}; 
// Now, aa and bb are two different boxes
// SHALLOW COPY is created
bb.status = " FAIL";

console.log(aa.status); // PASS
console.log(bb.status); // FAIL