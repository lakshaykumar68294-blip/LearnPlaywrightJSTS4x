// QUES--1
let a = 100;
console.log(a++ + ++a + a++ + ++a);// 408
console.log(a); // 104

// QUES--2
let b = 37;
console.log(--b + b--);
console.log(b);

// QUES--3
let x = 5;
let y = x-- - --x;
console.log(y,x);

// QUES--4
let i = 1;
let r = i++ > 1? i++ : ++i;
console.log(r,i);