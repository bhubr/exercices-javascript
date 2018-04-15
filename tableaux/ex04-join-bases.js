/*----------------------------------------------*
 | TABLEAUX / Exercice 4 / join()
 *----------------------------------------------*
 |
 | OBJECTIF: s'entraîner avec la méthode join()
 | des tableaux.
 |
 | RESUME: join() sur un tableau permet de "coller"
 | ses éléments entre eux pour obtenir une chaîne.
 |
 | join() prend un paramètre (optionnel) qui est un "séparateur", mais ici
 | il faut le voir plutôt comme une "glue" permettant de recoller les morceaux
 | On peut passer une chaîne vide '' (ce qui est différent de ne PAS passer de paramètre)
 |
 | C'est l'opération inverse de split() sur une chaîne
 | (voir exercices 1 à 3 dans chaines, mais celui-ci peut
 | se faire indépendamment).
 |
 | REFERENCE: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join
 |
 */

 // --------- EXEMPLES, ne pas effacer ---------

const songsArray = [
  'Bridge Over Troubled Water',
  'The Boxer',
  'The Sound Of Silence',
  'Mrs Robinson'
]

// 1ER EXEMPLE, SANS FOURNIR DE SEPARATEUR
// la virgule est utilisée par défaut pour recoller les morceaux
// (en anglais comma = virgule)
const songsStringCommas = songsArray.join()
console.log(`
## EXEMPLE 1
## Des titres de chansons, dans un tableau, puis dans une chaîne (séparateur non fourni)`)
console.log(songsArray)
console.log(songsStringCommas)

// 2EME EXEMPLE, SEPARATEUR A UN CARACTERE
// Le tiret haut est appelé dash en anglais
console.log(`\n
## EXEMPLE 2
## Le même tableau de chansons, recollé dans une autre chaîne (séparateur: -)`)
const songsStringDashes = songsArray.join('-')
console.log(songsStringDashes)

// -------- EXERCICES, avec différents séparateurs --------

const moviesArray = ['The Matrix', 'Interstellar', 'Avatar', 'Alien']
const moviesString = '' // REMPLACE '' par ton code
console.log(`\n\n## CODE 1 - Des titres de films, joints dans une chaîne`)
// Résultat attendu: 'The Matrix+Interstellar+Avatar+Alien'
console.log(moviesString)

const albumsArray = ['Blue', 'Continuum', 'Is This It', 'Definitely Maybe']
const albumsString = '' // REMPLACE '' par ton code
console.log(`\n## CODE 2 - Des titres d'albums, joints dans une chaîne`)
// Résultat attendu: 'Blue*Continuum*Is This It*Definitely Maybe'
console.log(albumsString)


const maryPoppinsArray = ['super', 'cali', 'fragilistic', 'expiali', 'docious']
const maryPoppinsString = '' // REMPLACE '' par ton code
console.log(`\n## CODE 3 - Des morceaux d'un mot, joints dans une chaine`)
// Résultat attendu: 'supercalifragilisticexpialidocious'
// (Mary Poppins, sors de ce corps !!)
console.log(maryPoppinsString)


const htmlListItems = ['<li>JavaScript</li>', '<li>Express</li>', '<li>React</li>']
const htmlListString = '' // REMPLACE '' par ton code
console.log(`\n## CODE 3 - Des items d'une liste, joints dans une chaine HTML`)
// Résultat attendu: '<li>JavaScript</li><li>Express</li><li>React</li>'
console.log(htmlListString)

// -----------------------------------------------------

if(typeof global !== 'undefined') {
  module.exports = { albumsString, moviesString, maryPoppinsString, htmlListString }
}
