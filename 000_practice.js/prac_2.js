// Check if two strings are anagrams of each other

let s1 = "hello";
let s2 = "world";

let result ="YES";
if (s1.length !== s2.length)
{
    result = "NO";
}

// FOR loop 
for (let i = 0; i < s1.length; i++){
    let count1 = 0;
    let count2 = 0;

    for (let j = 0; j < s1.length; j++)
    {
        if (s1[i] === s1[j])
        {
            count1++;
        }
         if (s1[i] === s2[j])
        {
            count2++;
         }
    }
    if (count1 !== count2) {
        result = "NO";
    }   
}
console.log(result);