// Egy gomb megnyomására írd ki a dokumentum valamelyik általad választott részére, hogy "Helló világ!"!


const gomb = document.querySelector('#gomb');
gomb.addEventListener('click', kattintas);

function kattintas() {
    const string = "Helló világ";
    const hello = document.querySelector('#hello'); 
    hello.innerHTML = string;
}