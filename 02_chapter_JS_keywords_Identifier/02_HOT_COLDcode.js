// HOT CODE  - referes to the complex code that is frequently executed (like loops, functions, etc.) 
// and is optimized by the JavaScript engine for better performance.

let a = 10;
console.log(a); 

for(let a = 0; a < 1000; a++) // this an example of HOT code because it is executed multiple times in a loop
    {
        console.log(a);
    }


 // COLD CODE - refers to the simple  code that is executed infrequently or only once,
 //  and is not optimized by the JavaScript engine for performance.   

 let b = 20;
 console.log(b); // this is an example of COLD code because it is executed only once and not optimized for performance.