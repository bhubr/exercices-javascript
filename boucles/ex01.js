/*----------------------------------------------*
 | BOUCLES / Exercice 1 / boucle for
 *----------------------------------------------*
 |
 | OBJECTIF: utiliser la boucle for "classique"
 |
 | EXEMPLE de boucle for, affichant les nombres
 | de 0 à 4 :
 |
 | for(let i = 0 ; i < 5 ; i++) {
 |   console.log(i)
 | }
 |
 | ENONCE : en utilisant la boucle for, afficher les
 | nombres de 6 à 10
 | 
 */


 // -------- Insère ton code ci-dessous --------

function anneesEntre(d, f) {
  const annee = [d]
  for (let i = d; i < f; i++) {
    annee.push(d += 1)
  }
  return annee
}

console.log(anneesEntre(2014, 2018))
// Attendu: [ 2014, 2015, 2016, 2017, 2018 ]

module.exports = {
  anneesEntre
}
