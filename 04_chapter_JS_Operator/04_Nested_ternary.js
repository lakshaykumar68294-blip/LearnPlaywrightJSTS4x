// NESTED TERNARY
// multiple conditions or ternary within a ternary

// QUES--1

let age = 28;
let can_enjoy= (age > 18) ? (age > 18 ? "can go to goa and drink": "no drink") : "no goa" ;
console.log(`lakshay ${can_enjoy}`);

// QUES--2
let statusCode = 404;
let category = (statusCode < 300)? "success":
               (statusCode < 400)? "redirect":
               (statusCode < 500)? "Client error":" server error";
  console.log(` Status ${statusCode} : ${category}`); 
  
// QUES--2
let temp = 35;
let feel = (temp >= 40)? "very hot":
           (temp >= 30)? "hot":
           (temp >= 20)? "warm":
           (temp >= 10)? "cool": "cold";
  console.log("Temperature:",temp,"feels:",feel);