const szam = document.getElementsByClassName("szam")
for(let idx=0; idx<szam.length; idx++)
{
    szam[idx].addEventListener('keydown',onKeyDown)
}
function onKeyDown(e)
{
    if(!e.target.matches(`.szam`))
    {
        return;
    }
    switch(e.key)
    {
        case '0':; break;
        case '1':; break;
        case '2':; break;
        case '3':; break;
        case '4':; break;
        case '5':; break;
        case '6':; break;
        case '7':; break;
        case '8':; break;
        case '9':; break;
        case 'Tab':; break;
        case 'Delete':; break;
        case 'Backspace':; break;
        default: e.preventDefault(); break;
    }
}
