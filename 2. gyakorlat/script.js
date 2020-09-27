
const gombocska = document.querySelector(`#gomb`);

gombocska.addEventListener('click',mutasdmagad)

function mutasdmagad()
{
    const url = document.querySelector(`#kep`);
    const inputka = document.querySelector(`#textecske`);
    const adat = inputka.value;
    url.src = adat;
}
