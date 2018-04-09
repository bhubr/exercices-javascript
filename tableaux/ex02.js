/*----------------------------------------------*
 | TABLEAUX / Exercice 2 / Suite avec map()
 *----------------------------------------------*
 |
 | ENONCE
 | Ecrire une fonction nomsComplets, qui à partir
 | d'un tableau d'objets contenant chacun un prénom
 | et un nom, va renvoyer un tableau de noms complets
 | (nom + prénom)
 */


// --------------- Code à écrire/modifier --------------
function nomsComplets(tableau) {
  return tableau.map(element => `${element.prenom} ${element.nom}`)
}



// Exemple d'utilisation
const personnagesGoT = [
  { prenom: 'Jon', nom: 'Snow' },
  { prenom: 'Arya', nom: 'Stark' },
  { prenom: 'Tyrion', nom: 'Lannister' }
]
// Attendu : [ 'Jon Snow', 'Arya Stark', 'Tyrion Lannister' ]
console.log(nomsComplets(personnagesGoT))


// -----------------------------------------------------

if(typeof global !== 'undefined') {
  module.exports = nomsComplets
}