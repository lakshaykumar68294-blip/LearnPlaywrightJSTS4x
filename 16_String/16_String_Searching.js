// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes() -- return boolean value 
url.includes("staging");
url.includes("production");

// startsWith / endsWith  -- return boolean value
url.startsWith("https");
url.startsWith("http://");
url.endsWith("true");

// indexOf / lastIndexOf -- work same as in case of array(ref. array)
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

