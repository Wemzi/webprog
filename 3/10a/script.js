const myrange = document.querySelector(`#ertek`);

myrange.addEventListener('mousemove', onMouseMove);

const valueshower = document.createElement('div')

myrange.insertAdjacentElement('afterend',valueshower);

function onMouseMove(e)
{
    if(!e.target.matches(`#ertek`))
    {
        return;
    }
    valueshower.innerHTML = e.target.value;
}