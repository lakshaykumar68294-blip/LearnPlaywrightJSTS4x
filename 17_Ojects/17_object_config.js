// ### NOTE ###
// Objects are widely used in configurations

let config = {}; // empty object

// ----- ASSIGNING KEY VALUE PAIR IN EMPTY OBJECT

config.browser = "Chrome"; 
config.timeout = 3000;
config.timeout = 5000;  // latest

console.log(config);
delete config.browser; // deleted browser key_value pair
console.log(config);

