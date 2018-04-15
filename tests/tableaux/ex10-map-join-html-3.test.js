if(typeof global !== 'undefined') {
  const { movieListHtml } =
    require('../../tableaux/ex10-map-join-html-3')
  global.movieListHtml = movieListHtml
}
const expected = /* @html */ `<div id="movie-1">
  <h4>Heat</h4>
  <p>Heat was released in 1995 and was directed by Michael Mann
</div>
<div id="movie-2">
  <h4>Snatch</h4>
  <p>Snatch was released in 2000 and was directed by Guy Ritchie
</div>
<div id="movie-3">
  <h4>Unforgiven</h4>
  <p>Unforgiven was released in 1992 and was directed by Clint Eastwood
</div>
`

describe('Tableaux - Exo 10 - map() suivi de join() pour générer du HTML', () => {

  it("- movieListHtml contient le HTML composé des 3 div (une par film)", () => {
    assert.equal(movieListHtml, expected)
  })
})
