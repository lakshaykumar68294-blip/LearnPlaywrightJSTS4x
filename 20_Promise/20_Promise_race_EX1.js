let fastServer500 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("EXEC speed 500ms")
    }, 500)
});

let slowServer100 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("EXEC speed 900ms")
    }, 900);
});

Promise.race([fastServer500, slowServer100]).then(function (winner) {
    console.log("Winner:", winner);
});