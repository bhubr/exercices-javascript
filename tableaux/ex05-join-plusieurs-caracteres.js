/*----------------------------------------------*
 | TABLEAUX / Exercice 4 / join()
 *----------------------------------------------*
 |
 | OBJECTIF: utiliser join() avec des séparateurs contenant
 | plusieurs caractères et/ou des caractères spéciaux
 |
 | REFERENCE: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join
 |
 */

 // --------- EXEMPLES, ne pas effacer ---------

const starkChildren = [ 'Robb', 'Sansa', 'Arya', 'Brandon', 'Rickon' ]

// 1ER EXEMPLE, AVEC DEUX CARACTERES
// la virgule est utilisée par défaut pour recoller les morceaux
// (en anglais comma = virgule)
const starkChildrenCommas = starkChildren.join(', ')
console.log(`
## EXEMPLE 1
## Les enfants Stark, dans un tableau, puis dans une chaîne (séparateur: ", ")`)
console.log(starkChildren)
console.log(starkChildrenCommas)

// 2EME EXEMPLE, SEPARATEUR AVEC CARACTERE SPECIAL \n (saut de ligne)
console.log(`\n
## EXEMPLE 2
## Le même tableau, recollé dans une autre chaîne (séparateur: "\\n")`)
const starkChildrenNewlines = starkChildren.join('\n')
console.log(starkChildrenNewlines)

// -------- EXERCICES, avec différents séparateurs --------

const albumsArray = ['Blue', 'Continuum', 'Is This It', 'Definitely Maybe']
const albumsString = '' // REMPLACE '' par ton code
console.log(`\n## CODE 1 - Des titres d'albums, recollés dans une chaîne`)
// Résultat attendu: Blue <> Continuum <> Is This It <> Definitely Maybe
console.log(albumsString)

const moviesArray = ['The Matrix', 'Interstellar', 'Avatar', 'Alien']
const moviesString = '' // REMPLACE '' par ton code
console.log(`\n\n## CODE 2 - Des titres de films, recollés dans une chaîne`)
// Résultat attendu:
// * The Matrix
// * Interstellar
// * Avatar
// * Alien

// On ajoute l'astérisque suivie d'un espace "* ",
// au début de la chaîne obtenue par le join()
// Sinon il nous manquerait l'astérisque du début.
// Ne pas changer ça !
console.log(`* ${moviesString}`)


// -----------------------------------------------------

if(typeof global !== 'undefined') {
  module.exports = { moviesString, albumsString }
}
