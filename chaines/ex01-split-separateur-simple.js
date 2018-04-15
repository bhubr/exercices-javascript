/*----------------------------------------------*
 | CHAINES / Exercice 1 / méthode split()
 *----------------------------------------------*
 |
 | OBJECTIF: utiliser split() avec le bon séparateur
 |
 | RESUME: La méthode split() appliquée sur une chaîne,
 | la découpe suivant un séparateur, et renvoie
 | un tableau contenant les "morceaux".
 |
 | REFERENCE: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
 |
 | ENONCE: après l'exemple, deux exercices, consistant
 | à découper la chaîne avec le bon séparateur
 */


 // --------- EXEMPLE, ne pas effacer ---------

const jediString = "Yoda,Windu,Obiwan,Luke"
const jediArray = jediString.split(',')
console.log(`
## EXEMPLE
## Les Jedi, dans une chaîne, puis dans un tableau (séparateur: ",")
`)
console.log(jediString)
console.log(jediArray)


// -------- EXERCICES, avec différents séparateurs --------

// Découpe chacune des chaînes ci-dessous,
// avec le séparateur qui te semble approprié

const starkString = 'Robb;Sansa;Arya;Brandon;Rickon'
const starkChildren = '' // REMPLACE '' par le code approprié
console.log(`
## CODE 1
## Les enfants Stark, dans une chaîne, puis dans un tableau
`)
console.log(starkString)
// Résultat attendu: [ 'Robb', 'Sansa', 'Arya', 'Brandon', 'Rickon' ]
console.log(starkChildren)

// Minute culturelle : le verbe "to obfuscate" signifie "rendre confus".
// On cherche ici à récupérer les mots de la phrase, en clair !
const obfuscatedString = 'Cetteophraseodevraitoêtreoplusolisible'
const deobfuscatedWords = '' // REMPLACE '' par le code approprié
console.log(`
## CODE 2
## Une phrase confuse, puis les mots en clair dans un tableau
`)
console.log(obfuscatedString)
console.log(deobfuscatedWords)

// ----------- Ne rien modifier ci-dessous --------------
if(typeof global !== 'undefined') {
  module.exports = { starkChildren, deobfuscatedWords }
}
