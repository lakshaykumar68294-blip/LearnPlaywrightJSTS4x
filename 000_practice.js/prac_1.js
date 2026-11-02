// Check if a string is a palindrome 

let str = "racecar";
let reversed = "";
for(let i = str.length - 1; i >= 0; i--)  
  {
  reversed = reversed + str[i];
  }

 if(str===reversed)
  {
    console.log("The string is a palindrome.");
  }
 else
  {
    console.log("The string is not a palindrome.");
  }