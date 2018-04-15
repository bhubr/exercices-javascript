/*----------------------------------------------*
 | TABLEAUX / Exercice 9 / map()
 *----------------------------------------------*
 |
 | OBJECTIF: Combiner map() et join() pour obtenir,
 | à partir d'un tableau d'objets, du code HTML complet !
 |
 | L'exercice reprend le même principe que l'exemple
 */

 // ------------- DONNEES DE DEPART, ne pas modifier ---------------


// Un tableau d'objets, chacun ayant 4 propriétés : name, bio, instrument, img
const theBeatles = [
  {
    name: 'John Lennon',
    bio: 'Né le 9 octobre 1940 à Liverpool, John Lennon est mort le 8 décembre 1980 à l\'âge de 40 ans.',
    instrument: 'guitare',
    img: 'http://bit.do/beatles-john'
  },
  {
    name: 'Paul McCartney',
    bio: 'Né le 18 juin 1942 à Liverpool, Paul McCartney est un artiste orienté rock aujourd\'hui âgé de 75 ans.',
    instrument: 'basse',
    img: 'http://bit.do/beatles-paul'
  },
  {
    name: 'George Harrison',
    bio: 'Né le 24 février 1943 à Liverpool, George Harrison est mort le 29 novembre 2001 à l\'âge de 58 ans.',
    instrument: 'guitare',
    img: 'http://bit.do/beatles-george'
  },
  {
    name: 'Ringo Starr',
    bio: 'Né le 7 juillet 1940 à Dingle, Ringo Starr est un artiste orienté rock aujourd\'hui âgé de 77 ans.',
    instrument: 'batterie',
    img: 'http://bit.do/beatles-ringo'
  },
]

/**
 * Une fonction, écrite en fléchée, qui crée, à partir d'UN objet du tableau theBeatles,
 * un list item HTML. Pour créer cette fonction, on est parti d'une chaîne comme celle ci:
     <li>
       John Lennon joue de la guitare
     </li>
 * et on s'est demandé : comment obtenir un list item sous cette forme, mais paramétrable...
 */
const makeBeatleListItem = beatle => `<li>
  ${beatle.name} joue de la ${beatle.instrument}
</li>
`

/**
 * On appelle .map() sur le tableau d'objets...
 * En retour de .map(), on obtient un tableau de chaînes
 * On peut appeler un .join() derrière le .map() pour obtenir une chaîne
 */
const beatlesItemsHtml = theBeatles
  .map(makeBeatleListItem)
  .join('')

console.log(`
EXEMPLE - Génère une chaîne de HTML à partir du tableau d'objets
`)
console.log(beatlesItemsHtml)


 // -------- EXERCICE --------

 /**
  * Voici la chaîne dont tu dois t'inspirer, issue de la doc du media object de Bootstrap 4
  * (la source, mais tu n'en as pas besoin: https://getbootstrap.com/docs/4.0/layout/media-object/)

      <div class="media">
        <img class="mr-3" src="..." alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        </div>
      </div>

  * On te donne le squelette de la fonction makeBeatlesMediaObject(), qui reçoit
  * comme argument un objet "Beatle". La fonction doit renvoyer une chaîne HTML
  * semblable à celle ci-dessus, où on remplace ce qui doit l'être:
  *     - l'attribut src de l'image
  *     - l'attribut alt de l'image (utiliser le nom)
  *     - le CONTENU de la balise <h5>...</h5> (pas la balise elle-même)
  *     - le texte sous la balise h5
  * Un gros indice: le nom doit être utilisé 2 fois, la bio et l'image 1 fois,
  * et on ne se sert pas de l'instrument
  */

const makeBeatlesMediaObject = beatle => `` // REMPLACE `` PAR TON CODE ICI

const beatlesMediaObjectsHtml = '' // REMPLACE '' PAR TON CODE ICI
console.log(`
EXERCICE - Génère une chaîne de HTML contenant des media objects, à partir du tableau d'objets
`)
console.log(beatlesMediaObjectsHtml)


if(typeof global !== 'undefined') {
  module.exports = { beatlesMediaObjectsHtml }
}
