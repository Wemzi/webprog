const gombocska = document.querySelector(`#gomb`);
gombocska.addEventListener('click',kattintas);


function kattintas()
{
const string = "Hello world!";
const hello = document.querySelector(`#hello`);
hello.innerHTML = string;
}