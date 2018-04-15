if(typeof global !== 'undefined') {
  const { physicistsHtml } = require('../../tableaux/ex09-map-join-html-2')
  global.physicistsHtml = physicistsHtml
}

describe('Tableaux - Exo 9 - map() et join() pour générer du HTML', () => {

  it("- physicistsHtml est une string", () => {
    assert.equal(typeof physicistsHtml, 'string')
  })

  it("- physicistsHtml contient les noms des physiciens et leurs initiales, chacun entouré de <li>...</li>, et joints", () => {
    assert.equal(physicistsHtml, '<li>Isaac Newton (IN)</li><li>Albert Einstein (AE)</li><li>Stephen Hawking (SH)</li>')
  })

})
