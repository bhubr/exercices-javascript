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

function suiteDeNombres(tableau){
  for (let i = 6; i <= 10; i++) {
    tableau.push(i)
  }
  return tableau
}

table = []

console.log(suiteDeNombres(table))