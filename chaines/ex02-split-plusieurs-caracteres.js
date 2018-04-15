/*----------------------------------------------*
 | CHAINES / Exercice 2 / méthode split()
 *----------------------------------------------*
 |
 | OBJECTIF: utiliser split() avec le bon séparateur,
 | avec des séparateurs contenant plusieurs caractères
 |
 */


 // --------- EXEMPLES, ne pas effacer ---------

const fruitsString = 'Apple ; Pear ; Orange ; Strawberry'
const fruitsArray = fruitsString.split(' ; ')
console.log(`
## EXEMPLE 1
## Les fruits, dans une chaîne, puis dans un tableau (séparateur: " ; ")
`)
console.log(fruitsString)
console.log(fruitsArray)

// ATTENTION, si le séparateur est trouvé deux fois de suite, cela veut dire que
// la chaîne entre les deux séparateurs est vide
// => une chaîne vide se retrouve dans le tableau
const dblSpaceString = "Deux  espaces  entre  chaque"
const dblSpaceArray1 = dblSpaceString.split(" ")
console.log(`\n
## EXEMPLE 2
## Une chaîne, avec le séparateur doublé au milieu (séparateur: " ")
`)
console.log(dblSpaceString)
console.log(dblSpaceArray1)

// De l'importance du séparateur : la chaîne précédente va être correctement découpée
// si on utilise DEUX espaces comme séparateur
const dblSpaceArray2 = dblSpaceString.split("  ")
console.log(`\n
## EXEMPLE 3
## La même chaîne, découpée avec "  " au lieu de " "
`)
console.log(dblSpaceString)
console.log(dblSpaceArray2)


// -------- EXERCICES, avec différents séparateurs --------

// Découpe la chaîne ci-dessous, avec le séparateur approprié
const vegetablesString = 'Broccoli<br>Carrot<br>Zucchini<br>Onion<br>Leek'
const vegetablesArray = '' // REMPLACE '' par le code approprié
console.log(`\n
## CODE 1
## Les légumes, dans une chaîne, puis dans un tableau
`)
console.log(vegetablesString)
console.log(vegetablesArray)

// Découpe la chaîne ci-dessous, avec le séparateur approprié
const animalsString = 'Goat   Cow   Cat   Dog   Pig'
const animalsArray = '' // REMPLACE '' par le code approprié
console.log(`\n
## CODE 2
## Les animaux, dans une chaîne, puis dans un tableau
`)
console.log(animalsString)
console.log(animalsArray)

// Une petite variante maintenant: on te donne le code qui sépare la
// chaîne, mais tu dois corriger le nombre d'espaces entre chaque mot
// dans la chaîne de départ singersString
const singersString = "Sting   MadonnaPrince  Eminem     Adele"
const singersArray = singersString.split(' ')
console.log(`\n
## CODE 3
## Les chanteurs, dans une chaîne, puis dans un tableau
`)
console.log(singersString)
// Résultat attendu: [ 'Sting', 'Madonna', 'Prince', 'Eminem', 'Adele' ]
console.log(singersArray)

// ----------- Ne rien modifier ci-dessous --------------
if(typeof global !== 'undefined') {
  module.exports = { vegetablesArray, animalsArray, singersString, singersArray }
}
