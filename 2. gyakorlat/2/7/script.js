const isgirl = document.querySelector(`#leanykori_nev`);
const selector = document.querySelectorAll('input[name="nem"]');
const szoveg = document.querySelector(`#leanykorika`);

szoveg.style.visibility = "hidden";
isgirl.style.visibility = "hidden";

for(let idx = 0; idx < selector.length ; idx++ )
{
    selector[idx].addEventListener('click',function()
    {
    if(selector[1].checked)
    {
        szoveg.style.visibility = "visible";
        isgirl.style.visibility = "visible";
    }
    else
    {
        isgirl.style.visibility = "hidden";
        szoveg.style.visibility = "hidden";
    }
    return;
    }
    )
}
