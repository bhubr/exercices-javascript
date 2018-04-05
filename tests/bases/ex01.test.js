const assert = require('assert')
const checks = require('../../lib/checks')
const { isNumber, isBoolean, isString } = require('../../bases/ex01')

describe('Bases - Exo 1 - typeof', () => {

  it("isNumber est une fonction", () => {
    assert.equal(typeof isNumber, 'function')
  })

  it("isNumber(43) renvoie true", () => {
    assert.ok(isNumber(43), 'La fonction isNumber renvoie autre chose que true pour 43')
  })

  it("isNumber(3.14) renvoie true", () => {
    assert.ok(isNumber(3.14), 'La fonction isNumber renvoie autre chose que true pour 3.14')
  })

  it("isNumber('John') renvoie false", () => {
    assert.strictEqual(isNumber('John'), false, 'La fonction isNumber renvoie autre chose que false pour "John"')
  })

  it('isNumber({ cle: "Une valeur" }) renvoie false', () => {
    assert.strictEqual(
      isNumber({ cle: "Une valeur" }), false,
      'La fonction isNumber renvoie autre chose que false pour { cle: "Une valeur" }'
    )
  })

  it("isString est une fonction", () => {
    assert.equal(typeof isString, 'function')
  })

  it("('Hello') renvoie true", () => {
    assert.ok(isString('Hello'), 'La fonction isString renvoie autre chose que true pour "Hello"')
  })

  it("isString(3.14) renvoie false", () => {
    assert.strictEqual(isString(3.14), false, 'La fonction isString renvoie autre chose que false pour 3.14')
  })

  it("isBoolean est une fonction", () => {
    assert.equal(typeof isBoolean, 'function')
  })

  it("isBoolean(false) renvoie true", () => {
    assert.ok(isBoolean(false), 'La fonction isBoolean renvoie autre chose que true pour le param. false')
  })

  it("isBoolean('John') renvoie false", () => {
    assert.strictEqual(isBoolean('John'), false, 'La fonction isBoolean renvoie autre chose que false pour "John"')
  })

})