/*----------------------------------------------*
 | OBJETS / Exercice 2 / Ajouter des propriétés
 *----------------------------------------------*
 |
 | RAPPEL, il y a deux façons d'accéder à des propriétés
 |
 | * Syntaxe "raccourci" :  objet.propriete
 |   On ne peut l'utiliser que si la "clé" n'a que des
 |   caractères valides : lettres et chiffres, _ et $
 |
 |     - Lecture:       console.log(objet.propriete)
 |     - Ajout/modif:   objet.propriete = "une valeur"
 |
 |
 | * Syntaxe "crochets"  :  objet['propriete']
 |   On est obligé de l'utiliser si la clé contient
 |   des caractères spéciaux comme le tiret haut -
 |
 |     - Lecture:       console.log(objet['propriete'])
 |     - Ajout/modif:   objet['propriete'] = "une valeur"
 |
 *----------------------------------------------*
 |
 | ENONCE:
 | Ajouter à CHAQUE objet du tableau movies les
 | propriétés suivantes:
 |   genre         contenant "Science-fiction"
 |   author-name   contenant "George Lucas"
 |
 | ATTENTION il est INTERDIT de modifier le contenu de ex02movies.js
 | Il faut donc utiliser la syntaxe appropriée
 */

// PAS TOUCHE A CES QUELQUES LIGNES
// !!!!!!!!!!
const moviesOrig = require('./ex02movies')
const movies = []
for(let m of moviesOrig) {
  movies.push({ ...m })
}
// !!!!!!!!!!



// Code à ajouter ci-dessous



// Ne pas toucher ceci
module.exports = movies