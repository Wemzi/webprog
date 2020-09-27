const inputka = document.querySelector(`#szorzo`);
const gombocska = document.querySelector(`#lecgo`);
const listacska = document.querySelector(`#geci`);

gombocska.addEventListener('click', szorzoTabla)

function szorzoTabla()
{
    let meret = inputka.value;
    console.log(meret);
    for(let idx=1; idx <= meret; idx++)
    {
        listacska.innerHTML += `<li>`;
        for(let jdx = 1; jdx <= meret ; jdx++ )
        {
            listacska.innerHTML += (idx * jdx) + ' ';
        }
        listacska.innerHTML+= `</li>`;
       
    }
}