const movieData =
[
    {
        title : "kutyafasz",
        length : 90,
        category : "horror",
        made : 1972,
        directors : 'Asztalos Tamás ' + 'Vancsura Réka ' + 'Ladomérszky Bence ' + 'Lukács Dávid ',
        actors : 'MC: Superman' + ' Villain: gigapénisz' + ' FL : Greta Thunberg' + ' SM : The Rock',

    },
    {
        title : "kutyafasz2",
        length : 93,
        category : "horror",
        made : 1975,
        directors : 'Vancsura Réka ' + 'Ladomérszky Bence ',
        actors : 'MC: Superman' + ' Villain: Dénes' + ' FL : Greta Thunberg' + ' SM : The Rock',

    },
    {
        title : "Kutyafasz 3: endgame",
        length : 93,
        category : "horror",
        made : 1975,
        directors : 'literally egy papagáj',
        actors : 'MC: Superman' + ' Villain: Tamás' + ' FL : Greta Thunberg' + ' SM : The Rock',

    },
]


const unorderedlist = document.querySelector(`#szopdkitamas`);
const listitem = document.createElement('li')
unorderedlist.innerHTML=movieData.map( c => `<li> ${c.actors + ' ' + c.category + `<br>` + c.length + ' ' + c.made + ' ' +  c.title + ' ' +  c.directors} </li>`);
