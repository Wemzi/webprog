const name = "Dávid"
console.log(`Hello ${name}!`)

function lnko(a,b)
{
    if(a<b)
    {
        const tmp = b;
        b=a;
        a=tmp;
    }
    maradek = a % b;
    while(maradek>0)
    {
        a = b;
        b = maradek;
        maradek = a % b;
    }
    lnko = b;
    return lnko;
}

console.log(lnko(1024,2036));