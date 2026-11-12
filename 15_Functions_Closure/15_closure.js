//### CLOSURE ###

// when an inner function remembers and can access variables from its outer function,
// even after the outer function has finished executing.

function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();