if(typeof global !== 'undefined') {
  const { theDaltonHtmlList } = require('../../tableaux/ex08-map-join-html-1')
  global.theDaltonHtmlList = theDaltonHtmlList
}

describe('Tableaux - Exo 8 - map() et join() pour générer du HTML', () => {

  it("- theDaltonHtmlList est une string", () => {
    assert.equal(typeof theDaltonHtmlList, 'string')
  })

  it("- theDaltonHtmlList contient les noms des Dalton, chacun entouré de <li>...</li>, et joints", () => {
    assert.equal(theDaltonHtmlList, '<li>Joe</li><li>Jack</li><li>William</li><li>Averell</li>')
  })

})
