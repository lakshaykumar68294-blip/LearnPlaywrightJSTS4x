// we can use aliases name using "as"

import {BASE_URL as B1URL} from "./22_test_utility_ex1.js";
import {BASE_URL as B2URL,formatTestName} from "./22_utilis_ex2.js";

console.log(B1URL);
console.log(B2URL);
console.log(formatTestName("login"));