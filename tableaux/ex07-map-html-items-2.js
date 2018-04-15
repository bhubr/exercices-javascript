/*----------------------------------------------*
 | TABLEAUX / Exercice 7 / Retour sur map()
 *----------------------------------------------*
 |
 | OBJECTIF: comprendre comment on peut utiliser map()
 | pour obtenir un tableau de chaînes HTML, à partir
 | de chaînes simples...
 | MAIS on introduit deux choses:
 | 1. l'utilisation de l'index fourni comme 2ème argument à map()
 | 2. l'utilisation de code à l'intérieur des ${} des template strings
 |
 | Jusqu'ici on a vu que la fonction fournie à map()
 | reçoit comme paramètre un élément du tableau.
 |
 | Mais elle reçoit aussi, en 2ème paramètre, l'index où
 | se trouve cet élément dans le tableau.
 |
 | En fait on avait juste ignoré ce deuxième argument jusqu'ici...
 |
 */

// ------------- EXEMPLES, ne pas modifier ---------------

// Une fonction slugify très simplifiée
const slugify = name => name.toLowerCase().replace(/ /g, '-')


const theBeatles = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
// Ici on utilise l'index i, pris comme 2ème argument par la fonction donnée à map()
// Dans cette fonction, on utilise aussi toLowerCase() sur une chaîne, qui renvoie
// cette chaîne convertie en minuscules
const beatlesDivs = theBeatles.map(
  (beatle, i) => `<div class="${ beatle.toLowerCase() }">${i + 1}. ${beatle}</div>`
)
console.log(`
EXEMPLE - Génère une div avec la classe "beatle", pour chaque Beatle du tableau
`)
console.log(beatlesDivs)

console.log(`
AIDE - Dans l'exemple suivant, tu vas avoir besoin de la fonction slugify fournie
`)
const someString = 'Once upon a time'
console.log(`Conversion de "${someString}" en slug: ${ slugify(someString) }`)


// ----------------- EXERCICES ---------------------------

const theStones = ['Mick Jagger', 'Keith Richards', 'Ronnie Wood', 'Charlie Watts']
const stoneItems =  [] // REMPLACER [] par ton code

console.log(`
EXEMPLE - Génère un list item (li) avec la classe "stone" pour chaque Rolling Stone du tableau
`)
// Attendu:
// [
//   <li class="stone-0-mick-jagger">Mick Jagger is a Rolling Stone</li>
//   <li class="stone-1-keith-richards">Keith Richards is a Rolling Stone</li>
//   <li class="stone-2-ronnie-wood">Ronnie Wood is a Rolling Stone</li>
//   <li class="stone-3-charlie-watts">Charlie Watts is a Rolling Stone</li>
// ]
console.log(stoneItems)

if(typeof global !== 'undefined') {
  module.exports = { stoneItems }
}
