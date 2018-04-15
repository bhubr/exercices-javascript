if(typeof global !== 'undefined') {
  const { beatlesMediaObjectsHtml } =
    require('../../tableaux/ex11-map-join-html-4')
  global.beatlesMediaObjectsHtml = beatlesMediaObjectsHtml
}
const expected = /* @html */ `<div class="media">
  <img class="mr-3" src="http://bit.do/beatles-john" alt="John Lennon">
  <div class="media-body">
    <h5 class="mt-0">John Lennon</h5>
    Né le 9 octobre 1940 à Liverpool, John Lennon est mort le 8 décembre 1980 à l'âge de 40 ans.
  </div>
</div><div class="media">
  <img class="mr-3" src="http://bit.do/beatles-paul" alt="Paul McCartney">
  <div class="media-body">
    <h5 class="mt-0">Paul McCartney</h5>
    Né le 18 juin 1942 à Liverpool, Paul McCartney est un artiste orienté rock aujourd'hui âgé de 75 ans.
  </div>
</div><div class="media">
  <img class="mr-3" src="http://bit.do/beatles-george" alt="George Harrison">
  <div class="media-body">
    <h5 class="mt-0">George Harrison</h5>
    Né le 24 février 1943 à Liverpool, George Harrison est mort le 29 novembre 2001 à l'âge de 58 ans.
  </div>
</div><div class="media">
  <img class="mr-3" src="http://bit.do/beatles-ringo" alt="Ringo Starr">
  <div class="media-body">
    <h5 class="mt-0">Ringo Starr</h5>
    Né le 7 juillet 1940 à Dingle, Ringo Starr est un artiste orienté rock aujourd'hui âgé de 77 ans.
  </div>
</div>`

describe('Tableaux - Exo 11 - map() suivi de join() pour générer du HTML', () => {

  it("- beatlesMediaObjectsHtml contient le HTML composé des 4 media objects (un par Beatle)", () => {
    assert.equal(beatlesMediaObjectsHtml, expected)
  })
})
