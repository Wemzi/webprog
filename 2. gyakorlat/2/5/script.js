const inputka = document.querySelector(`#kep`);
const kepecske = document.querySelector(`#showme`);
const gombocska = document.querySelector(`#nyomjmeg`);
gombocska.addEventListener('click',function()
{
    kepecske.setAttribute('src',inputka.value);
})