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
 | Elle doit renvoyer l'objet
 |
 | 2/ En partant de l'objet movie vide ci-dessous,
 | ajouter quatre propriétés à l'objet movie, en
 | appelant PLUSIEURS FOIS la fonction setObjectProp():
 |   name          contenant "Star Wars Episode IV"
 |   genre         contenant "Science-fiction"
 |   release-year  contenant 1977
 |   main-actors   contenant un tableau de 3 chaines:
 |                   "Mark Hamill", "Carrie Fisher", "Harrison Ford"
 */


// obj.uneCle = 'Une valeur'
// obj['une-autre-cle'] = 'Une autre valeur'

// ------- Code à écrire / modifier ci-dessous -------
function setObjectProp(obj, key, val) {
	obj.name = name
	key.name
}

function Movie(film, genre, date, acteurs) {
	this.film = film
	this.genre = genre
	this.date = date
	this.acteurs = acteurs
}

// const movie = new Movie("Star Wars Episode IV", "Science-fiction", 1977, ["Mark Hamill", "Carrie Fisher", "Harrisson ford"])
// console.log(movie)

const movie = {}
setObjectProp(movie, 'name', 'Star Wars Episode IV')
setObjectProp(movie, 'genre', 'Science-fiction')
setObjectProp(movie, 'release-year', 1977)

// Attendu: { genre: 'Science-fiction' }

// ---------------------------------------------------

// Ne pas toucher ceci
module.exports = {
  movie, setObjectProp
}