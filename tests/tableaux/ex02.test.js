const assert = require('assert')
const checks = require('../../lib/checks')
const { nomsComplets } = require('../../tableaux/ex02')

describe('Objets - Exo 2 - map()', () => {

  it("nomsComplets est une fonction", () => {
    assert.equal(typeof nomsComplets, 'function')
  })

  it("nomsComplets renvoie les valeurs attendues", () => {
    const tableauTest = [
      { prenom: 'David', nom: 'Bowie' },
      { prenom: 'John', nom: 'Lennon' }
    ]
    assert.deepEqual(
      nomsComplets(tableauTest),
      ['David Bowie', 'John Lennon']
    )
  })

})