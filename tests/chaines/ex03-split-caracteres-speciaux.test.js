if(typeof global !== 'undefined') {
  const { storyWords, songLines } =
    require('../../chaines/ex03-split-caracteres-speciaux')
  global.storyWords = storyWords
  global.songLines = songLines
}

describe('Chaines - Exo 3 - Split avec séparateur à caractères spéciaux', () => {

  it("- storyWords est un tableau", () => {
    assert.ok(Array.isArray(storyWords), 'On doit obtenir un tableau dans storyWords')
  })

  it("- storyWords contient des mots séparés", () => {
    assert.deepEqual(storyWords, [ 'Once', 'upon', 'a', 'time', 'in', 'Wonderland' ])
  })

  it("- songLines est un tableau", () => {
    assert.ok(Array.isArray(songLines), 'On doit obtenir un tableau dans songLines')
  })

  it("- songLines contient les lignes de la chanson, séparées", () => {
    assert.deepEqual(songLines, [
      "Here's a little song I wrote",
      "You might want to sing it note for note",
      "Don't worry, be happy"
    ])
  })

})
