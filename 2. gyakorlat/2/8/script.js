const inputka = document.querySelectorAll("a");
const outputka= document.querySelector(`#hivatkozasok`);


for(let idx=0; idx<inputka.length;idx++)
{
outputka.innerHTML += (`<li> ${inputka[idx].href} <br> </li>`);
}