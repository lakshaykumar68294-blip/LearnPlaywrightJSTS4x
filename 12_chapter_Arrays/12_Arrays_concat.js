// concat()
let a = [3,4];
let b = [1,2];
console.log(a.concat(b));

// modern way - using spread(...) concatenation

let d =[...a,...b];
console.log(d);