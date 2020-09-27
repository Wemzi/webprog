/*
Ilyen jellegű feladatok esetén:
1. Feleület megtervezés (pl. lapon, paintben)
2. HTML Prototípus létrehozása (Webfejlesztésszerűen)
3. Felületfüggetlen(!) adatok és feldolgozó függvények megírása
4. Összeskapcsolni a HTML-t és JS 
    ===> Eseménykezelő függvények: 
    (miniprogramok: beolvasás,feldolgzás, kiiírás)
*/
/*
Adott egy könyvtári nyilvántartás. Egy könyvről a következő adatokat 
tároljuk:
        szerző
        cím
        kiadás éve
        kiadó
        ISBN szám
a. Felületen kérj be egy évszámot, és listázd ki az abban az évben
megjelent könyvcímeket!
*/
//Objektumok tömbjével tárolom ezeket az adatokat

const konyvek = [{
        szerzo: 'Tolkien',
        cim: 'Gyűrűk ura',
        ev: 1980
    },
    {
        szerzo: 'Molnar Ferenc',
        cim: 'Pál utcai fiúk',
        ev: 1906
    },
    {
        szerzo: 'Orwell',
        cim: 'Állatfarm',
        ev: 1980
    }
];

function konyvekEvSzerint(konyvek, ev) {
    return konyvek.filter(k => k.ev === ev).map(k => k.cim); //újabb objektumot kapunk vissza.
}

//Gombra kattintva:

const gomb = document.querySelector('#gomb');
gomb.addEventListener('click', kattintas);

function kattintas() {
    console.log('Gomb megkattintva.');

    //beolvasom
    const input = document.querySelector('#ev');
    const ev = parseInt(input.value);

    //kiválogatom:
    const szurt = konyvekEvSzerint(konyvek, ev);

    //megjelenítem:
    const s = szurt.map(cim => `<li>${cim}</li>`).join('');
    const lista = document.querySelector('#lista'); 
    lista.innerHTML = s;
}