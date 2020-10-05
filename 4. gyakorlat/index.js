// Állapottér
let szo = 'alma';
let tippek = [];
// const MAXTIPP = 9
const MAXTIPP = document.querySelectorAll('svg > *').length
let betuk = 'abcdefghijklm'

function tippel(betu) {
    // a tippek tömbbe be kell tenni a betut
    tippek.push(betu);
}

function rosszTippek() {
    // a tippek tömbben hány olyan betű van, amit nem tartalmaz a szó
    // milyen tétel ez
    // milyen tömbfüggvény?
    return tippek.filter(betu => !szo.includes(betu));
}

// Elemek
const szoDiv = document.querySelector('#szo')
const betukDiv = document.querySelector('#betuk')
const szamDiv = document.querySelector('#eredmeny')
const svg = document.querySelector('svg')


let szolista = [
    'alma',
    'körte',
    'szilva',
    'barack',
    'dinnye',
    'kecske',
	'macska',
	'egér',
	'kutya',
	'papagáj'
];


function genSzo() {
    return szo
        .split('')
        .map(betu => `<span>${tippek.includes(betu) ? betu : ''}</span>`)
        // .map(betu => `<span>${tippek.find(elem => elem === betu) == betu ? betu : ''}</span>`)
        // .map(betu => tippek.includes(betu)?`<span>${betu}</span>`:`<span></span>`)
        .join('')
}
szoDiv.innerHTML = genSzo()

function genBetuk() {
    return betuk
        .split('')
        .map(betu => `<button ${tippek.includes(betu) ? 'disabled' : ''}>${betu}</button>`)
        .join('')
}
betukDiv.innerHTML = genBetuk()

function genEredmeny() {
    return `${rosszTippek().length}/${MAXTIPP}`;
}
szamDiv.innerHTML = genEredmeny()

betukDiv.addEventListener('click', onButtonClick)

function onButtonClick(e) {
    if (e.target.matches('#betuk button')) {
        // beolvasás
        const betu = e.target.innerHTML
            // feldolgozás
        tippel(betu)
            // kiírás
            // imperatív
            // e.target.disabled = true
            // deklaratív
        betukDiv.innerHTML = genBetuk()
        szoDiv.innerHTML = genSzo()
        szamDiv.innerHTML = genEredmeny()
        svg.querySelector(`*:nth-child(${rosszTippek().length})`).classList.add('rajzol')
    }
}