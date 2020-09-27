// Egy szöveges beviteli mezőben legyen lehetőség megadni 
// egy interneten elérhető kép URL-jét. Egy mellette lévő gombra kattintva jelenítsd meg a képet a dokumentumban

//Gombra kattintva:

const gomb = document.querySelector('#gomb');
gomb.addEventListener('click', kattintas);

function kattintas() {
    //beolvasom
    const input = document.querySelector('#input_url');
    const picture = input.value;
    const url = document.querySelector('#url_pic'); 
    url.src = picture;
}