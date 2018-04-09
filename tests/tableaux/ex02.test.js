if(typeof global !== 'undefined') {
  global.nomsComplets = require('../../tableaux/ex02')
}

describe('Objets - Exo 2 - map()', () => {

  it("nomsComplets est une fonction", () => {
    assert.equal(typeof nomsComplets, 'function')
  })

  it("nomsComplets ne renvoie pas 'undefined'", () => {
    const result = nomsComplets([])
    assert.ok(result !== undefined, "nomsComplets renvoie 'undefined'");
  })

  it("nomsComplets renvoie les valeurs attendues", () => {
    const tableauTest = [
      { prenom: 'David', nom: 'Bowie' },
      { prenom: 'John', nom: 'Lennon' }
    ]
    assert.deepEqual(
      nomsComplets(tableauTest),
      ['David Bowie', 'John Lennon'], "nomsComplets ne renvoie pas le résultat attendu"
    )
  })

})