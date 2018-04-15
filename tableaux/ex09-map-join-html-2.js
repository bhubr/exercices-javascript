/*----------------------------------------------*
 | TABLEAUX / Exercice 9 / map()
 *----------------------------------------------*
 |
 | OBJECTIF: Combiner map() et join() pour obtenir,
 | à partir d'un tableau d'objets, du code HTML complet !
 |
 | L'exercice reprend le même principe que l'exemple
 */

// ------------- EXEMPLE, ne pas modifier ---------------

// Des vidéos YouTube plutôt cool
const videoUrls = [
  'https://www.youtube.com/watch?v=ferZnZ0_rSM',
  'https://www.youtube.com/watch?v=9HUV5a7MgS4',
  'https://www.youtube.com/watch?v=QKzobTCIRDw'
]

// Fonction pour récupérer la partie de l'URL après le =
const getVideoId = str => str.split('=').pop()

// Fonction pour renvoyer un list item contenant un lien vers l'URL
const getStringLinkItem = youTubeUrl =>
  `<li><a href="${youTubeUrl}">${ getVideoId(youTubeUrl) }</a></li>`

// On enchaîne .map() puis .join(). C'est permis et même recommandé !!
const videoUrlsList = videoUrls
  .map(getStringLinkItem)
  .join('')

console.log(`
EXEMPLE - Génère une liste d'items HTML contenant des liens, à partir d'un tableau d'URLs
`)
console.log(videoUrlsList)


// ------------- EXERCICE -------------------------------

// Le tableau de départ : des noms de physiciens
const physicists = ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking']

// La fonction getInitials t'est fournie. Elle peut te paraître un peu "hardcore".
// Quand tu trouves ce type de fonction, n'hésite pas à la copier dans un fichier
// JS à part, et à voir ce qu'elle retourne pour différents paramètres
const getInitials = name => name
  .split(' ')                   // Coupe le nom en deux selon ' '. Exemple: 'John Mayer' devient ['John', 'Mayer']
  .map(namePart => namePart[0]) // Reçoit une chaîne et en retourne la première lettre
  .join('')                     // Joint les initiales

/**
 * ENONCE: inspire-toi de l'exemple et utilise le tableau physicists, et la
 * fonction getInitials fournie, pour obtenir la chaîne suivante.
 *
 *  '<li>Isaac Newton (IN)</li><li>Albert Einstein (AE)</li><li>Stephen Hawking (SH)</li>'
 *
 * Il faut bien décomposer les choses...
 *
 *
 * D'abord, remplir la fonction getNameInitialsItem, dont le squelette t'est fourni.
 * C'est ici que tu vas utiliser getInitials().
 * getNameHtmlItem('John Travolta')  renverrait '<li>John Travolta (JT)</li>'
 */
const getNameHtmlItem = name => `` // Remplace le CONTENU de `` PAR TON CODE

// Ensuite, utiliser la fonction ci-dessus de façon adéquate
const physicistsHtml = ''  // REMPLACE '' PAR TON CODE

console.log(`\n\n
EXEMPLE 2 - Génère une chaîne de HTML à partir d'un de noms de physiciens
`)
console.log(physicistsHtml)

if(typeof global !== 'undefined') {
  module.exports = { physicistsHtml }
}
