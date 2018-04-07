let originalLog
let silentMode

const log = function(...args) {
  let consoleLine = ''
  const argsArray = [...args]
  argsArray.forEach((bit, i) => {
    const separator = i === 0 ? '' : ' ';
    consoleLine += separator + bit;
  })
  console._catched.push(consoleLine)
  if(! silentMode) {
    originalLog.apply(console, argsArray)
  }
}

const enable = (silent) => {
  silentMode = silent === true
  originalLog = console.log
  console.log = log
  console._catched = []
  console.getCatched = function() {
    return this._catched
  }
  console.flushCatched = function() {
    this._catched = []
  }
}

const disable = () => {
  console.log = originalLog
  delete console._catched
  delete console.getCatched
  delete console.flushCatched
}

module.exports = { enable, disable }