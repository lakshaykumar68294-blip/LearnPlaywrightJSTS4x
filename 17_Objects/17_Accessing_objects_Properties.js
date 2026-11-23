const user = {
  name: "Alice",
  full_name: "Alice Smith",
  "Country code": "+91",
  age: 28,
  job : "software tester",
  location : "Banglore",
  package : 400000
};


// ### ACCESSING OBJECT PROPERTIES ###

// 1. USING ( . )DOT NOTATION
//  syntax - object_name.property_name

console.log(user.full_name);

// 2. USING [ ] BRACKET NOTATION
//  syntax - object_name[ "property_name" ]
//  property name should be in double quotes inside square bracket

// TWO USE CASES :
//****when key have Special Characters or Spaces**** 
//         ↓
  console.log(user["Country code"]);


//****when key is dynamic or stored in a varaible****[Dynamic Property Names]
//         ↓
    let key1 = "name";// place key under double quotes when storing in a variable
    console.log(user[key1]);