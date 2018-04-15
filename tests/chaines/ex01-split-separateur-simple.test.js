if(typeof global !== 'undefined') {
  const { starkChildren, deobfuscatedWords } = require('../../chaines/ex01-split-separateur-simple')
  global.starkChildren = starkChildren
  global.deobfuscatedWords = deobfuscatedWords
}

describe('Chaines - Exo 1 - Split avec séparateur simple', () => {

  it("- starkChildren est un tableau", () => {
    assert.ok(Array.isArray(starkChildren), 'On doit obtenir un tableau dans starkChildren')
  })

  it("- starkChildren contient les noms des enfants Stark", () => {
    assert.deepEqual(starkChildren, [ 'Robb', 'Sansa', 'Arya', 'Brandon', 'Rickon' ])
  })

    it("- deobfuscatedWords est un tableau", () => {
      assert.ok(Array.isArray(deobfuscatedWords), 'On doit obtenir un tableau dans starkChildren')
    })

    it("- deobfuscatedWords contient des mots en clair", () => {
      assert.deepEqual(deobfuscatedWords, [ 'Cette', 'phrase', 'devrait', 'être', 'plus', 'lisible' ])
    })
})
