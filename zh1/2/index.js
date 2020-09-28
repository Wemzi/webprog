const sat = document.querySelector(`#sat`);
const hue = document.querySelector(`#hue`);
const light = document.querySelector(`#light`);
const output = document.querySelector(`#output`);
const gomb = document.querySelector(`#go`);

gomb.addEventListener('click', onClickFunc)

function onClickFunc()
{
    output.style.color = `hsl(${hue.value}"%,${sat.value}%,${light.value}%)`;
}

gomb.addEventListener('click', onClick2)


function onClick2()
{
    document.body.style.bakcgroundColor = `hsl(${hue.value}"%,${sat.value}%,${light.value}%)`;
}

