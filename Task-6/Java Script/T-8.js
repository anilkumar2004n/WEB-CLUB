let a = [1, 2, 3, 4, 5];
let length = a.length;
let max = Number.MIN_VALUE;;
let second_max;
let min = Number.MAX_VALUE;
let second_min;
for(let i = 0; i < length; i++)
{
    if(a[i] > max)
    {
        second_max = max;
        max = a[i];
    }
    else if(a[i] > second_max)
    {
        second_max = a[i];
    }
    if(a[i] < min)
    {
        second_min = min;
        min = a[i];
    }
    else if(a[i] < second_min)
    {
        second_min = a[i];
    }
}
console.log(second_min+","+second_max);