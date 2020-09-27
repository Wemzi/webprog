const myrange = document.getElementsByClassName("display-value");
let valueshower;
for(let idx=0; idx<myrange.length; idx++)
{
    myrange[idx].addEventListener('mousemove', onMouseMove);
    valueshower = document.createElement('div');
    myrange[idx].appendChild(valueshower)

}

function onMouseMove(e)
{
    e.target.firstElementChild= e.target.value;
}