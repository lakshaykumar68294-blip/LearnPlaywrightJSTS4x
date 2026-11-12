let arr = [1,2,3,4,5,6];
console.log(arr);
console.log(arr.length);

//ADDING ELEMENT

// PUSH()-- add elememnt in the END and returns new length 
arr.push(9);
arr.push(100,200);
console.log(arr);
console.log(arr.length);

//UNSHIFT()-- add element to BEGINNING
arr.unshift(11);
console.log(arr);


// REMOVING ELEMENT

// POP()-- remove element from the END
arr.pop();
console.log(arr);

// SHIFT()-- remove element from the BEGINNING
arr.shift();
console.log(arr);

// SPLICE-- used to remove element 
// take (index no as STP (3), delete_count(3))
// EX-1
arr.splice(3,3);
console.log(arr);

// EX2
//arr.splice(3,0,99);// whenever delete count is zero it will always "INSERT"
arr.splice(3,1,44);// REPLACEMENT will happen
console.log(arr);

// EX3
arr.splice(1,2,10,20);
console.log(arr);