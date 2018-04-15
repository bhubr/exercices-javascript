/*----------------------------------------------*
 | TABLEAUX / Exercice 8 / map()
 *----------------------------------------------*
 |
 | OBJECTIF: Combiner map() et join() pour obtenir,
 | à partir d'un tableau d'objets, du code HTML complet !
 |
 | L'exercice reprend le même principe que l'exemple
 */

// ------------- EXEMPLE, ne pas modifier ---------------


// L'exemple montre la combinaison de .map() et de .join()
// pour obtenir une chaîne de texte... l'exercice demande du HTML,
// mais le HTML, ce n'est jamais que du texte !

// Un tableau de noms de personnages
const cultCharacterNames = ['Georges Abitbol', 'Odile Deray', 'Serge Karamazov']
// Fonction pour renvoyer le nom, préfixé de '* ', et suivi d'un retour à la ligne ('\n')
// Exemple d'appel: makeTextItem('James Bond') renvoie 'James Bond\n'
const makeTextItem = str => `* ${str}\n`

// On enchaîne .map() puis .join(). C'est permis et même recommandé !!
const charactersTextList = cultCharacterNames
  .map(makeTextItem)
  .join('')

console.log(`
EXEMPLE - Génère une chaîne de caractères, à partir d'un tableau de chaînes de caractères'
`)
console.log(charactersTextList)


// -------------- EXERCICE -------------------

// On te fournit un autre tableau de départ
const theDalton = ['Joe', 'Jack', 'William', 'Averell']

/**
 * On te fournit le squelette d'une fonction qui doit renvoyer un list item HTML
 * quand on lui passe une chaîne. Exemples d'appels:
 * makeCharacterItemHtml('Freddie Mercury')    renverrait '<li>Freddie Mercury</li>'
 * makeCharacterItemHtml('Awesome')            renverrait '<li>Awesome</li>'
 */
const makeHtmlItem = str => `` // Remplace le CONTENU de `` par ton code

/**
 * Ensuite tu dois utiliser le même principe que dans l'exemple, pour
 * obtenir, à partir du tableau theDalton, la chaîne suivante:
 *   '<li>Joe</li><li>Jack</li><li>William</li><li>Averell</li>'
 */

const theDaltonHtmlList = '' // REMPLACE '' PAR TON CODE

console.log(`
EXERCICE - Génère une chaîne de caractères (du HTML), à partir d'un tableau de chaînes de caractères'
`)
console.log(theDaltonHtmlList)

if(typeof global !== 'undefined') {
  module.exports = { theDaltonHtmlList }
}
