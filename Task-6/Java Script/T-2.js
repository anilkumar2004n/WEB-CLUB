var a=2024;
if( ((a%400==0) && (a%100!=0) || (a%4==0)))
{
    console.log(a,"is a Leap Year");
}
else if((a%100==0) && (a%400!=0))
{
    console.log(a,"is not a Leap Year");
}
else
{
    console.log(a,"is not a Leap Year");
}