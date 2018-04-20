/*----------------------------------------------*
 | TABLEAUX / Exercice 1 / typeof
 *----------------------------------------------*
 |
 | Tous les langages donnent la possibilité de
 | déterminer le type d'une variable.
 | En JavaScript, cela se fait avec typeof suivi
 | de la variable. typeof renvoie une chaîne de
 | caractères : le type de la variable.
 |
 | Exemples (tu peux faire node ex01exemples pour le voir à l'oeuvre) :
 |
 | const booleen = true
 | const PI = 3.14
 | const annee = 2018
 | const nom = 'John Wayne'
 | const obj = { nom: 'Paul', age: 34 }
 | const tabl = [ 1, 2, 3 ]
 | const doubler = nombre => 2 * nombre
 |
 | console.log('Type de booleen:', typeof booleen)   // 'boolean'
 | console.log('Type de PI:', typeof PI)             // 'number'
 | console.log('Type de annee:', typeof annee)       // 'number'
 | console.log('Type de nom:', typeof nom)           // 'string'
 | console.log('Type de obj:', typeof obj)           // 'object'
 | console.log('Type de tabl:', typeof tabl)         // 'array'
 | console.log('Type de doubler:', typeof doubler)   // 'function'
 |
 | NOTE UNE CHOSE ETRANGE :
 | le type renvoyé pour un tableau est... object !!
 | On va expliquer cela plus tard...
 |
 *----------------------------------------------*
 |
 | ENONCE
 |
 | Utiliser typeof pour écrire des fonctions,
 | chacune prenant un seul paramètre d'entrée:
 | isNumber()   renvoyant true si le param. est un nombre
 | isString()   renvoyant true si le param. est une chaîne
 | isBoolean()   renvoyant true si le param. est un booléen
 */

// --------------- Code à écrire/modifier ------------

// Remplacer les /* ... */ par les paramètres

function isNumber(nombre) {
	if (typeof nombre == "number") {
	return true
	}else{
		return false
}
}
function isString(string) {
	if (typeof string == "string") {
	return true
	}else{
		return false
}
}
function isBoolean(booleen) {
	if (typeof booleen == "boolean") {
	return true
	}else{
		return false
}
}
//function isString() {}
//function isBoolean( ) {}

console.log('45 est un nombre ?', isNumber(45))                // Attendu: true
console.log('37.2 est un nombre ?', isNumber(37.2))            // Attendu: true
console.log('"John" est un nombre ?', isNumber('John'), '\n')  // Attendu: false

console.log('"Hello" est une chaîne ?', isString('Hello'))     // Attendu: true
console.log('33 est une chaîne ?', isString(33))               // Attendu: false
console.log('false est une chaîne ?', isString(false), '\n')   // Attendu: false

console.log('true est un booléen ?', isBoolean(true))          // Attendu: true
console.log('"Hi" est un booléen ?', isBoolean('Hi'))          // Attendu: false


module.exports = {
  isNumber, isString, isBoolean
}