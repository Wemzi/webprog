// Állapottér
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
    'papagáj',
    'görögdinnye',
    'téliszalámi',
    'húsleves',
    'habfixáló',
    'őröltkávé',
    'televízió',
    'pörkölt',
]; // xd

let szo = szolista[random(0, szolista.length - 1)];
let tippek = [];
let allapot = 'jatek'; // 'nyer', 'veszit'
// const MAXTIPP = 9
const MAXTIPP = document.querySelectorAll('svg > *').length
let betuk = 'qwertzuiopőúűöüóasdfghjkléáíyxcvbnm'

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
M
export function tippel(betu) {
    // a tippek tömbbe be kell tenni a betut
    tippek.push(betu);
    if (nyer()) {
        allapot = 'nyer'
    }
    if (veszit()) {
        allapot = 'veszit'
    }
}

export function rosszTippek() {
    // a tippek tömbben hány olyan betű van, amit nem tartalmaz a szó
    // milyen tétel ez
    // milyen tömbfüggvény?
    return tippek.filter(betu => !szo.includes(betu));
}

export function nyer() {
    // a szo minden karakterére igaz, hogy a tippek tömb tartalmazza
    // milyen tétel?
    // milyen tömbfüggvény?
    return szo.split('').every(betu => tippek.includes(betu))
}

export function veszit() {
    // a rossz tippek száma eléri a maximális tippek számát
    return rosszTippek().length === MAXTIPP
}

export function getAllapot() {
    return { szo, tippek, allapot, betuk, MAXTIPP }
}