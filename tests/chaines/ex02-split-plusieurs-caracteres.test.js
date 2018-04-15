if(typeof global !== 'undefined') {
  const { vegetablesArray, animalsArray, singersString, singersArray } =
    require('../../chaines/ex02-split-plusieurs-caracteres')
  global.vegetablesArray = vegetablesArray
  global.animalsArray = animalsArray
  global.singersString = singersString
  global.singersArray = singersArray
}

describe('Chaines - Exo 2 - Split avec séparateur à plusieurs caractères', () => {

  it("- vegetablesArray est un tableau", () => {
    assert.ok(Array.isArray(vegetablesArray), 'On doit obtenir un tableau dans vegetablesArray')
  })

  it("- vegetablesArray contient des noms de légumes", () => {
    assert.deepEqual(vegetablesArray, [ 'Broccoli', 'Carrot', 'Zucchini', 'Onion', 'Leek' ])
  })

  it("- animalsArray est un tableau", () => {
    assert.ok(Array.isArray(animalsArray), 'On doit obtenir un tableau dans animalsArray')
  })

  it("- animalsArray contient des noms d'animaux", () => {
    assert.deepEqual(animalsArray, [ 'Goat', 'Cow', 'Cat', 'Dog', 'Pig' ])
  })

  it("- singersString a été modifiée pour mettre le bon nombre d'espaces", () => {
    assert.ok(singersString === 'Sting Madonna Prince Eminem Adele', 'singersString ne contient pas ce qui est attendu')
  })

  it("- singersArray contient des noms de chanteurs et aucune chaîne vide", () => {
    assert.deepEqual(singersArray, [ 'Sting', 'Madonna', 'Prince', 'Eminem', 'Adele' ])
  })
})
