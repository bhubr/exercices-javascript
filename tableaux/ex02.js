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
function total(NoPre){
	const nomprenom = NoPre.prenom + " " +NoPre.nom
	return nomprenom

}

function nomsComplets(tableau){
	 return tableau.map(total)
}

// function nomsComplets(tableau) {

// 		return tableau.map(x=> `${x.prenom} ${x.nom}`)
// }



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