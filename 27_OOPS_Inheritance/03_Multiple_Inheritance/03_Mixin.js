// Mixin concept can help you to perform the multiple inheritance. 

// Mixin 1: Adds logging ability{extends function of parent class type}

let LoggerMixin = function (Base) {
    return class extends Base {
        log(msg) {
            console.log("[Log] " + msg);
        }
    }
}

let ScreenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot() {
            console.log("[SCREENSHOT] captured");
        }
    };
};

// Base class
class TestCase {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log("Running: " + this.name);
    }
}

// Apply BOTH mixins
// extends function of parent class type(TestCase)
class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {
    constructor(name) {
        super(name);
    }
}

let t = new SmartTest("Login Flow");
t.run();
t.log("Test started");
t.takeScreenshot();