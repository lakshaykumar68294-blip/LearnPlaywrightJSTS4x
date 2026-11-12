// ARRAY CREATION DIFFERENT METHOD

let browsers  = ["Chrome","Firefox","webkit"];
// MOST WIDELY USED decalration


let scores = new Array(3);
// Creates an Empty array[ empty x 3] with length of 3
//assigning Value
scores[0]="hii";
scores[1]="world";
scores[2]=" from India";
scores[3]= " namo bharat";
scores[4]= " jai hind";
scores[5]= " jai bharat";

console.log(scores.length);
console.log(scores[5]);

let scores_2 = new Array(1,2,3,4);// with values
console.log(scores_2[0]);

let numbers = new Array(100,200,300,400);// with values
console.log(numbers[3]);

let test = Array.of(10,20,30,40,50);
console.log(test.length);

// Array.from()-- used in 'STRING' to 'CHARACTER' conversion
let test2 = Array.from("hello");
console.log(test2);

let test3 = Array.from("123");
console.log(test3);

let test4 = Array.from("1");
console.log(test4);