/*----------------------------------------------*
 | BOUCLES / Exercice 3 / boucle for & tableau
 *----------------------------------------------*
 |
 | OBJECTIF
 | utiliser la boucle for "classique", pour
 | afficher des éléments d'un tableau.
 |           
 | ENONCE :
 | On te donne un tableau contenant 10 noms.
 |
 | Il faut écrire deux boucles.
 |
 | La première doit afficher :
 |   Nom à l'indice 0 Robb Stark
 |   Nom à l'indice 2 Sansa Stark
 |   Nom à l'indice 4 Arya Stark
 |   Nom à l'indice 6 Brandon Stark
 |   Nom à l'indice 8 Rickon Stark
 |
 | La deuxième doit afficher :
 |   Nom à l'indice 1 Aegon Targaryen
 |   Nom à l'indice 3 Theon Greyjoy
 |   Nom à l'indice 5 Jaime Lannister
 |   Nom à l'indice 7 Cersei Lannister
 |   Nom à l'indice 9 Tyrion Lannister
 |
 */

 const charactersOfGoT = [
  'Robb Stark',
  'Aegon Targaryen',
  'Sansa Stark',
  'Theon Greyjoy',
  'Arya Stark',
  'Jaime Lannister',
  'Brandon Stark',
  'Cersei Lannister',
  'Rickon Stark',
  'Tyrion Lannister'
]

// -------- Insère ton code ci-dessous --------

for (i = 0 ; i < charactersOfGoT.length ; i = i + 2){
  console.log(`Nom à l'indice ${[i]} ${charactersOfGoT[i]}`)
}
for (i = 1 ; i < charactersOfGoT.length ; i = i + 2){
  console.log(`Nom à l'indice ${[i]} ${charactersOfGoT[i]}`)
}
