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
 | 1/ Ecrire une fonction setPropOnObjects qui prend
 | trois arguments:
 | - un tableau
 | - un nom de propriété (clé)
 | - une valeur pour cette propriété
 | La fonction doit ajouter à CHAQUE objet du tableau
 | la propriété donnée par les arguments clé et valeur.
 | Elle doit renvoyer le tableau.
 | TU PEUX UTILISER setObjectProp écrite dans l'exercice
 | précédent (elle est inclue ici avec un require, pas
 | besoin de copier coller)
 | 
 |
 | 2/ En utilisant la fonction setPropOnObjects, ajouter
 | à chaque objet du tableau movies les propriétés suivantes:
 |   genre         contenant "Science-fiction"
 |   author-name   contenant "George Lucas"
 |
 | ATTENTION il est INTERDIT de modifier le contenu de ex02movies.js
 | Il faut donc utiliser la syntaxe appropriée
 */

// PAS TOUCHE
function setObjectProp(objet, cle, valeur) {
    objet[cle] = valeur
    return objet
  }  
const movies = require('./ressources/ex02movies')()


// ------- Code à écrire / modifier ci-dessous -------

function setPropOnObjects(tableau, cle, valeur) {
    return tableau.map(item => setObjectProp(item, cle, valeur))
}


setPropOnObjects(movies, 'genre', 'Science-fiction')
setPropOnObjects(movies, 'author-name', 'George Lucas')
console.log(movies)



// ---------------------------------------------------

// Ne pas toucher ceci
module.exports = { setPropOnObjects, movies }