if(typeof global !== 'undefined') {
  const { moviesString, albumsString, maryPoppinsString, htmlListString } =
    require('../../tableaux/ex04-join-bases')
  global.moviesString = moviesString
  global.albumsString = albumsString
  global.maryPoppinsString = maryPoppinsString
  global.htmlListString = htmlListString
}

describe('Tableaux - Exo 4 - Join avec séparateur/glue d\'un caractère au plus', () => {

  it("- moviesString contient les noms de films, joints avec le bon séparateur", () => {
    assert.ok(moviesString === 'The Matrix+Interstellar+Avatar+Alien')
  })

  it("- albumsString contient les noms d\'albums, joints avec le bon séparateur", () => {
    assert.ok(albumsString === 'Blue*Continuum*Is This It*Definitely Maybe')
  })

  it('- maryPoppinsString contient le mot "supercalifragilisticexpialidocious"', () => {
    assert.ok(maryPoppinsString === 'supercalifragilisticexpialidocious')
  })

  it('- htmlListString contient les items recollés', () => {
    assert.ok(htmlListString === '<li>JavaScript</li><li>Express</li><li>React</li>')
  })
})
