/*------------------------------------------------*
 | OBJETS / Exercice 4 / Construire un objet
 *------------------------------------------------*
 |
 | On va écrire une fonction trierFilmsParGenre() qui à partir d'un
 | tableau de films, va construire un objet qui,
 | pour chaque genre, va contenir les NOMS des films
 | de ce genre.
 | La fonction prend un tableau en argument, et elle
 | renvoie l'objet créé.
 | Indice: la fonction renvoyant un objet, on va devoir
 | déclarer un objet vide au début de la fonction,
 | qu'on va "remplir" progressivement
 | 
 | Par exemple, à partir du tableau de films suivant,
 | on voudrait obtenir un objet filmsParGenre contenant:
 | {
 |   SF: [
 |    'Star Wars Episode IV'
 |    'Star Wars Episode V',
 |    'Star Wars Episode VI',
 |    'Matrix',
 |    'Blade Runner'
 |  ],
 |  Animation: [
 |    'Le Voyage de Chihiro',
 |    'Charlotte aux fraises',
 |    'Toy Story',
 |    'Toy Story 2'
 |  ],
 |  Horreur: [
 |    "L'Exorciste",
 |    'Shining'
 |  ]
 | }
 |
 */


// ------- Code à écrire / modifier ci-dessous -------


function trierFilmsParGenre(/*  */) {
}

const films = [
  { nom: 'Star Wars Episode IV', annee: 1977, genre: 'SF' },
  { nom: 'Star Wars Episode V', annee: 1980, genre: 'SF' },
  { nom: 'Star Wars Episode VI', annee: 1983, genre: 'SF' },
  { nom: 'Matrix', annee: 1999, genre: 'SF' },
  { nom: 'Blade Runner', annee: 1982, genre: 'SF' },
  { nom: 'Le Voyage de Chihiro', annee: 2002, genre: 'Animation' },
  { nom: 'Charlotte aux fraises', annee: 2006, genre: 'Animation' },
  { nom: 'Toy Story', annee: 1995, genre: 'Animation' },
  { nom: 'Toy Story 2', annee: 1999, genre: 'Animation' },
  { nom: "L'Exorciste", annee: 1972, genre: 'Horreur' },
  { nom: 'Shining', annee: 1980, genre: 'Horreur' }
]

const filmsParGenre = trierFilmsParGenre(films)



// ---------------------------------------------------


module.exports = {
  filmsParGenre,
  trierFilmsParGenre
}