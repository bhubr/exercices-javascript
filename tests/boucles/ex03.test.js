const assert = require('assert')
const catchConsole = require('../../lib/catchConsole')

describe('Boucles - Exo 3 - for', () => {

  it("affiche les nombres de 5 à 0", () => {
    catchConsole.enable()
    require('../../boucles/ex03')
    const consoleOutput = console.getCatched()
    catchConsole.disable()
    const actual = consoleOutput.join('\n')
    const expected = '30\n40\n50\n60'
    const expectedWithIndent = [30, 40, 50, 60].map(l => '      ' + l)
    .join('\n')
    assert.equal(actual, expected, `L'affichage est différent de:\n${expectedWithIndent}\n\n`)
  })

})