const assert = require('assert')
const checks = require('../../lib/checks')
const starks = require('../../tableaux/ex03')

describe('Objets - Exo 3 - push()', () => {

  it("Le tableau starks contient les valeurs attendues", () => {
    const expected = [
      'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'
    ]
    assert.deepEqual(starks, expected, "Le tableau ne contient pas les valeurs attendues")
  })

})