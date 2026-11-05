// Question-1👇
// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// p.then(function (value) {
//     console.log("Answer:", value);
// }); // Answer: 42

// Question-2👇
// let p = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });

// p.catch(function (err) {
//     console.log("Caught:", err);
// }); // Caught: Something broke

// Question-3👇
// let p = Promise.resolve(5);
//  👍NOTE-- each then take recieve the value from the previous then 
//  and return a new value to the next then.👍
// p.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// }); // Result: 50

// Question-4👇

// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val); // 1
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val); // 2
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val); // 3
//     });

// Question-5👇
// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val); // start
//         throw new Error("Broke at step 2");
//         // when throw error then catch block will be executed 
//         // and the next then block will not be executed
//     })
//     .then(function () {
//         console.log("This will NOT run");
//     })
//     .catch(function (err) {
//         console.log("Caught:", err.message);
//     });

// Question-6👇
Promise.reject("Test failed")
    .then(function (data) {
        console.log("Data:", data);
    })
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    });    
    