// ASKED IN "TEKION"
//       ↓

console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");



// async function test() {
//     console.log("A");
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
//     console.log("D");
// }
// test();
