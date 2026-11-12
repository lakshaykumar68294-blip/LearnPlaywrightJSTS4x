// ITERATING AN ARRAY

// 1-- for LOOP

 let tests = ["login","checkout","search"];

for(let i = 0;i < tests.length;i++)
    {
        console.log(tests[i]);
    }

 console.log("----------------------")  

//2-- FOR...OF(CLEANEST FOR VALUES)
for(let test of tests)
   {
      console.log(test)// value

    }   

 console.log("----------------------")  

 // forEach()--- using ARROW function
 tests.forEach((test,index) =>
    {
        console.log(`${index} : ${test}`);
    });

 console.log("----------------------")     

tests.forEach(function(test)   // using basic pattern of for each
{
  console.log(test);
});

console.log("----------------------")  

tests.forEach(test =>         //using ARROW function
    {
      console.log(test);
    });