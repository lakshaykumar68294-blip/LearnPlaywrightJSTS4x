let original = [1,2,3,4];
let copy1= [...original];

console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2);

// deep copy creation
let deep_copy = original;
deep_copy.push(99);
original.push(200);
console.log(original);
console.log(original);
