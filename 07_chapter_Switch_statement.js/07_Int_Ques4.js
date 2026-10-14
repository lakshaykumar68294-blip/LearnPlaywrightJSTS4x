let testScore = 85;
switch(true)
{
    case (testScore >= 95):
        console.log("outstanding - top performer");
        break;
    case (testScore >= 85):
        console.log("excellent - above expectations");
        break;
    case (testScore >= 70):
        console.log("good - meets expectations");
        break;
    case (testScore >= 50):
        console.log("needs improvement");
        break;
    default:
        console.log("unsatisfactory - requires training");           
}