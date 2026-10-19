// ITERATING AN ARRAY

// 1-- for LOOP

let tests = ["login","checkout","search"];

for(let i = 0;i < tests.length;i++)
    {
        console.log(tests[i]);
    }

 console.log("----------------------")  

// 2-- FOR...OF(CLEANEST FOR VALUES)
for(let test of tests)
   {
      console.log(test)// value

   }   

 console.log("----------------------")  

 // forEach()
 tests.forEach((test,index) =>
    {
        console.log(`${index} : ${test}`);
    });

