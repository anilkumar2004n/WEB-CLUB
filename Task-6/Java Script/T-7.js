function upperString(string)
{
    let arr = string.split(' ');
    let upper_str = "";
    for(let i = 0; i < arr.length; i++)
    {
        upper_str = upper_str + upperWord(arr[i]) + " ";
    }
    return upper_str;
}
function upperWord(word)
{
    let w = "";
    w = w + word[0].toUpperCase();
    for(let i = 1; i < word.length; i++)
    {
        w = w + word[i];
    }
    return w;
}
console.log(upperString("the quick brown fox"));