const inputka = document.querySelector(`#elso`);
const inputka2 = document.querySelector(`#masodik`);
const gombocska = document.querySelector(`#nyomjmeg`);
gombocska.addEventListener('click',function()
{
    const tmp = inputka.value;
    inputka.value=inputka2.value;
    inputka2.value=tmp;
    
})