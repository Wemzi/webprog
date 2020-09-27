const szam = document.querySelector('#szamok')
szam.addEventListener('keydown',onKeyDown)
function onKeyDown(e)
{
    if(!e.target.matches("#szamok"))
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
