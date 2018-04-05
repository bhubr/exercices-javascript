/*----------------------------------------------*
 | TABLEAUX / Exercice 1 / Traitement avec map()
 *----------------------------------------------*
 |
 | map() sur un tableau permet d'effectuer un
 | traitement systématiquement, sur chaque objet
 | du tableau. map() renvoie comme résultat un tableau,
 | contenant autant d'éléments que le tableau d'entrée
 |
 | map() prend en paramètre une fonction, et s'appelle
 | sur le tableau à traiter
 |
 | Exemple d'utilisation:
 |
 | Avec fonction anonyme en paramètre:
 |     const nombresDoubles = [1, 2, 3].map(x => 2 * x)
 |
 | Le résultat doit être [2, 3, 6]
 |
 |
 | Avec fonction nommée en paramètre:
 |   function multipliePar3(nb) { return 3 * nb }
 |   const nombresMultiplies = [3, 7, 8].map(multipliePar3)
 |
 | Le résultat doit être [9, 21, 24]
 |
 *----------------------------------------------*
 |
 | ENONCE
 |
 | PRE-REQUIS : avoir fait l'exercice bases/ex01.js
 |
 | Ecrire une fonction getType qui prend un tableau
 | d'entrée et renvoie pour chaque élément, true si
 | l'élément est une chaîne, et false sinon
 |
 */

const { isNumber } = require('../bases/ex01')

function sontDesNombres(tableau) {
}

const tableauTest = [
  1, 7, 'chaine', true, 9, 13, { nom: 'John' }
]

// Attendu: [true, true, false, false, true, true, false]

console.log(sontDesNombres(tableauTest))

module.exports = {
  sontDesNombres
}