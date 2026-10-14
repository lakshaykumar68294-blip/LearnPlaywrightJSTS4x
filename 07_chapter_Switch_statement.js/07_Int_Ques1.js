// SWITCH CASE
// 1-mon 2-tues 3-wed 4-thurs 5-fri 6-sat 7-sun
// with break


let day = 2;

switch(day)
{
    case 1:
        console.log("monday - rest day");
        break;
    case 2:
        console.log("tuesday - sprint planning");
        break;
    case 3:
        console.log("wednesday - development");
        break;
    case 4:
        console.log("thursday - code review");
        break;
    case 5:
        console.log("friday - testing");
        break;
    case 6:
        console.log("saturday - deployment and retro");
        break;  
    default:
        console.log("invalid day value");        
}