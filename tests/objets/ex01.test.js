const assert = require('assert')
const obj = require('../../objets/ex01')

describe('Objets - Exo 1 - Ajouter des propriétés', () => {

  it("La propriété 'name' existe et contient 'Star Wars Episode IV'", () => {
    assert.notEqual(typeof obj.name, 'undefined', "La propriété 'name' n'est pas définie")
    assert.equal(typeof obj.name, 'string', "La propriété 'name' n'est pas une chaîne de caractères")
    assert.equal(obj.name, 'Star Wars Episode IV', "La propriété 'name' ne contient pas 'Star Wars Episode IV'")
  })

  it("La propriété 'genre' existe et contient 'Science-fiction'", () => {
    assert.notEqual(typeof obj.genre, 'undefined', "La propriété 'genre' n'est pas définie")
    assert.equal(typeof obj.genre, 'string', "La propriété 'genre' n'est pas une chaîne de caractères")
    assert.equal(obj.genre, 'Science-fiction', "La propriété 'genre' ne contient pas 'Science-fiction'")
  })

  it("La propriété 'release-year' existe et contient 1977", () => {
    assert.notEqual(typeof obj['release-year'], 'undefined', "La propriété 'release-year' n'est pas définie")
    assert.equal(typeof obj['release-year'], 'number', "La propriété 'release-year' n'est pas un nombre")
    assert.equal(obj['release-year'], 1977, "La propriété 'release-year' ne contient pas 1977")
  })

  it("La propriété 'main-actors' existe et contient ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']", () => {
    assert.notEqual(typeof obj['main-actors'], 'undefined', "La propriété 'main-actors' n'est pas définie")
    assert.ok(Array.isArray(obj['main-actors']), "La propriété 'main-actors' n'est pas un tableau")
    assert.deepEqual(obj['main-actors'], ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
      "La propriété 'main-actors' ne contient pas  ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']")
  })

})