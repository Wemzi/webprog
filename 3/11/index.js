

const kerdeszona = document.querySelectorAll('h2')
const elrejtenivalok = document.querySelectorAll('p')
for(let idx=0; idx<elrejtenivalok.length; idx++)
{
    elrejtenivalok[idx].style.visibility = "hidden";
    kerdeszona[idx].addEventListener('click',onClickFunc);
    
}



function onClickFunc(e)
{
    if(e.target.nextElementSibling.style.visibility === "visible")
    {
    let para = e.target.nextElementSibling.style.visibility = "hidden";
    }
    else
    {
        let para = e.target.nextElementSibling.style.visibility = "visible";
    }
}

