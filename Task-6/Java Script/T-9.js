function calculator(a,b,op)
{
    switch (op) {
    case '+':
        return a+b;
        break;
    case '-':
        return a-b;
        break;
    case '*':
        return a*b;
        break;
    case '/':
        return a/b;
        break;
    case '%':
        return a%b;
        break;
    default:
        console.log("Operator not Found");
        break;
    }
}
const final=calculator(1,2,'+');
console.log(final);