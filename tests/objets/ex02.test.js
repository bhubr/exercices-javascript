const assert = require('assert')
const checks = require('../../lib/checks')
const arrOrig = require('../../objets/ex02movies')()
const { movies, setPropOnObjects } = require('../../objets/ex02')

const arrOrigExpected = [
  {
    name: 'Star Wars Episode IV: A New Hope'
  },
  {
    name: 'Star Wars Episode V: Empire Strikes Back'
  },
  {
    name: 'Star Wars Episode IV: Return Of The Jedi'
  }
]

describe('Objets - Exo 2 - Ajouter des propriétés', () => {

  it("Le fichier original ex02movies n'est pas modifié", () => {
    assert.deepEqual(arrOrig, arrOrigExpected,
      "Le fichier original ex02movies a été modifié")
  })

  it("La propriété 'genre' existe sur CHAQUE objet et contient 'Science-fiction'", () =>
    checks.values(movies, 'genre', 'string', 'Science-fiction')
  )

  it("La propriété 'author-name' existe sur CHAQUE objet et contient 'George Lucas'", () =>
    checks.values(movies, 'author-name', 'string', 'George Lucas')
  )

})