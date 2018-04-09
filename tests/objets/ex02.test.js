const ex02 = require('../../objets/ex02')
const { setPropOnObjects, movies } = ex02

describe('Objets - Exo 2 - Ajouter des propriétés', () => {

  it("La propriété 'genre' existe sur CHAQUE objet et contient 'Science-fiction'", () =>
    checks.values(movies, 'genre', 'string', 'Science-fiction')
  )

  it("La propriété 'author-name' existe sur CHAQUE objet et contient 'George Lucas'", () =>
    checks.values(movies, 'author-name', 'string', 'George Lucas')
  )

})