/*
Másolás:
a. Adott két szöveges beviteli mező és köztük egy gomb. A gomb lenyomására másold át az egyik szöveges beviteli mező 
tartalmát a másikba!
*/

const gomb = document.querySelector('#gomb');
gomb.addEventListener('click', kattintas);

function kattintas() {
    const input = document.querySelector('#text');
    const string = input.value;
    const output = document.querySelector('#copied'); 
    output.value = string;
}