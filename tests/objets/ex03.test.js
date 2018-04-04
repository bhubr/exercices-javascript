const assert = require('assert')
const checks = require('../../lib/checks')
const { obj, deleteObjectProp } = require('../../objets/ex03')

describe('Objets - Exo 3 - Supprimer des propriétés', () => {

  it("deleteObjectProp est une fonction", () => {
    assert.equal(typeof deleteObjectProp, 'function')
  })

  it("deleteObjectProp efface une propriété de l'objet", () => {
    const obj = { foo: 'bar', fuu: 'baar' }
    const ret = deleteObjectProp(obj, 'fuu')
    assert.deepEqual(ret, { foo: 'bar' })
  })

  it("La propriété 'nom' existe et contient 'John Carpenter'", () =>
    checks.value(obj, 'nom', 'string', 'John Carpenter')
  )

  it("La propriété 'metier' existe et contient 'charpentier'", () =>
    checks.value(obj, 'metier', 'string', 'charpentier')
  )

  it("La propriété 'prop-bidon' a bien été supprimée", () =>
    checks.undef(obj, 'prop-bidon')
  )

  it("La propriété 'pas-utile' a bien été supprimée", () =>
    checks.undef(obj, 'pas-utile')
  )

  it("La propriété 'redondant' a bien été supprimée", () =>
    checks.undef(obj, 'redondant')
  )

})