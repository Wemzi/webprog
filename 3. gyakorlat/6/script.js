/*
1. Felületi terv (statikus HTML)
2. Adatok, adatszerkezetek, feldolgozó függvények
3. Eseménykezelő függvények

Feladatok:
5. document szinten érdemes az eseményt kezelni, matches("a"), e.preventDeafult()
4. Esemény: keydown, e, e.key, e.code
*/
const movies = [
    {
      id: 1,
      title: 'A wall street farkasa',
      year: 2013,
      director: 'Scorsese'
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
      year: 1990,
      director: 'Costner'
    },
  ];
  
  function filterByTitle(movies, filterText) {
    return movies.filter(movie => movie.title.includes(filterText))
  }
  
  const filter = document.querySelector('#filter');
  const list = document.querySelector('#list');
  const span = document.querySelector('#info span');
  
  filter.addEventListener('input', onFilterInput)
  function onFilterInput(e) {
    // beolvasás
    const filterText = this.value;
    // feldolgozás
    const filteredMovies = filterByTitle(movies, filterText);
    // kiírás
    list.innerHTML = filteredMovies
      .map(movie => `<li data-id="${movie.id}">${movie.title}</li>`)
      .join('')
    // `
    //   <li data-id="1">alma</li>
    //   <li data-id="2">körte</li>
    // `
  }
  
  list.addEventListener('mouseover', onListMouseOver)
  function onListMouseOver(e) {
    // console.log(e.target);
    // e.preventDefault();
    if (!e.target.matches('#list li')) {
      return;
    }
    // beolvasás
    const id = parseInt(e.target.dataset.id);
    // feldolgozás
    const selectedMovie = movies.find(movie => movie.id === id);
    // kiírás
    span.innerHTML = `${selectedMovie.year}, ${selectedMovie.director}`
  }

  document.addEventListener("click", nemElte)
  function nemElte(e)
  {
      if(e.target.matches("a"))
        {
        if(!e.target.href.includes("elte.hu"))
        {
            e.preventDefault();
            console.log(e.target)
        }
      }
  }
  