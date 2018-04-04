const assert = require('assert')
const checks = require('../../lib/checks')
const { trierFilmsParGenre, filmsParGenre } = require('../../objets/ex04')

describe('Objets - Exo 4 - Construire un objet', () => {

  it("Fonctionne pour tout tableau de films", () => {
    const movies = [
      { nom: 'Terminator', genre: 'SF' },
      { nom: 'Predator', genre: 'SF' },
      { nom: 'Dead Poets Society', genre: 'Drama' }
    ]
    const moviesByGenre = {
      SF: ['Terminator', 'Predator'],
      Drama: ['Dead Poets Society']
    }
    assert.deepEqual(trierFilmsParGenre(movies), moviesByGenre)
  })

  it("Renvoie l'objet attendu", () => {
  	assert.deepEqual(filmsParGenre,
      {
        SF: [
         'Star Wars Episode IV',
         'Star Wars Episode V',
         'Star Wars Episode VI',
         'Matrix',
         'Blade Runner'
       ],
       Animation: [
         'Le Voyage de Chihiro',
         'Charlotte aux fraises',
         'Toy Story',
         'Toy Story 2'
       ],
       Horreur: [
         "L'Exorciste",
         'Shining'
       ]
      }
	  )
  })

})