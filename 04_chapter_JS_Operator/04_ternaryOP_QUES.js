// QUES--1
let actual_status_code= 300;
let expected_status_code=300;
let test_result= actual_status_code === expected_status_code? "PASS" : "FAIL";
console.log(test_result);

// QUES--2
let environment = "staging";
let baseUrl = environment === "laksh"? "https:\\api.example.com" : "https:\\staging-api.example.com";
console.log(baseUrl);

// QUES--3
 let isCI = true;
 let browserMode = isCI? "headless" : " headed";
 console.log("launching browser in:",browserMode,"Mode");

// QUES--4
let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla? "within SLA" : "SLA breached";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);

//NOTE-----> ` ${ } `-- tempral literal(used for replacing value) 
// above case ${responseTime}-- responsetime is replaced by 850
// anything put under tempral literal is replaced

// QUES--5
let condition= true;
let iskMale = condition? "true" : " false";
console.log(iskMale);
console.log(`Value is,${iskMale}`);