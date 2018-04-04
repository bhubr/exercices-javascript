const moviesOrig = [
  {
    name: 'Star Wars Episode IV: A New Hope'
  },
  {
    name: 'Star Wars Episode V: Empire Strikes Back'
  },
  {
    name: 'Star Wars Episode IV: Return Of The Jedi'
  }
]

module.exports = () => {
  const movies = []
  for(let m of moviesOrig) {
    movies.push({ ...m })
  }
  return movies
}