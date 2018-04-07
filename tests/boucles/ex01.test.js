const assert = require('assert')
const catchConsole = require('../../lib/catchConsole')

describe('Boucles - Exo 1 - for', () => {

  it("affiche les nombres de 6 à 10", () => {
    catchConsole.enable()
    require('../../boucles/ex01')
    const consoleOutput = console.getCatched()
    catchConsole.disable()
    const actual = consoleOutput.join('\n')
    const expected = '6\n7\n8\n9\n10'
    const expectedWithIndent = [6, 7, 8, 9, 10].map(l => '      ' + l)
    .join('\n')
    assert.equal(actual, expected, `L'affichage est différent de:\n${expectedWithIndent}\n\n`)
  })

})