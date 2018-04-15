/*----------------------------------------------*
 | TABLEAUX / Exercice 8 / map()
 *----------------------------------------------*
 |
 | OBJECTIF: Combiner map() et join() pour obtenir,
 | à partir d'un tableau d'objets, du code HTML complet !
 |
 | L'exercice reprend le même principe que l'exemple
 */

// ------------- EXEMPLES, ne pas modifier ---------------


// ----- EXEMPLE 1 -----

// Un tableau de noms de personnages
const cultCharacterNames = ['Georges Abitbol', 'Odile Deray', 'Serge Karamazov']

// Fonction pour créer un list item à partir d'un nom
const makeCharacterItem = name => `<li>${name}</li>`

// On enchaîne le .map() puis le .join() ce qui est tout à fait permis
// et même recommandé !!
const charactersListHtml = cultCharacterNames
  .map(makeCharacterItem)
  .join('')

console.log(`
EXEMPLE 1 - Génère une chaîne de HTML à partir d'un tableau de chaînes de caractères'
`)
console.log(charactersListHtml)


// ----- EXEMPLE 2 -----


// Un tableau de films cultes (objets)
const cultMovies = [
  { name: 'Monty Python : Sacré Graal !', year: 1975 },
  { name: 'La Classe Américaine', year: 1993 },
  { name: 'La Cité de la Peur', year: 1994 }
]
// Fonction pour créer un list item à partir d'un nom
const makeMovieItem = movie => `<li>${movie.name}</li>`

// On enchaîne le .map() puis le .join() ce qui est tout à fait permis
// et même recommandé !!
const movieListHtml = cultMovies
  .map(makeMovieItem)
  .join('')

console.log(`\n\n
EXEMPLE 2 - Génère une chaîne de HTML à partir d'un tableau d'OBJETS
`)
console.log(movieListHtml)



// -------- EXERCICES --------

// ----- EXERCICE 1 -----

// La fonction getInitials t'est fournie
// Celle-ci peut te paraître un peu "hardcore".
// Quand tu trouves ce type de fonction, n'hésite pas à la copier dans un fichier
// JS à part, et à voir ce qu'elle retourne pour différents paramètres
const getInitials = name => name
  .split(' ')                   // Coupe le nom en deux selon ' '. Exemple: 'John Mayer' devient ['John', 'Mayer']
  .map(namePart => namePart[0]) // Reçoit une chaîne et en retourne la première lettre
  .join('')                     // Joint les initiales

/**
 * ENONCE: Utilise:
 *   - le tableau cultCharacterNames,
 *   - map sur ce tableau,
 *   - la fonction getInitials (dans la fonction passée à map),
 *   - join
 * pour générer la chaîne suivante dans :
 *
 *  '<li>Georges Abitbol (GA)</li><li>Odile Deray (OD)</li><li>Serge Karamazov (SK)</li>'
 *
 * Il faut bien décomposer les choses et d'abord remplir la fonction getNameWithInitials
 * dont le squelette t'est fourni
 */

const getNameWithInitials = name => `` // REMPLACE `` PAR TON CODE

const charactersWithInitialHtml = ''  // REMPLACE '' PAR TON CODE

console.log(`\n\n
EXEMPLE 2 - Génère une chaîne de HTML à partir d'un tableau d'OBJETS
`)
console.log(movieListHtml)


// ----- EXERCICE 2 -----



// if(typeof global !== 'undefined') {
//   module.exports = { beatlesMediaObjectsHtml }
// }
