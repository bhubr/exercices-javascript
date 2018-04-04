/*------------------------------------------------*
 | OBJETS / Exercice 3 / Supprimer des propriétés
 *------------------------------------------------*
 |
 | On peut effacer une propriété grâce à delete,
 | toujours avec les deux variantes syntaxiques,
 | suivant que la clé a des caractères "spéciaux" ou non:
 |
 |     - delete objet.propriete
 |     - delete objet['propriete']
 |
 *----------------------------------------------*
 |
 | ENONCE:
 | Ecrire une fonction deleteObjectProp() qui prend
 | deux arguments:
 |   - un objet
 |   - un nom de propriété (clé)
 | La fonction doit EFFACER une propriété de l'objet
 | en utilisant la clé.
 | Elle doit renvoyer l'objet.
 |
 | 2/ En partant de l'objet obj vide ci-dessous,
 | et en utilisant deleteObjectProp(),
 | effacer sur l'objet fourni les propriétés
 |   'pas-utile', 'prop-bidon', 'redondant'
 |
 */


// ------- Code à écrire/modifier -----------

function deleteObjectProp(/* ... */) {}

const obj = {
  nom: 'John Carpenter',
  metier: 'charpentier',
  'prop-bidon': 'Bla bla bla',
  'pas-utile': "Il fait beau",
  'redondant': 'John Carpenter'
}

// --------------------------------------------




// Ne pas toucher ceci
module.exports = { deleteObjectProp, obj }