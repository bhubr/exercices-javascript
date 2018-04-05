const assert = require('assert')
const checks = require('../../lib/checks')
const { anneesEntre } = require('../../boucles/ex01')

describe('Boucles - Exo 1 - années entre', () => {

  it("anneesEntre est une fonction", () => {
    assert.equal(typeof anneesEntre, 'function')
  })

  it("anneesEntre renvoie un tableau", () => {
    const attendu = [2012, 2013, 2014, 2015, 2016]
    assert.deepEqual(
      anneesEntre(2012, 2016),
      attendu,
      "anneesEntre ne renvoie pas le résultat attendu"
    )
  })

})