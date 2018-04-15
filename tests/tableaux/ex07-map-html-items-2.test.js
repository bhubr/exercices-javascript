if(typeof global !== 'undefined') {
  const { stoneItems } =
    require('../../tableaux/ex07-map-html-items-2')
  global.stoneItems = stoneItems
}

describe('Tableaux - Exo 7 - map() renvoyant des chaînes HTML', () => {

  it('- stoneItems contient les noms Rolling Stones, enveloppés dans des <li> avec un id comprenant leur index et leur "slug"', () => {
    assert.deepEqual(stoneItems, [
      '<li id="stone-0-mick-jagger">Mick Jagger is a Rolling Stone</li>',
      '<li id="stone-1-keith-richards">Keith Richards is a Rolling Stone</li>',
      '<li id="stone-2-ronnie-wood">Ronnie Wood is a Rolling Stone</li>',
      '<li id="stone-3-charlie-watts">Charlie Watts is a Rolling Stone</li>'
    ])
  })

})
