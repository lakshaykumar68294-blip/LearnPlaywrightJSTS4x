let fast = new Promise(function(resolve, reject) 
{
      setTimeout(function(timing)
       {
        resolve("Fast Promise is Resolved 1st");
       },2000);    
});
let slow = new Promise(function(resolve, reject) 
{
      setTimeout(function(timing)
       {
        resolve("Slow Promise is Resolved 2nd");
       },1000);    
});

Promise.race([fast,slow]).then(function(timing)
{
     console.log(timing);
});
