/*----------------------------------------------*
 | CHAINES / Exercice 3 / méthode split()
 *----------------------------------------------*
 |
 | OBJECTIF: s'exercer avec split() sur une chaîne contenant
 | des caractères spéciaux (\n, \t, \\)
 |
 | Le caractère antislash \ sert de "caractère d'échappement",
 | pour écrire des caractères spéciaux dans une chaîne.
 |   \n  saut de ligne
 |   \t  tabulation
 |   \\  antislash
 |   \'  simple quote
 |   \"  double quote
 |   \`  backtick
 */

 // --------- Exemple, ne pas effacer ---------

// RAPPEL: \n dans une chaîne est un retour à la ligne
// Dans le console.log() on a mis \\n car on ne veut pas afficher un saut de ligne,
// mais un caractère antislash (qu'on doit écrire \\) suivi d'un n
const sithString = 'Palpatine\nDarth Maul\nDooku\nDarth Vader'
const sithArray = sithString.split('\n')
console.log(`
## EXEMPLE
## Les vilains Sith, dans une chaîne, puis dans un tableau (séparateur: "\\n")
`)
console.log(sithString)
console.log(sithArray)



// -------- Exercices, avec différents séparateurs --------
// Découpe chacune des chaînes ci-dessous,
// avec le séparateur qui te semble approprié

const storyString = "Once\tupon\ta\ttime\tin\tWonderland"
const storyWords = '' // REMPLACE '' par le code approprié
console.log(`
## CODE 1
## L'introduction à "Alice in Wonderland", dans une chaîne, puis un tableau de mots
`)
console.log(storyString)
console.log(storyWords)

// Rappelle toi que la template string permet d'écrire des sauts de ligne directent
// dans une chaîne, ce qu'on ne peut pas faire avec ' et "
// Ces sauts de ligne sont vus par JavaScript comme les \n de sithString
// Le nom du tableau de sortie est un gros indice: on veut un tableau contenant
// les lignes de la chanson
const songString = `Here's a little song I wrote
You might want to sing it note for note
Don't worry, be happy`
const songLines = '' // REMPLACE '' par le code approprié
console.log(`
## CODE 2
## Les paroles d'une chanson, dans une chaîne, puis un tableau de lignes
`)
console.log(songString)
console.log(songLines)


module.exports = {
  storyWords, songLines
}
