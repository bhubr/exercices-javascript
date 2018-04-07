const assert = require('assert')
const catchConsole = require('../../lib/catchConsole')

describe('Boucles - Exo 2 - for', () => {

  it("affiche les nombres de 5 à 0", () => {
    catchConsole.enable()
    require('../../boucles/ex02')
    const consoleOutput = console.getCatched()
    catchConsole.disable()
    const actual = consoleOutput.join('\n')
    const expected = '5\n4\n3\n2\n1\n0'
    const expectedWithIndent = [5, 4, 3, 2, 1, 0].map(l => '      ' + l)
    .join('\n')
    assert.equal(actual, expected, `L'affichage est différent de:\n${expectedWithIndent}\n\n`)
  })

})