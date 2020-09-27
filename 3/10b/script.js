const myrange = document.getElementsByClassName("display-value");
let valueshower;
for(let idx=0; idx<myrange.length; idx++)
{
    myrange[idx].addEventListener('mousemove', onMouseMove);
    myrange[idx].setAttribute('id',idx);
    valueshower = document.createElement('div');
    valueshower.setAttribute('id',idx+10);
    myrange[idx].insertAdjacentElement('afterend',valueshower)
}

function onMouseMove(e)
{
    console.log(e.target.value);
    let temp = document.getElementById(e.id+10);
    temp.innerHTML = e.target.value;
}