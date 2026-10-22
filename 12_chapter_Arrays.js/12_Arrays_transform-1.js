// map()

// Transform existing array into new array ofsame size 
// It maps each item and apply logic on each item and store them in a new array 
// --- DOESNOT change original array---

// EX---1(transforming array of numbers)

let grades = [60,97,48,56,100,9,23];
let result = grades.map(item => item >50? "Pass" : "Fail");

console.log(result);

// EX--2

let arr = [2,4,6,8,10,12];
let transform_arr = arr.map(value => value * 2);

console.log(transform_arr);

//EX--3(extracting data from objects)

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  {name: "Smith", age: 23},
  {name: "Marnus", age: 43},
  {name: "Jason", age: 19}
];

//const voting_criteria = users.map(user => user.age > 21? "Eligible" : "Not eligible");
const voting_criteria = users.map(user => `${user.name} : ${user.age > 21? "Eligible" : "Not eligible"}`);
console.log(voting_criteria);

//filter()

//select and return element which matches the condition(true)
// element not matched(false) are removed from the list/array
// --- DOESNOT change original array---

let marks = [89,76,83,90,100,34,23];
let passing = marks.filter(num => num >= 50);
console.log(passing);