/*-----------------------------------------------------*
 | BOUCLES / Exercice 5 / boucle for & push sur tableau
 *-----------------------------------------------------*
 |
 | OBJECTIF: utiliser la boucle for "classique"
 |
 | SUBTILITE: contrairement à d'habitude on va
 | utiliser un autre indice de depart,
 | et une autre condition d'arrêt, que i = 0 et
 | i < quelqueChose.length
 |
 | ENONCE:
 | Ecrire une fonction anneesEntre() qui prend
 | deux paramètres :
 |   - une année de début
 |   - une année de fin
 | Ces deux années définissent donc un intervalle.
 |
 | La fonction doit renvoyer un tableau contenant
 | toutes les années entre celle de fin et celle de début,
 | en INCLUANT ces dernières
 */


function anneesEntre(d, f) {
  const resultat = [d]
  for (i = d; i < f; i++) {
  	resultat.push(d += 1) 
  }
  return resultat
}

console.log(anneesEntre(2014, 2018))
// Attendu: [ 2014, 2015, 2016, 2017, 2018 ]

module.exports = {
  anneesEntre
}