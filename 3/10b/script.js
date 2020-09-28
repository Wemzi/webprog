const myrange = document.getElementsByClassName("display-value");
let valueshower;
for(let idx=0; idx<myrange.length; idx++)
{
    myrange[idx].addEventListener('mousemove', onMouseMove);
    valueshower = document.createElement('p');
    valueshower.innerHTML = myrange[idx].value;
    myrange[idx].insertAdjacentElement('afterend',valueshower)

}

function onMouseMove(e)
{
    const spantmp = e.target.nextElementSibling;
    spantmp.innerHTML = e.target.value;
}