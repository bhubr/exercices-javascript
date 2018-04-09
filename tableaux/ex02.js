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
const personnagesGoT = [
  { prenom: 'Jon', nom: 'Snow' },
  { prenom: 'Arya', nom: 'Stark' },
  { prenom: 'Tyrion', nom: 'Lannister' }
]
function nomsComplets(noms) {
	return noms.prenom +" "+noms.nom;
}

const persos = personnagesGoT.map(nomsComplets)
console.log(persos)


// -----------------------------------------------------

module.exports = {
	nomsComplets
}