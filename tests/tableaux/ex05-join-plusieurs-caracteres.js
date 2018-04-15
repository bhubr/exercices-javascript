if(typeof global !== 'undefined') {
  const { moviesString, albumsString } =
    require('../../tableaux/ex05-join-plusieurs-caracteres')
  global.moviesString = moviesString
  global.albumsString = albumsString
}

describe('Tableaux - Exo 5 - Join avec séparateur/glue à plus d\'un caractère', () => {

  it("- albumsString contient les noms d\'albums, joints avec le bon séparateur", () => {
    assert.ok(albumsString === 'Blue <> Continuum <> Is This It <> Definitely Maybe')
  })

  it('- moviesString contient les noms des films, un sur chaque ligne, préfixé de "* " ', () => {
    assert.ok(moviesString === '* The Matrix\n* Interstellar\n* Avatar\n* Alien')
  })
})
