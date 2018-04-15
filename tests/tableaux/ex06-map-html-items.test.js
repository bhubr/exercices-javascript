if(typeof global !== 'undefined') {
  const { stoneItems } =
    require('../../tableaux/ex06-map-html-items')
  global.stoneItems = stoneItems
}

describe('Tableaux - Exo 6 - map() renvoyant des chaînes HTML', () => {

  it('- stoneItems contient les noms Rolling Stones, enveloppés dans des <li> avec la classe "stone"', () => {
    assert.deepEqual(stoneItems, [
      '<li class="stone">Mick Jagger is a Rolling Stone</li>',
      '<li class="stone">Keith Richards is a Rolling Stone</li>',
      '<li class="stone">Ronnie Wood is a Rolling Stone</li>',
      '<li class="stone">Charlie Watts is a Rolling Stone</li>'
    ])
  })

})
