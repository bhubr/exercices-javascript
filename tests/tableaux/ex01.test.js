if(typeof global !== 'undefined') {
  global.sontDesNombres = require('../../tableaux/ex01')
}

describe('Objets - Exo 1 - map()', () => {

  it("sontDesNombres est une fonction", () => {
    assert.equal(typeof sontDesNombres, 'function')
  })

  it("sontDesNombres ne renvoie pas 'undefined'", () => {
    const result = sontDesNombres([])
    assert.ok(result !== undefined, "sontDesNombres renvoie 'undefined'");
  })

  it("sontDesNombres renvoie les valeurs attendues", () => {
    assert.deepEqual(
      sontDesNombres(['a', 7, 12, true, 71]),
      [false, true, true, false, true]
    )
  })

})