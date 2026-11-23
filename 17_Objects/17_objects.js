// #### OBJECT IN JAVASCRIPT ####

// dynamic data structure stores value in the form of key-value pair
// key should be "UNIQUE"

// **NOTE**-- donot confuse "OBJECT" with "JSON" 
//            as JSON stores key in double quotes

let student = { name : "lakshay", age : 18 };
console.log(student["name"]);

//### keys are : CASE SENSITIVE

let a22 = { status : "PASS",Status :"FAIL"};
console.log(a22["status"]); // PASS
console.log(a22["Status"]); // FAIL