const assert = require('assert')
const catchConsole = require('../../lib/catchConsole')
const fs = require('fs')
const path = require('path')
const sourcePath = path.normalize(`${__dirname}/../../boucles/ex04.js`)
const source = fs.readFileSync(sourcePath).toString()

describe('Boucles - Exo 4 - for et tableaux', () => {

  it('affiche les prénoms', () => {
    catchConsole.enable(true)
    require('../../boucles/ex04')
    const actual = console.getCatched()
    catchConsole.disable()
    const expected = [
      'Nom à l\'indice 0 Robb Stark',
      'Nom à l\'indice 2 Sansa Stark',
      'Nom à l\'indice 4 Arya Stark',
      'Nom à l\'indice 6 Brandon Stark',
      'Nom à l\'indice 8 Rickon Stark',
      'Nom à l\'indice 1 Aegon Targaryen',
      'Nom à l\'indice 3 Theon Greyjoy',
      'Nom à l\'indice 5 Jaime Lannister',
      'Nom à l\'indice 7 Cersei Lannister',
      'Nom à l\'indice 9 Tyrion Lannister'
    ]
    assert.deepEqual(actual, expected, `L'affichage n'est pas celui désiré`)
  })

  it('console.log n\'est écrit que 2 fois au maximum', () => {
    const linesWithConsoleLog = source
    .split('\n')
    .filter(
      l => l.trim().startsWith('console.log')
    )
    const numConsoleLogs = linesWithConsoleLog.length
    assert.ok(numConsoleLogs <= 2, "console.log a été écrit plus de 2 fois")
    catchConsole.disable()
  })

})