const assert = require('assert')
const checks = require('../../lib/checks')
const obj = require('../../objets/ex01')

describe('Objets - Exo 1 - Ecrire un objet', () => {

  it("La propriété 'name' existe et contient 'Star Wars Episode IV'", () =>
    checks.value(obj, 'name', 'string', 'Star Wars Episode IV')
  )

  it("La propriété 'genre' existe et contient 'Science-fiction'", () =>
    checks.value(obj, 'genre', 'string', 'Science-fiction')
  )

  it("La propriété 'release-year' existe et contient 1977", () =>
    checks.value(obj, 'release-year', 'number', 1977)
    )

  it("La propriété 'main-actors' existe et contient ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']", () => {
    assert.notEqual(typeof obj['main-actors'], 'undefined', "La propriété 'main-actors' n'est pas définie")
    assert.ok(Array.isArray(obj['main-actors']), "La propriété 'main-actors' n'est pas un tableau")
    assert.deepEqual(obj['main-actors'], ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
      "La propriété 'main-actors' ne contient pas  ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']")
  })

})