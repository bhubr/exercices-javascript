/*----------------------------------------------*
 | OBJETS / Exercice 1 / Ajouter des propriétés
 *----------------------------------------------*
 |
 | RAPPEL, un objet est un ensemble de
 | propriétés, écrites sous forme de paires
 | clé-valeur, le tout entre accolades:
 |
 |     const person = { name: 'John', age: 34 }
 |
 | On trouve toujours la clé suivie de : puis de
 | la valeur. Les paires clé-valeur sont séparées
 | entre elles par des virgules.
 |
 | Autre exemple où une des clés est mise entre
 | quotes car elle contient des caractères autres
 | que lettre, chiffre, _ ou $
 |
 |     const city = {
 |       name: 'Toulouse',
 |       country: 'France',
 |       'post-code': '31000'
 |     }
 |
 *----------------------------------------------*
 |
 | ENONCE:
 |
 | 1/ Ecrire une fonction setObjectProp() qui prend
 | trois arguments (remplacer le commentaire dans les
 | parenthèses par les arguments) :
 |   - un objet
 |   - un nom de propriété (clé)
 |   - une valeur pour la propriété
 | La fonction doit ajouter une propriété à l'objet
 | en utilisant la clé et la valeur.
 | !!! IMPORTANT !!! La fonction doit renvoyer l'objet
 |
 | 2/ En partant de l'objet movie vide ci-dessous,
 | ajouter quatre propriétés à l'objet movie, en
 | utilisant la fonction setObjectProp():
 |   name          contenant "Star Wars Episode IV"
 |   genre         contenant "Science-fiction"
 |   release-year  contenant 1977
 |   main-actors   contenant un tableau de 3 chaines:
 |                   "Mark Hamill", "Carrie Fisher", "Harrison Ford"
 */


// ------- Code à écrire / modifier ci-dessous -------

function setObjectProp(/* ... paramètres ici ... */) {
}

const movie = {
}

// ---------------------------------------------------

// Ne pas toucher ceci
if(typeof global !== 'undefined') {
  module.exports = { movie, setObjectProp }
}