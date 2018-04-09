if(typeof global !== 'undefined') {
  catchConsole.enable(true)
  require('../../boucles/ex03')
  catchConsole.disable()
}
describe('Boucles - Exo 3 - for', () => {

  it("affiche les nombres de 5 à 0", () => {
    const consoleOutput = catchConsole.get()
    const actual = consoleOutput.join('\n')
    const expected = '30\n40\n50\n60'
    const expectedWithIndent = [30, 40, 50, 60].map(l => '      ' + l)
    .join('\n')
    assert.equal(actual, expected, `L'affichage est différent de:\n${expectedWithIndent}\n\n`)
  })

})