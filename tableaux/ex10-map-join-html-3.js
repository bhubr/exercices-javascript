/*----------------------------------------------*
 | TABLEAUX / Exercice 10 / map() et join()
 *----------------------------------------------*
 |
 | OBJECTIF: Combiner map() et join() pour obtenir,
 | à partir d'un tableau d'objets, du code HTML complet !
 |
 | L'exercice reprend le même principe que l'exemple
 */

// ------------- EXEMPLE, ne pas modifier ---------------

// Un tableau de personnages
const heroes = [
  { name: 'Superman' },
  { name: 'Wonder Woman' },
  { name: 'Batman' }
]

/**
 * Remarque que dans la chaîne générée, les espaces et sauts de ligne respectent
 * à la lettre ce qu'on trouve dans la template string.
 */
const makeHeroItem = hero => `<li>
  ${hero.name}
</li>
`

// On enchaîne le .map() puis le .join()
const heroesListHtml = heroes.map(makeHeroItem).join('')

console.log(`\n\n
EXEMPLE - Génère une chaîne de HTML à partir d'un tableau d'OBJETS
`)
console.log(heroesListHtml)



// ------------- EXERCICE -------------------------------

// Le tableau de départ : des films cultes (objets)
const movies = [
  { id: 1, name: 'Heat', director: 'Michael Mann', year: 1995 },
  { id: 2, name: 'Snatch', director: 'Guy Ritchie', year: 2000 },
  { id: 3, name: 'Unforgiven', director: 'Clint Eastwood', year: 1992 }
]

/**
 * ENONCE: inspire-toi de l'exemple et utilise le tableau movies,
 * pour obtenir la chaîne suivante.

    <div id="movie-1">
      <h4>Heat</h4>
      <p>Heat was released in 1995 and was directed by Michael Mann
    </div>
    <div id="movie-1">
      <h4>Heat</h4>
      <p>Heat was released in 1995 and was directed by Michael Mann
    </div>
    <div id="movie-1">
      <h4>Heat</h4>
      <p>Heat was released in 1995 and was directed by Michael Mann
    </div>

*/

// D'abord écris la fonction qui va te renvoyer UNE div en fonction de l'objet
// qui lui est passé en paramètre
const getMovieDiv = movie => ``  // Remplace le CONTENU des `` par ton code

// Puis utilise cela pour obtenir la liste des div jointe dans une chaîn
const movieListHtml = ''  // REMPLACE '' par ton code

if(typeof global !== 'undefined') {
  module.exports = { movieListHtml }
}
