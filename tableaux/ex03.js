/*----------------------------------------------*
 | TABLEAUX / Exercice x / push()
 *----------------------------------------------*
 |
 | La méthode push() sur un tableau, permet de lui
 | ajouter un ou plusieurs éléments.
 | 
 | Exemple
 | const entiers = [1, 2, 3]
 | entiers.push(4, 5)
 | // Le tableau contient [1, 2, 3, 4, 5]
 |
 | ENONCE
 | On part d'un tableau vide starks.
 | Utilise push() pour remplir le tableau avec
 | 5 noms : 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'
 */

const starks = []

// --------------- Code à écrire/modifier --------------
starks.push('Robb', 'Sansa', 'Arya', 'Bran', 'Rickon')
console.log(starks)
if(typeof global !== 'undefined') {
  module.exports = starks
}