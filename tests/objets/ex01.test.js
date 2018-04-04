const assert = require('assert')
const checks = require('../../lib/checks')
const { movie, setObjectProp } = require('../../objets/ex01')

describe('Objets - Exo 1 - Ecrire un objet', () => {

  it("setObjectProp est une fonction", () => {
    assert.equal(typeof setObjectProp, 'function')
  })

  it("setObjectProp écrit une propriété sur l'objet", () => {
    const obj = { foo: 'bar' }
    const ret = setObjectProp(obj, 'dummy-prop', { dummy: 'value' })
    assert.deepEqual({}, { foo: 'bar', dummy: 'value' })
  })

  it("La propriété 'name' existe et contient 'Star Wars Episode IV'", () =>
    checks.value(movie, 'name', 'string', 'Star Wars Episode IV')
  )

  it("La propriété 'genre' existe et contient 'Science-fiction'", () =>
    checks.value(movie, 'genre', 'string', 'Science-fiction')
  )

  it("La propriété 'release-year' existe et contient 1977", () =>
    checks.value(movie, 'release-year', 'number', 1977)
  )

  it("La propriété 'main-actors' existe et contient ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']", () => {
    assert.notEqual(typeof movie['main-actors'], 'undefined', "La propriété 'main-actors' n'est pas définie")
    assert.ok(Array.isArray(movie['main-actors']), "La propriété 'main-actors' n'est pas un tableau")
    assert.deepEqual(movie['main-actors'], ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
      "La propriété 'main-actors' ne contient pas  ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford']")
  })

})