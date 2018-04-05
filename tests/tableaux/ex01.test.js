const assert = require('assert')
const checks = require('../../lib/checks')
const { sontDesNombres } = require('../../tableaux/ex01')

describe('Objets - Exo 1 - map()', () => {

  it("sontDesNombres est une fonction", () => {
    assert.equal(typeof sontDesNombres, 'function')
  })

  it("sontDesNombres renvoie les valeurs attendues", () => {
    assert.deepEqual(
      sontDesNombres(['a', 7, 12, true, 71]),
      [false, true, true, false, true]
    )
  })

})