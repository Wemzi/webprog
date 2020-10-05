import { tippel, rosszTippek, getAllapot } from "./allapot.js";

// Elemek
const szoDiv = document.querySelector('#szo')
const betukDiv = document.querySelector('#betuk')
const szamDiv = document.querySelector('#eredmeny')
const svg = document.querySelector('svg')

function genSzo() {
    const { szo, tippek, allapot } = getAllapot()
    return szo
        .split('')
        .map(betu => `<span class="${allapot === 'veszit' && !tippek.includes(betu) ? 'hianyzo' : ''}">
                        ${allapot === 'veszit' || tippek.includes(betu) ? betu : ''}
                      </span>`)
        // .map(betu => `<span>${tippek.find(elem => elem === betu) == betu ? betu : ''}</span>`)
        // .map(betu => tippek.includes(betu)?`<span>${betu}</span>`:`<span></span>`)
        .join('')
}
// szoDiv.innerHTML = genSzo()

function genBetuk() {
    const { tippek, allapot, betuk } = getAllapot()
    return betuk
        .split('')
        .map(betu => `<button ${tippek.includes(betu) || allapot === 'nyer' || allapot === 'veszit' ? 'disabled' : ''}>${betu}</button>`)
        .join('')
}
// betukDiv.innerHTML = genBetuk()

function genEredmeny() {
    const { MAXTIPP szo, tippek, allapot} = getAllapot()
    return `${rosszTippek().length}/${MAXTIPP}`;
}
// szamDiv.innerHTML = genEredmeny()

function render() {
    const { allapot } = getAllapot()
        // imperatív
        // e.target.disabled = true
    if (allapot === 'nyer') {
        szoDiv.classList.add('nyer')
    }
    // deklaratív
    betukDiv.innerHTML = genBetuk()
    szoDiv.innerHTML = genSzo()
    szamDiv.innerHTML = genEredmeny()
    const rosszak = rosszTippek().length
    if (rosszak > 0) {
        svg.querySelector(`*:nth-child(${rosszak})`).classList.add('rajzol')
    }
}


betukDiv.addEventListener('click', onButtonClick)

function onButtonClick(e) {
    if (e.target.matches('#betuk button')) {
        // beolvasás
        const betu = e.target.innerHTML;
        // feldolgozás
        tippel(betu);
        // kiírás
        render()
    }
}

render()