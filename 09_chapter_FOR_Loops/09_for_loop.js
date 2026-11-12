// FOR LOOP--- use when you  know no of iterations 
// help us to repeat a block of code 

// ICU - syntax has three parts 
// I- (initialisation)-- let i = 0;
// C- (condition)-- i<10;
// U- (updation)--i++,i--(incre OR decre.)

/* SYNTAX: for(I;C;U)
{
   // code you want to repeat
   console.log(I);

}*/

for(let i=0;i<10;i++) //here we have used POST-INCREMENT
    {
        console.log(i);
    }


for(let i=11;i<20;++i) // here we have used PRE-INCREMENT 
    {
        console.log(i);
    }    

/* NOTE: Both pre AND post increment works the same    
        Same is the case for pre AND post decrement */ 