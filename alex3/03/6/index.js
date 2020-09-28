/*
3 lépésben gondolkozunk:
    a. Felületi terv (statikus HTML)
    b. Adatok, adatszerkezetek, feldolgozó függvények
    c. Eseménykezelő függvények írása
*/
const movies = [{
        id: 1,
        title: 'A wall street farkasa',
        year: 2013,
        director: 'Scorse'
    },
    {
        id: 2,
        title: 'Tenet',
        year: 2020,
        director: 'Nolan'
    },
    {
        id: 3,
        title: 'A farkasokkal táncoló',
        year: 1995,
        director: 'Costner'
    }
];

function filterByTitle(movies, filterText) {
    return movies.filter(movie => movie.title.includes(filterText));
}

const filter = document.querySelector("#filter");
const list = document.querySelector("#list");
const span = document.querySelector("#info span")

filter.addEventListener("input", onFilterInput);

function onFilterInput(e) {
    //beolvasás
    const filterText = this.value;
    console.log(filterText);

    //feldolgozás
    const filteredMovies = filterByTitle(movies, filterText);

    //kiírás
    list.innerHTML = filteredMovies
        .map(movie => `<li data-id="${movie.id}">${movie.title}</li>`)
        .join('');


}
list.addEventListener('mouseover', onListMouseOver);

function onListMouseOver(e) {
    if (e.target.matches('#list li')) {
        //console.log(e); //Kiírja a consolra a részleteket
        //beolvasás:
        const id = parseInt(e.target.dataset.id);
        //feldolgozás:
        const selectedMovie = movies.find(movie => movie.id === id);
        //kiírás
        span.innerHTML = `${selectedMovie.year}, ${selectedMovie.director}`;
    }
}